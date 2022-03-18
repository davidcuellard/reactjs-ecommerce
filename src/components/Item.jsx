import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
    <>
        <label> { props.name } </label>
        <img src= {props.img} className = 'itemImg' />
        <label> $ {props.price} </label>
        <Link to={`/detalle/${props.id}`}>  <button> Más detalles </button></Link>
    </>
  )
}

export default Item