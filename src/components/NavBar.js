import React from 'react'
import { NavLink } from "react-router-dom"

// const linkStyles = {
//     display: "inline-block",
//     width: "100px",
//     padding: "10px",
//     margin: "0 6px 6px",
//     background: "lightblue",
//     textDecoration: "none",
//     color: "black",
//   };


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
            <h2>Edit Your TBR</h2>
            </button>
        </NavLink>
       
       

        
    </div>
  )
}

export default NavBar

