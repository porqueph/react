import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/About">About</Link> */}
        {/* <NavLink to="/" className={({isActive}) => (isActive ? 'esta-ativo':'nao-ativo')}>Home</NavLink> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">sobre</NavLink>
    </nav>
  )
}

export default Navbar