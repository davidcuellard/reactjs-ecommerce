import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {

  const onAdd = (cantidad) => {
    console.log(`Se agregó ${cantidad} de productos`)
  }

  return (
    <div className='itemContainer'>
        <h2> {props.title} </h2>
        <ItemCount stock = {5} initial = {1} onAdd = { onAdd }/>
    </div>
  )
}

export default ItemListContainer