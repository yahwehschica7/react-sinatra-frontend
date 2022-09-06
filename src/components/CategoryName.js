import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const CategoryName = () => {
    const [category, setCategory] = useState({
        books: []
    })
    // const [bookFormFlag, setBookFormFlag] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/categories/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])
  
    return (
        <div>
            <h3>I am a Category Name</h3>
        </div>
    )
}

export default CategoryName