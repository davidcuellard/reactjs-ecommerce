import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

function ItemDetail(props) {
    const [option, setOption] = useState(true)

    function onAdd(cantidad) {
        console.log(`Se agregó ${cantidad} de productos`)
        setOption(false)
    }

    return (
    <div className='itemDetail'>
        <img src= {props.product.img} className = 'itemImg' />
        <div className='info'>
            <h3> { props.product.name } </h3>
            <label> {props.product.det} </label>
            <label> Precio: $ {props.product.price} </label>
            
            { option ? 
                        <ItemCount stock = { Number(props.product.stock)} initial = {1} onAdd = { onAdd }/> : 
                        <Link to={`/cart`}>  <button> Terminar compra </button></Link>
            }

        </div>
    </div>
  )
}

export default ItemDetail

