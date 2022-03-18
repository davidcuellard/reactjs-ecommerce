import React from 'react'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link to="/cart"><input type="image" className='cartLi' src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-cart-essentials-icongeek26-outline-icongeek26.png" /></Link>
  )
}

export default CartWidget