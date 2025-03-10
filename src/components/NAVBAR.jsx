import React from 'react'
import'../css/Navbar.css'

const NAVBAR = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>News<span className= 'logo1'>BIT</span></div>
      <ul className='nav-links'>
        <li><a href="/">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#news">news</a></li>
        <li><a href="#footer">contact</a></li>
      </ul>
    </nav>
  )
}

export default NAVBAR
