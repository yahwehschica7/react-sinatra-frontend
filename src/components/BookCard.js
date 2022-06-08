import React from 'react'

const BookCard = ({books}) => {
  return (
    <div>
        <h2>{books.map(book => 
            <li key={book.id}>
                {book.title}
                <div>by: {book.author}</div>
                    <div>My Thoughts:</div> 
                        <i>
                        <div>{book.comment}</div> 
                        </i>
            </li>
            )}
        </h2>
    </div>
  )
}

export default BookCard