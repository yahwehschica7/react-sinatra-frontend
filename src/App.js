import "./index.css"
import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewCategory from "./components/NewCategory"
import CategoryName from "./components/CategoryName";
import AddBook from "./components/AddBook";
// import DeleteBook from "./components/DeleteBook";

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data))
  }, [])

  return (
    <Router>
      <NavBar />
        <div className="App">
          <Routes>
            <Route 
              exact path="/" element={<Home categories={categories}/>}>
              </Route>
            <Route 
              exact path="/categories/new" element={<NewCategory />}>
            </Route>
            <Route 
              path="/categories/:id" element={<CategoryName />}>
            </Route>
            <Route 
              exact path="/books/new" element={<AddBook categories={categories}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    )
  }
            
    


export default App

