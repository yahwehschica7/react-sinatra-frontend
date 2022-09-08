import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Book from "./Book"


const CategoryName = () => {
    const [category, setCategory] = useState({
        books: []
    })
    
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:9292/categories/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setCategory(data)
        })
    }, [])

    const books = category.books.map(b => <Book key={b.id} book={b} />)
    
    return (
        <div>
            <br />
            <h2>{category.name}</h2>
            <br />
            {books}
        </div>
    )
}

export default CategoryName