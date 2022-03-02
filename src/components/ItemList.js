import React from 'react'
import Item from './Item'

function ItemList(props) {
    return (
    <div className='itemList'>
        {props.products.map((res) => 
        <div key={res.id} className = 'item'>
        <Item id = { res.id } name = { res.name } price = { res.price } stock = { res.stock } img = { res.img } />
        </div>
        )}
    </div>
  )
}

export default ItemList