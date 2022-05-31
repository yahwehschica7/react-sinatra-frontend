import "./index.css"
import './App.css';
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import NavBar from "./NavBar";
// import Home from "./Home";
// import BookContainer from "./BookContainer";
// import WriterResources from "./WriterResources";
// import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Welcome to your Infinite TBR List</h1>
        <img 
          src="data:image/jpeg;base64,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" 
          className="book_image" alt="book" 
          /> 
        <Router>
          <NavBar />
            <Routes>
              <Route 
              exact path="/" 
              element={<Home />}>
              </Route>
              <Route 
              exact path="/books"
              element={<BookContainer />}
              ></Route>
              <Route 
              exact path="/resources"
              element={<CategoryContainer />}
              ></Route>
              
            </Routes>
        </Router>
    </div>
    )}
    


export default App;

// categories has_many books 
// books belong_to categories
// favorite books, sexy heroes, florida books create and read, then update books by adding comment field
// or update from tbr to read. Will need two forms. One for adding a book(creating) to the category. The other form
// create a category form. Update book. Fix title, delete title, add comments, etc. dependency destroy within category.



   