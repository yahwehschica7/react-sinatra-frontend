import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <NavLink
            to="/"
            >
            <button style={{backgroundColor: "lightcyan"}}>
            <h2>Home</h2>
            </button>
        </NavLink>
        <NavLink
            to="/categories"
            >
            <button style={{backgroundColor: "lightcyan"}}>
            <h2>Edit Your TBR</h2>
            </button>
        </NavLink>
        <NavLink
            to="/books"
            >
            <button style={{backgroundColor: "lightcyan"}}>
            <h2>All My Books</h2>
            </button>
        </NavLink>
       </div>
  )
}

export default NavBar

