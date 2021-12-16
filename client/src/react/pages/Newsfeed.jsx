import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../redux/actions/localActions'
import requestGames from '../../redux/actions/rawgActions'
import PostCard from '../components/Postcard'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts())
  }
}

function Newsfeed(props) {
  const gamePosts = props.gamePosts
  
  useEffect(()=>{
    async function allGames(){
      await requestGames()
      await props.fetchPosts()
    }
    allGames()
  },[])

  return (
    <div className="postlist flexRow">
      {gamePosts.map((gamePost) => (
        <PostCard key={gamePost.id} gamePost={gamePost} {...props}/>
      ))}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
