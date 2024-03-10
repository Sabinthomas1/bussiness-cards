import React from 'react'
import './Nav.css'
import darkThemeIcon from '../assets/dark-theme-icon.svg'

const Nav = () => {
  return (
    <div className='nav-section'>
        <ul>
            <li><a href="">smartcards</a></li>
            <li><a href="">features</a></li>
            <li><a href="">blog</a></li>
            <li><a href="">our Team</a></li>
            <li><a href="">contact Us</a></li>
        </ul>
        <div className="nav-btn-section">
        <button>buy now</button>
        <img src={darkThemeIcon} alt="" />
        </div>
    </div>
  )
}

export default Nav