import React from 'react'
import {NavLink} from "react-router-dom"
import AddBook from './AddBook'


const CategoryList = ({categories}) => {
// create a function that when horror is clicked goes to CategoryDetails page
   

  // function handleClick (category) {
  //   setCategory(category)
  //   navigate(`/categories/${category.id}`)
  // }
  const listOfCategories = categories.map(category => { 
    return (
      <div>
      <li key={category.id} > 
        <NavLink to={`/categories/${category.id}`}>{category.name} </ NavLink>  
          <br></br>              
      </li> 
        <button style={{backgroundColor: "lightcyan"}}> 
          Add a Book
        </button>
        <button style={{backgroundColor: "lightcyan"}}> 
          Delete a Book
        </button>
        
      </div>
    ) 
  })
  
  return (
    <div>
      {listOfCategories}
    </div>
  )
}

export default CategoryList


// displays category list. click on a category to see all the books. click on a book to see its details. 

