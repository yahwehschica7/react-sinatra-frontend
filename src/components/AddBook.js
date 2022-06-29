import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {

  const [book, setBook] = useState({
    title: "",
    author: "",
    comment: ""

  });

  let navigate = useNavigate()
  
  const handleChange = e => {
    setBook({...book, [e.target.name] : e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const newBook = {
        title: "",
        author: "",
        comment: ""
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(newBook)
    }
    const resp = await fetch("http://localhost:9292/categories/category_id/books", options)
    const data = await resp.json()
    setBook(data)
    navigate('/')
  }
    
  return (
    <div>
        <h1>Add a New Book</h1>
        <form onSubmit={handleSubmit}>
          
            <label htmlFor='title'>Title: </label>
            <input type="text" name="title" value={book.title} onChange={handleChange}/>
            <label htmlFor='author'>Author: </label>
            <input type="text" name="author" value={book.author} onChange={handleChange}/>
            <label htmlFor='comment'>Comment: </label>
            <input type="textarea" name="comment" value={book.comment} onChange={handleChange}/>
          
          <br/>
          <input type="submit" value="Submit" style={{backgroundColor: "lightcyan"}}/>
        </form>
    </div>
  )
}

  

export default AddBook