import React from 'react'
import { Link } from "react-router-dom"

const CategoryLink = ({category}) => {
  return (
    <div>
        <Link to={`/categories/${category.id}`}>
            <h3>{category.name}</h3>
        </Link>
    </div>
  )
}

export default CategoryLink

//   return (
//     <div>
//       <br></br>
//         <ul key={category.id} > 
//           <h1>{category.name}</h1>
//           <li key={category.id}> 
//             {category.books.map((book) => {
//               return (
//                 <>
//               <h2>{book.title}</h2>
//               <h3>By: {book.author}</h3>
//               <h4>My Thoughts: "{book.comment}"</h4>
//               </>
//             )})}
//           </li>
//       <br></br>              
//         </ul> 
//           <button style={{backgroundColor: "lightcyan"}}> 
//               Edit Category
//             </button>
//             <button style={{backgroundColor: "lightcyan"}}> 
//             Delete Category
//             </button>
//             <NavLink to={`/categories/${category.id}`}> 
//               <button  style={{backgroundColor: "lightcyan"}}>
//               Add a Book
//               </button>
//             </ NavLink>
//             <NavLink to={`/books/${category.books.id}`}>
//             <button style={{backgroundColor: "lightcyan"}}> 
//               Delete a Book
//             </button>
//             </ NavLink>
//       <br></br>
//     </div>
//   ) 
// })