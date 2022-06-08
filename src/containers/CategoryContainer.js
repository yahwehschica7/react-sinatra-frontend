import React from 'react'
import CategoryList from '../components/CategoryList'

const CategoryContainer = ({categories}) => {



  return (
    <div>
        <CategoryList categories={categories} />
    </div>
  )
}

export default CategoryContainer