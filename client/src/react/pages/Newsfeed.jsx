import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPosts, newsfeedChain } from '../../redux/actions/localActions'
import requestGames from '../../redux/actions/rawgActions'
import { grabGames } from '../../services/rawgServices'
import PostCard from '../components/Postcard'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts()),
    newsfeedChain: (gameList) => dispatch(newsfeedChain(gameList))
  }
}

function Newsfeed(props) {
  const [gamePosts, setGamePosts] = useState([])

  useEffect(()=>{
    if(props.authenticated){
      const gameList = []
      props.gamePosts.forEach(game => gameList.push(game.title))
      props.newsfeedChain(gameList).then(posts => setGamePosts(posts))
    }
  },[props.authenticated])

  return (
    <div className="postlist flexRow">
      {gamePosts.map((gamePost) => (
        <PostCard key={gamePost.id} gamePost={gamePost} {...props}/>
      ))}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
