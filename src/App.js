import "./index.css"
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import NewCategory from "./components/NewCategory"
// import AddBook from "./components/AddBook";
// import DeleteBook from "./components/DeleteBook";

function App() {

  return (
    <Router>
      <NavBar />
        <div className="App">
          <Routes>
            <Route 
              exact path="/" 
              element={<Home />}>
              </Route>
            <Route 
              exact path="/categories/new" 
              element={<NewCategory />}>
              </Route>
            </Routes>
        </div>
      </Router>
    )
  }
            
    


export default App;

// categories has_many books 
// books belong_to categories
// favorite books, sexy heroes, florida books create and read, then update books by adding comment field
// or update from tbr to read. Will need two forms. One for adding a book(creating) to the category. The other form
// create a category form. Update book. Fix title, delete title, add comments, etc. dependency destroy within category.



/* <Route 
exact path="/books"
element={<BookContainer />}
></Route>
<Route 
exact path="/categories"
element={<CategoryContainer />}
></Route>   */