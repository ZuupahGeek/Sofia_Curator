import React from 'react'
import './_Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar container'>
        <div className='logo'><h1>Placeholder Logo</h1></div>
        <div className='navbar-menu'>
            <Link to='/*'>About Me</Link>
            <Link to='/*'>My Art</Link>
            <button onclick="myFunction()" class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
              <Link to='/'>Link 1</Link>
              <Link to='/'>Link 2</Link>
            </div>
            <Link to='/*'>Gallery</Link>
            <Link to='/contact-us'>Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar