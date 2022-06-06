import React, {useEffect, useState} from 'react'
import BookList from '../components/BookList'

const BookContainer = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((res) => res.json())
    .then((data) => setBooks(data))
  }, [])

  return (
    <div>
      <BookList books={books} />
    </div>
  )
}

export default BookContainer

