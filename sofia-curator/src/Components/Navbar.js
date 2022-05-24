import React from 'react'
import { Link } from 'react-router-dom'
import './_Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar container'>
      <div>
        <h1>Logo</h1>
      </div>
      <div className='links'>
        <Link className='nav-link' to="/about-us">Om Mig</Link>
        <Link className='nav-link' to="#">Min Konst</Link>
        <div className="dropdown">
          <Link className='nav-link' to="#">Tjänster</Link>
          <div className="dropdown-content">
            <Link to="#">Curator</Link>
            <Link to="#">Konsult</Link>
          </div> 
      </div>
      <Link className='nav-link' to="#">Kontakta Mig</Link>
      </div>
        
    </div>
    
  )
}

export default Navbar