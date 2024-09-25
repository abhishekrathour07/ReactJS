import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className='ullist'>
      <ul className="nav-ele">
        <li>{props.home}</li>
        <li>Contact</li>
        <li>About</li>
        <li>Help</li>
      </ul>
      <div className="box">
        <input type="text" placeholder='search ' className='input' />
        <button>Search</button>
      </div>
    </div>
  )
}

export default Navbar
