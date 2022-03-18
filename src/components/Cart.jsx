import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'

function Cart() {
    const { cartList, vaciarCart, removeItem, cartLength } = useCartContext()
    

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
                                    <label> Cantidad: {} </label>
                                    <button onClick={ removeItem }> 🗑️  </button>
                                </div>
                            </div>
                            )}
                            <button onClick={ vaciarCart }>Vaciar carrito</button>
                        </>
            
            }

        </div>
        
    )
}

export default Cart