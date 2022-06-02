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
      <h2 style={{backgroundColor: "lightblue"}}>Books on your TBR:</h2>
        
        <div className="dropdown">
          <button class="dropbtn" style={{backgroundColor: "lightcyan"}}>ALL</button>
          
    </div>
  </div>       
  )
}

export default Home

