import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { searchFeedChain } from '../../redux/actions/localActions'
import PostCard from '../components/Postcard'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchFeedChain: (query, gameList) => dispatch(searchFeedChain(query, gameList))
  }
}

function SearchFeed(props) { 
  const [gamePosts, setGamePosts] = useState([])
  const [loading, setLoading] = useState(true)
  const { query } = props.match.params

  useEffect(()=>{
    const gameList = []
    props.gamePosts.forEach(game => gameList.push(game.title))
    props.searchFeedChain(query, gameList).then(posts => {
      setGamePosts(posts)
      setLoading(false)
    })
  },[query])

  const msg = gamePosts === null ? 'Your Search Must Be Alphanumeric' : `No Games Matching "${query}" Found`

  return (
    <div className={"postlist flexRow" + (gamePosts && gamePosts.length ? '' : ' search')}>
      {!loading && gamePosts && gamePosts.length ? gamePosts.map((gamePost) => (
        <PostCard key={gamePost.id} gamePost={gamePost} {...props}/>
      )) :
      !loading && <h1 className='searchMsg'>{msg}</h1>}
    </div>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchFeed)
