import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryList = ({categories}) => {
  return (
    <div>
        <CategoryCard categories={categories} />
    </div>
  )
}

export default CategoryList