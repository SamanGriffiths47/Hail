import { connect } from 'react-redux'
import PostCard from '../components/Postcard'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}

function SearchFeed(props) { 
  const gamePosts = props.gamePosts

  return (
    <div className="postlist flexRow search">
      {gamePosts.length ? gamePosts.map((gamePost) => (
        <PostCard key={gamePost.id} gamePost={gamePost} {...props}/>
      )) :
      <h1 className='searchMsg'>No Games Matching "{props.query}" Found</h1>}
    </div>
  )
}
export default connect(mapStateToProps)(SearchFeed)
