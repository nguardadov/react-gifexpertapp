import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('')

  const HandleInputCHange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //trim borramos todos los espacios
    if (inputValue.trim().length > 2) {
      //esto lo podemos hacer porque hacemos un callback
      setCategories((categories) => [inputValue, ...categories])
      setInputValue('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={HandleInputCHange} />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export { AddCategory }
