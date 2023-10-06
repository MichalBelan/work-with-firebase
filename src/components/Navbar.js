import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <header>
    <nav>
        <NavLink to="/">Domov</NavLink>
        <NavLink to="all-movies">Filmy</NavLink>
        <NavLink to="form">Pridanie filmu</NavLink>

    </nav>
   </header>
  )
}

export default Navbar