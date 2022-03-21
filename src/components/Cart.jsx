import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

function Cart() {
    const { cartList, vaciarCart, removeItem, cartLength, totalPriceFx, totalPrice } = useCartContext()

    setTimeout(() => {
        totalPriceFx()      
    }, 10);
    
    
    return (
        <div>
            <h2> Cart </h2>
            { cartLength ? 
                        <div className="nothing"> 
                            <label> No tienes productos agregados en el carrito </label>
                            <Link to={`/`}>  <button> Seguir comprando </button></Link> 
                        </div> 
                        : 
                        <>
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
                            <h3>Total: {totalPrice} USD</h3>
                            <button onClick={ vaciarCart }>Vaciar carrito</button>
                        </>
            }
        </div>
    )
}

export default Cart