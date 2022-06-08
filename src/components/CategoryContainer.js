import React from 'react'
import CategoryList from './CategoryList'

const CategoryContainer = ({categories}) => {



  return (
    <div>
        <CategoryList categories={categories} />
    </div>
  )
}

export default CategoryContainer