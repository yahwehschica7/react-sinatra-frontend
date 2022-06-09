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
            to="/books"
            >
            <button style={{backgroundColor: "lightcyan"}}>
            <h2>All My Books</h2>
            </button>
        </NavLink>
        <NavLink
            to="categories/new"
            >
            <button style={{backgroundColor: "lightcyan"}}>
            <h2>Create Category</h2>
            </button>
        </NavLink>
       
        <NavLink
            to="/books/new"
            >
            <button style={{backgroundColor: "lightcyan"}}>
            <h2>Add a Book</h2>
            </button>
        </NavLink>
       </div>
  )
}

export default NavBar

