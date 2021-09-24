import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../redux/actions/localActions'
import PostCard from '../components/Postcard'
import storeGames from '../../redux/actions/rawgActions'

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

function Newsfeed({ gameposts, fetchPosts, user }) {
  useEffect(() => {
    // storePosts(user.id)
    // fetchPosts()
  }, [])
  return (
    <div className="postlist flexRow">
      {gameposts.map((gamepost) => (
        <PostCard key={gamepost.id} gamepost={gamepost} />
      ))}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
