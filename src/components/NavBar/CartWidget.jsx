import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

function CartWidget() {

    const { total , totalProducts, cartShow} = useCartContext()

    return (
        <div className='cartDiv'>
            {cartShow ? 
                    <h3>{ total }</h3> :
                    <></> 
            }
            <Link to="/cart"><input type="image" className='cartLi' src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-cart-essentials-icongeek26-outline-icongeek26.png" /></Link>
        </div>
    )
}

export default CartWidget