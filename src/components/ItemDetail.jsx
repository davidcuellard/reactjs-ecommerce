import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCount from './ItemCount'

function ItemDetail( {product} ) {
    const [option, setOption] = useState(true)

    const { addCart } = useCartContext()

    function onAdd(amount) {
        setOption(false)
        addCart({ ...product, amount: amount })
    }

    return (
    <div className='itemDetail'>
        <img src= { product.img } className = 'itemImg' />
        <div className='info'>
            <h3> { product.name } </h3>
            <label> {product.det} </label>
            <label> Precio: $ {product.price} </label>
            <label> Stock:  {product.stock} </label>
            
            { option ? 
                        <ItemCount id = { product.id} stock = { product.stock} initial = {0} onAdd = { onAdd }/> : 
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

