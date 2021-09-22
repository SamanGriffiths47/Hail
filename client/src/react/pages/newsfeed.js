import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getPosts from '../../redux/actions/localActions'
import PostCard from '../components/Postcard'

<<<<<<< HEAD
const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts())
  }
}

function Newsfeed(props) {
  useEffect(() => {
    props.fetchPosts()
  }, [])
  return (
    <div>
      <div className="postlist">
        {props.localState.gameposts.map((gamepost) => (
          <PostCard key={gamepost.id} gamepost={gamepost} />
        ))}
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
=======
function Newsfeed(props) {
  return <div></div>
}
export default Newsfeed
>>>>>>> af1a5d523b355c082e8a861b9cd19c58e267b93f
