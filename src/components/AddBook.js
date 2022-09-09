import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const AddBook = ({categories}) => {
    
    let navigate = useNavigate();  

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        comment: "",
        category_id: "default",
        })

        function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
      
        function createOptions() {
        return (
            categories.map(categoryObj => {
                return (<option value={categoryObj.id} key={categoryObj.id}> {categoryObj.name} </option>)
            })
        )
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then((data) => setFormData(data))
            navigate('/')
    }
       return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input name="title" type="text" value={formData.title} onChange={handleChange}/>
            </div>
            <br />
            <div>
                <label>Author: </label>
                <input name="author" type="text" value={formData.author} onChange={handleChange}/>
            </div>
            <br />
            <div>
                <label>Comments: </label>
                <input name="comment" type="text" value={formData.comment}  onChange={handleChange}/>
            </div>
            <br />
            <select name="category_id" value={formData.category_id} onChange={handleChange}>
				<option value="default">Select an Option </option>
                {createOptions()}
            </select>
            <button type="submit"> Submit Book</button>
        </form>
    )

}

export default AddBook
    



  

