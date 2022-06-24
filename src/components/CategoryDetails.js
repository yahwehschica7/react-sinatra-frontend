import React from 'react'


const CategoryDetails = ({categories}) => {

const listOfBooks = categories.map(category => { 
  return (
    category.books.map(b => b.title)
  )})
    


  return (
    <div>
        <ul>Category Details
          <li>{listOfBooks}</li>
        </ul>
        
    </div>
  )
}

export default CategoryDetails