import React, { useState } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import logo1 from '../../assets/tickitz-logo.png'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)

  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <div className='logo'>
            <Link to="/"><div className='imgbox'><img src={logo1} alt="logo" title="Tickitz" /></div></Link>
            <div className={toggle ? 'navmenu active' : 'navmenu'}>
              <div className="links">
              <Link to="/"><div className='navlinks active'>Home</div></Link>
              <Link to="/movies"><div className='navlinks'>List Movies</div></Link>
              </div>
              <div className='navbutton'>
                <Link to="/signin"><button>Sign In</button></Link>
              </div>
            </div>
            <div className="nav-icon" onClick={() => setToggle(!toggle)}>
              {toggle ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar