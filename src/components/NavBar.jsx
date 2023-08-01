import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
  <div>   
        <div className='menuBar'>
        <Link to="/" className='navItem'>
        <h3>== Home ==</h3>
        </Link>

        <Link to="/about" className='navItem'>
        <h3>== About ==</h3>
        </Link>

        <Link to="/portfolio" className='navItem'>
        <h3>== Portfolio ==</h3>
        </Link>

        <Link to="/contact" className='navItem'>
        <h3>== Contact ==</h3>
        </Link>        

      </div>
    </div>
  )
}

export default NavBar