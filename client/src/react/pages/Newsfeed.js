import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  boolSwitch,
  getPosts,
  postCreate
} from '../../redux/actions/localActions'
import PostCard from '../components/Postcard'
import storeGames from '../../redux/actions/rawgActions'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchPosts: () => dispatch(getPosts()),
//     storePosts: (user) => dispatch(storeGames(user))
//   }
// }

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
