import { connect } from 'react-redux'
import PostCard from '../components/Postcard'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function Newsfeed(props) {
  const gamePosts = props.localState.gamePosts

  return (
    <div className="postlist flexRow">
      {gamePosts.map((gamePost) => (
        <PostCard key={gamePost.id} gamePost={gamePost} />
      ))}
    </div>
  )
}
export default connect(mapStateToProps)(Newsfeed)
