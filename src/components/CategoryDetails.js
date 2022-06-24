import React from 'react'


const CategoryDetails = ({categories}) => {

const listOfBooks = categories.map(category => {
  return ( 
    <li key={category.id}> 
      {console.log(category.books)} 
    </li>
  )})
    


  return (
    <div>
        <ul>Category Details
          {listOfBooks}
        </ul>
        
    </div>
  )
}

export default CategoryDetails