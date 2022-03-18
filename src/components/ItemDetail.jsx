import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'
import ItemCount from './ItemCount'

function ItemDetail( {product} ) {
    const [option, setOption] = useState(true)

    const { agregarCart, cartList} = useCartContext()

    function onAdd(cantidad) {
/*         console.log(`Se agregó ${cantidad} de productos`) */
        setOption(false)
        agregarCart({ ...product, cantidad })
    }

    return (
    <div className='itemDetail'>
        <img src= {product.img} className = 'itemImg' />
        <div className='info'>
            <h3> { product.name } </h3>
            <label> {product.det} </label>
            <label> Precio: $ {product.price} </label>
            
            { option ? 
                        <ItemCount stock = { Number(product.stock)} initial = {1} onAdd = { onAdd }/> : 
                        <>
                        <Link to={`/`}>  <button> Seguir comprando </button></Link>
                        <Link to={`/cart`}>  <button> Terminar compra </button></Link>
                        </>
            }

        </div>
    </div>
  )
}

export default ItemDetail

