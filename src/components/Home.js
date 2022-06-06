import React, { useEffect, useState } from "react"



const Home = () => {

  const [categories, setCategories] = useState("")
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((res) => res.json())
    .then((data) => console.log(data))
  }, [])

  return (
    <div>
      <h1 style={{backgroundColor: "lightblue"}}>Welcome to your Infinite TBR List</h1>
      <h2 >Books on your TBR:</h2>
        
        <div className="dropdown">
          <button class="dropbtn" style={{backgroundColor: "lightcyan"}}>ALL</button>
          
    </div>
  </div>       
  )
}

export default Home

