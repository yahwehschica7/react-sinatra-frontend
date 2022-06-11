import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const NewCategory = () => {

  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleChange= e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const category = { name: name }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(category)
    }
    const resp = await fetch("http://localhost:9292/categories", options)
    const data = await resp.json()
    setName(data)
    
  }
    
  return (
    <div>
        <h1>New Category</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleChange}/>
          </div>
          <br/>
          <input type="submit" value="Submit" style={{backgroundColor: "lightcyan"}}/>
        </form>
    </div>
  )
}

export default NewCategory