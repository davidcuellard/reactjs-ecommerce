import React from 'react'

function NavBar() {
  return (
    <div className='Nav'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <a className='cartLi' href="#cart">🛒</a>
    </div>
  )
}

export default NavBar