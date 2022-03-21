import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../context/CartContext'

function ItemCount(props){

    const { cartList } = useCartContext()    
    const [count, setCount] = useState(props.initial)

    let stock = props.stock
    let cartMapId = cartList.map(res => Number(res.id))
    let position = cartMapId.indexOf(props.id)

    if(cartMapId.some(elem => elem == props.id) === true){
           stock = props.stock - cartList[position].cantidad
    }

    const countPlus = () => {
        if(count < stock){
            setCount(count+1)
        }
    }

    const countLess = () => {
        if(count > 0){
            setCount(count-1)
        }
    }

    return (
        <div>
            <div>
            <button disabled = {count===0} onClick = { countLess } > - </button>
            <label>{ count }</label>
            <button disabled = {count===stock} onClick = { countPlus } > + </button>
            </div>
            <button disabled = {count===0} onClick = { () => props.onAdd(count) } > Agregar </button>
        </div>
    )

}

export default ItemCount

