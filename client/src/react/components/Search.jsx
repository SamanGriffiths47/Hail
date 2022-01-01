import { connect } from 'react-redux'
import { queryPosts, searchChain, updateQuery, updateSearch } from '../../redux/actions/localActions'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchChain: (query) => dispatch(searchChain(query)),

    queryDB: (query) => dispatch(queryPosts(query)),
    searchUpdate: (search) => dispatch(updateSearch(search)),
    queryUpdate: (search) => dispatch(updateQuery(search))
  }
}

const Search = (props) => {

  const handleChange = (e) => {
    props.searchUpdate(e.target.value)
  }
  
  async function onSubmit(e){
    e.preventDefault()
    props.searchChain(props.search).then(query => {
      props.history.push(`/search/${query}`)
    })
  }

  return (
    <section className="searchContainer">
      <form onSubmit={(e)=>onSubmit(e)} className="searchForm flex">
        <input
          type="search"
          placeholder='search'
          onChange={(e) =>handleChange(e)}
          value={props.search}
          className="searchInp"
        />
        <button type="submit">search</button>
      </form>
    </section>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)
