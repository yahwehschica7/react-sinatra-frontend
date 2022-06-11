import React from 'react'

const NewCategory = () => {
  return (
    <div>
        <h1>New Category</h1>
        <form>
          <div>
            <label>Name: </label>
            <input type="text"/>
          </div>
          <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default NewCategory