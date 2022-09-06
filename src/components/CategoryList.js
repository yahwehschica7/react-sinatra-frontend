import React, {useEffect, useState} from 'react'
import CategoryLink from "./CategoryLink"


const CategoryList = () => {
  const [categories, setCategories] = useState([])
  // const [categoryFormFlag, setCategoryFormFlag] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data))
  }, [])

  const categoriesList = categories.map( c => <CategoryLink key={c.id} category={c} />)

  return (
    <div>
      <ul>
        {categoriesList}
      </ul>
    </div>
  )
}

export default CategoryList




   
