import React from 'react'
import {NavLink} from "react-router-dom"


const CategoryList = ({categories}) => {

  const listOfCategories = categories.map(category => { 
    return <li key={category.id}> 
    <NavLink to={`{/categories/${category.id}}`}> {category.name} </NavLink>
    <br></br>
      <button style={{backgroundColor: "lightcyan"}}> 
        Add a Book
      </button>
    </li>  
  })
  
  return (
    <div>
       {listOfCategories}
    </div>
  )
}

export default CategoryList


// displays category list. click on a category to see all the books. click on a book to see its details. 

