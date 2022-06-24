import React, {useState} from 'react'

const AddBook = () => {

//   const [book, setBook] = useState({
//     title: "",
//     author: "",
//     comments: ""

//   });

  
//   const handleChange = e => {
//     setName(e.target.value)
//   }

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const newBook = {
//         title: "",
//         author: "",
//         comments: ""
//     }
//     const headers = {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     }
//     const options = {
//       method: "POST",
//       headers,
//       body: JSON.stringify(newBook)
//     }
//     const resp = await fetch("http://localhost:9292/categories", options)
//     const data = await resp.json()
//     setBook(data)
    
//   }
    
  return (
    <div>
        <h1>New Book</h1>
        <form >
          <div>
            <label>Name: </label>
            <input type="text" />
          </div>
          <br/>
          <input type="submit" value="Submit" style={{backgroundColor: "lightcyan"}}/>
        </form>
    </div>
  )
}

  

export default AddBook