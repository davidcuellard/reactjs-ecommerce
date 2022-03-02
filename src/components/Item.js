import React from 'react'

function Item(props) {
    return (
    <>
        <label> { props.name } </label>
        <img src= {props.img} className = 'itemImg' />
        <label> $ {props.price} </label>
        <button> Más detalles </button>
        <label> Stock: {props.stock} </label>
    </>
  )
}

export default Item