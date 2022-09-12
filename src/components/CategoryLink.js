import React from 'react'
import { Link } from "react-router-dom"

const CategoryLink = ({category, deleteBook}) => {

  

  return (
    <div>
        <Link to={`/categories/${category.id}`}>
            <h3> 
            {category.name}
            <br />
            </h3> 
        </Link>
        <button>
              Delete Category
            </button>
    </div>
  )
}

export default CategoryLink

