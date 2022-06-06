import React from 'react'

const BookCard = ({books}) => {
  return (
    <div>
        <h2>{books.map(book => 
            <h3>
                {book.title}
                <div>by: {book.author}</div>
                    <div>My Thoughts:</div> 
                        <i>
                        <div>{book.comment}</div> 
                        </i>
            </h3>
            )}
        </h2>
    </div>
  )
}

export default BookCard