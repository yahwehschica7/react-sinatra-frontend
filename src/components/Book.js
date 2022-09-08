import React from 'react'
import AddBook from './AddBook'

const Book = ({book}) => {
  return (
    <div>
        <br />
        <h2>{book.title}</h2>
            <h3>By: {book.author}</h3>
            <h4>My Thoughts: "{book.comment}"</h4>
         <br />
         <AddBook />
         <button>Edit a Book</button>
         <button>Delete a Book</button>

    </div>
  )
}

export default Book                 
               
 
    