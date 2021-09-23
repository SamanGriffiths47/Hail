import React, { useState } from 'react'

const Search = () => {
  const [formValue, setFormValue] = useState('')

  const handleChange = (e) => {
    setFormValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="searchContainer">
      <div></div>
      <div></div>
      <form>
        <input type="search" value={formValue} />
        <button type="submit">search</button>
      </form>
    </section>
  )
}

export default Search
