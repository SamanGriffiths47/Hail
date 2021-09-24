import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  boolSwitch,
  getPosts,
  postCreate
} from '../../redux/actions/localActions'
import PostCard from '../components/Postcard'
import storeGames from '../../redux/actions/rawgActions'

const mapStateToProps = ({ localState, rawgState }) => {
  return {
    ...localState,
    ...rawgState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts()),
    creation: (game, boolean) => dispatch(postCreate(game, boolean)),
    swap: (boolean) => dispatch(boolSwitch(boolean)),
    storePosts: (user) => dispatch(storeGames(user))
  }
}

function Newsfeed({
  gameposts,
  fetchPosts,
  newPosts,
  user,
  authenticated,
  games,
  storePosts,
  swap,
  creation,
  postsCreated
}) {
  async function switchFunc(boolean) {
    if (boolean) {
      return false
    } else {
      return true
    }
  }
  async function store(id) {
    await storePosts(id)
  }
  useEffect(() => {
    if (user) {
      store(user.id)
      swap(newPosts)
    }
  }, [authenticated])
  useEffect(() => {
    console.log(games)

    if (games.length > 0) {
      games.map((game) => {
        return creation(game, switchFunc(postsCreated))
      })
    }
  }, [newPosts])
  useEffect(() => {
    fetchPosts()
  }, [postsCreated])
  // useEffect(() => {}, [gameposts])
  return (
    <div className="postlist flexRow">
      {gameposts.map((gamepost) => (
        <PostCard key={gamepost.id} gamepost={gamepost} />
      ))}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
