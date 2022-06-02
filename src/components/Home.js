import React, { useEffect, useState } from "react"



const Home = () => {

  const [categories, setCategories] = useState("")
  const [books, setBooks] = useState([])

  return (
    <div>
      <h2 style={{backgroundColor: "lightblue"}}>Books on your TBR:</h2>
        
        <div class="dropdown">
          <button class="dropbtn" style={{backgroundColor: "lightcyan"}}>ALL</button>
          
    </div>
  </div>       
  )
}

export default Home

