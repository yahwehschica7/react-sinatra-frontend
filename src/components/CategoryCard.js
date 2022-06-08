import React from 'react'

const CategoryCard = ({categories}) => {
  return (
    <div>
         <li>{categories.map(category => 
            <h3 key={category.id}>
                {category.name} : 
                <i>{category.books.map(book => 
                <h4 key={book.id}>{book.title}</h4>
                )}
                </i>
             </h3>
            )}
        </li>
    </div>
  )
}

export default CategoryCard