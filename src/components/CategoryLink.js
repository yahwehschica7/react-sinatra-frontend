import React from 'react'
import { Link } from "react-router-dom"

const CategoryLink = ({category, deleteBook}) => {

  

  return (
    <div>
        <Link to={`/categories/${category.id}`}>
            <h3> 
              {category.name} 
                
            </h3> 
        </Link>
    </div>
  )
}

export default CategoryLink

