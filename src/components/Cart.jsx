import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import ModalFin from './ModalFin'

function Cart() {
    const { cartList, vaciarCart, removeItem, cartLength, totalPrice, totalPriceFx } = useCartContext() 
    const [modalShow, setModalShow] = useState(false);
    const [uniqueCode, setUniqueCode] = useState('');

    //Se utiliza el setTimeOut para no renderizar dos componentes al tiempo
    setTimeout(() => {
        totalPriceFx() 
    }, 10);
    const [inputName, setInputName] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [inputEmail, setInputEmail] = useState('')

    const buyerVals = async() => {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        
        let orden = {}
        orden.buyer = {name: inputName, phone: inputPhone, email: inputEmail}
        orden.items = cartList.map(res => {
                const id = res.id
                const name = res.name
                const price = res.price * res.cantidad
                return {id, name, price}
            })

        orden.date = dd + '/' + mm + '/' + yyyy;
        orden.total = totalPrice  
        orden.state = "En proceso"
        
        
        const db = getFirestore()
        const queryCollection = collection(db, "ordenes")
        await addDoc(queryCollection, orden)
            .then(resp => setUniqueCode(resp.id))
            .catch(err => console.error(err))

        const queryActualizarStock = await query(
            collection(db, "productos"), where( documentId() , 'in' , cartList.map(it => it.id) )
        )

        const bacth = writeBatch(db)

        await getDocs(queryActualizarStock)
                .then(resp => resp.docs.forEach(res => bacth.update(res.ref, {
                    stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
                })))
        bacth.commit()

        setModalShow(true)
    }
    
    function checkout(){
        setModalShow(false)
        vaciarCart()
    }



    return (
        <div>
            <h2> Cart </h2>
            { cartLength ? 
                        <div className="nothing"> 
                            <label> No tienes productos agregados en el carrito </label>
                            <Link to={`/`}>  <button> Seguir comprando </button></Link> 
                        </div> 
                        : 
                        <div className='cartContainer'>
                            <div className='cartLeft'>
                            { cartList.map(product => 
                            <div key={ product.id } className="cartCard">
                                <img src= {product.img} className = 'itemImgCart' />
                                <div className='details'>
                                    <label> { product.name } </label>
                                    <label> Precio: {product.price} </label>
                                    <label> Cantidad: {product.cantidad} </label>
                                    <button onClick= {() => removeItem(product.id)} > 🗑️  </button>
                                </div>
                            </div>
                            )}
                            </div>
                            <div className='cartRight'> 
                            <form>
                                <label>
                                    Nombre: <input type="text" name="name" value={inputName} onInput={e => setInputName(e.target.value)}/>
                                    Teléfono: <input type="number" name="phone" value={inputPhone} onInput={e => setInputPhone(e.target.value)} />
                                    Email: <input type="email" name="email" value={inputEmail} onInput={e => setInputEmail(e.target.value)} />
                                </label>
                                </form>
                                <h3>Total: { totalPrice } USD</h3>
                                <button onClick={ buyerVals }>Terminar Comprar</button>
                                <button onClick={ vaciarCart }>Vaciar carrito</button>
                                    
                                <ModalFin show={ modalShow } onHide={() => checkout() } code = {uniqueCode} />
                                
                            </div>
                        </div>
            }


        </div>
    )
}

export default Cart