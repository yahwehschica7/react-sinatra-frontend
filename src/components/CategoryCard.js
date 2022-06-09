import React from 'react'

const CategoryCard = ({categories}) => {

 const handleClick = (e) => {
  console.log(e.target)
  }

  const listOfCategories =  categories.map(category => 
    <h3 key={category.id}>
        {category.name} : 
        <i>{category.books.map(book =>
         <h4 key={book.id}>{book.title}</h4>
        )}
        </i>
        <button onClick={handleClick} data-category_id={category.id}>Add a Book</button>
     </h3>
    )

  return (
    <div>
        {listOfCategories}        
    </div>
  )
}

export default CategoryCard