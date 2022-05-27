import React from 'react'
import { Link } from 'react-router-dom'
import './_Navbar.scss'
import Image from '../Assets/Images/smakCuratingLogo.png'

const Navbar = () => {
  return (
    <div className='navbar container'>
      <div className='navbar-logo'>
        <Link to='/'><img src={Image} alt="" /></Link> 
      </div>
      <div className='links'>
        <Link className='nav-link' to="/about-us">Om Mig</Link>
        <Link className='nav-link' to="/my-art">Min Konst</Link>
        <div className="dropdown">
          <Link className='nav-link' to="/services">Tjänster</Link>
          <div className="dropdown-content">
            <Link to="/services/curator">Curator</Link>
            <Link to="/services/consultant">Konsult</Link>
          </div> 
        </div>
        <Link className='nav-link' to="/contact">Kontakta Mig</Link>
      </div>
        
    </div>
    
  )
}

export default Navbar