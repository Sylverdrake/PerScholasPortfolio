import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
  <div>   
        <div className='menuItems'>
        <Link to="/">
        <p>Home</p>
        </Link>

        <Link to="/about">
        <p>About Me</p>
        </Link>

        <Link to="/portfolio">
        <p>Portfolio</p>
        </Link>

        <Link to="/contact">
        <p>Contact</p>
        </Link>        

      </div>
    </div>
  )
}

export default NavBar