import React from 'react'
import { useState } from 'react'

function ItemCount(props){
  const [count, setCount] = useState(props.initial)

  const countPlus = () => {
    if(count < props.stock){
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
        <p> Article 1 </p>  
        <button disabled = {count===0} onClick = { countLess } > - </button>
        <label>{ count }</label>
        <button disabled = {count===props.stock} onClick = { countPlus } > + </button>
        <button disabled = {count===0} onClick = { () => props.onAdd(count) } > Agregar </button>
        <label> Items in stock: { props.stock }</label>
    </div>
  )

}

export default ItemCount

