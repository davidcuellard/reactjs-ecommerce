import React from 'react'
import CartWidget from './CartWidget'
import logoLand from '../media/logoLand.png'


function NavBar() {
  return (
    <div className='Nav'>
        <img className='logo' src = {logoLand} />
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar