import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getPosts from '../../redux/actions/localActions'
import PostCard from '../components/Postcard'

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
  console.log(props)
  useEffect(() => {
    props.fetchPosts()
  }, [])
  return (
    <div>
      hello
      <div className="postlist">
        {props.localState.gameposts.map((gamepost) => (
          <PostCard key={gamepost.id} gamepost={gamepost} />
        ))}
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
