import React from 'react'

function ItemDetail(props) {
    return (
    <div className='itemDetail'>
        <img src= {props.product.img} className = 'itemImg' />
        <div className='info'>
            <h3> { props.product.name } </h3>
            <label> {props.product.det} </label>
            <label> Precio: $ {props.product.price} </label>
        </div>
    </div>
  )
}

export default ItemDetail

