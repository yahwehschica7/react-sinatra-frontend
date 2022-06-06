import React from 'react'
import BookList from '../components/BookList'

const BookContainer = ({books}) => {

  
  return (
    <div>
      <BookList books={books} />
    </div>
  )
}

export default BookContainer

