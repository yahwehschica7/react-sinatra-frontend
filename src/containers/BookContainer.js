import React, {useEffect, useState} from 'react'

const BookContainer = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((res) => res.json())
    .then((data) => setBooks(data))
  }, [])

  return (
    <div>
      <h1>BookContainer</h1>
    </div>
  )
}

export default BookContainer

