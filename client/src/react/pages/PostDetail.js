import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../redux/actions/localActions'
import Comment from '../components/Comment'

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

function PostDetail(props) {
  const [Post, setPost] = useState(null)
  const { gamePosts } = props.localState
  const { post_Id } = props.match.params

  async function findpost() {
    try {
      let selectedPost = gamePosts.find((post) => post.id === parseInt(post_Id))
      setPost(selectedPost)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    findpost()
  }, [post_Id])

  return Post ? (
    <div className="game_detail">
      <h1>{Post.title}</h1>
      <div>
        <img src={Post.image} alt="game_image" className="game_img" />
      </div>
      <div>{Post.description}</div>
      <div>Post by User_id:{Post.user_Id}</div>
      <div>Post at {Post.createdAt}</div>
      <Comment Post={Post} />
    </div>
  ) : null
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
