import { useState } from 'react'

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
    <section className="searchContainer flexRow">
      <div></div>
      <div></div>
      <form onSubmit={onSubmit} className="searchForm flexRow">
        <input
          type="search"
          onChange={handleChange}
          value={formValue}
          className="flexRow"
        />
        <button type="submit">search</button>
      </form>
    </section>
  )
}

export default Search
