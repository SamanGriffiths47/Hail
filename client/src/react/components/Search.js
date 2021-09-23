import React, { useState } from 'react'

const Search = () => {
  const [formValue, setFormValue] = useState('')

  const handleChange = (e) => {
    setFormValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    setFormValue('')
  }

  return (
    <section className="searchContainer">
      <div></div>
      <div></div>
      <form onSubmit={onSubmit}>
        <input type="search" onChange={handleChange} value={formValue} />
        <button type="submit">search</button>
      </form>
    </section>
  )
}

export default Search
