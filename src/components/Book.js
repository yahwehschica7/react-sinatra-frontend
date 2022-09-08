import React from 'react'


const Book = ({book}) => {
  return (
    <div>
        <br />
        <h2>{book.title}</h2>
            <h3>By: {book.author}</h3>
            <h4>My Thoughts: "{book.comment}"</h4>
         <br />
         

    </div>
  )
}

export default Book                 
               
 
    