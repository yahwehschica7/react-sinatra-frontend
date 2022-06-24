import React from 'react'


const CategoryDetails = () => {

  const bookDetails = books.map(book => {
    <li>{book.title} By {book.author} 
    <p>
      Comments: {book.comments}
    </p>
    </li> 
})

  return (
    <div>
        <h2>{bookDetails}</h2>
    </div>
  )
}

export default CategoryDetails