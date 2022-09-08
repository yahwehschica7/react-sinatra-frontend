import React from 'react'
import CategoryLink from "./CategoryLink"


const CategoryList = ({categories}) => {
 
  const categoriesList = categories.map( c => <CategoryLink key={c.id} category={c} />)

  return (
    <div>
      <ul>
        {categoriesList}
      </ul>
    </div>
  )
}

export default CategoryList




   
