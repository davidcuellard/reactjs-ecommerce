import React, { memo } from 'react'
import Item from './Item'

const ItemList = memo(
    ( {products} ) => {

        return (
        <div className='itemList'>
            {products.map((res) => 
            <div key={res.id} className = 'item'>
            <Item id = { res.id } name = { res.name } price = { res.price } stock = { res.stock } img = { res.img } />
            </div>
            )}
        </div>
        )
    }
, (prevProps,nextProps) => prevProps.products == nextProps.products
)

export default ItemList

