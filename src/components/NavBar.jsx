import React from 'react'
import CartWidget from './CartWidget'
import logoLand from '../media/logoLand.png'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='Nav'>
        <img className='logo' src = {logoLand} />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Nosotros</Link></li>
            <div class="dropdown">
                <button class="dropbtn">Categorías</button>
                <div class="dropdown-content">
                    <Link to="categoria/camisetas">Camisetas</Link>
                    <Link to="categoria/sweaters">Sweaters</Link>
                    <Link to="categoria/gorras">Gorras</Link>
                </div>
            </div> 
            <li><Link to="/">Contacto</Link></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar