import React from 'react'
import { Link } from 'react-router-dom'
import  './style.css'
function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-center'>
                <Link to='/'>
                    <h3 className='logo'>cocktail</h3> 
                </Link>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
