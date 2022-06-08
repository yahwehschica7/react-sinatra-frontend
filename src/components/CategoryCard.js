import React from 'react'

const CategoryCard = ({categories}) => {
  return (
    <div>
         <h2>{categories.map(category => 
            <h3>
                {category.name}
            </h3>
            )}
        </h2>
    </div>
  )
}

export default CategoryCard