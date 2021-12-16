import { connect } from 'react-redux'
import { queryPosts, updateQuery, updateSearch } from '../../redux/actions/localActions'
import { searchGames } from '../../redux/actions/rawgActions'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
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
    await searchGames(props.search)
    await props.queryDB(props.search)
    await props.queryUpdate(props.search)
    await props.searchUpdate('')
    console.log('QUERY',props.query)
    props.history.push(`/search/${props.query}`)
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
