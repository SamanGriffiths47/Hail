import { useState } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../../redux/actions/localActions'
import CommentCard from './CommentCard'
import { postComment } from '../../services/localServices'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (postId, index) => dispatch(getComments(postId, index))
})

function Comments(props) {
  const Post = props.Post
  const comments = Post.post_comments
  const postIndex = props.gamePosts.findIndex((post) => post.id === props.Post.id)
  const [commentBody, SetCommentBody] = useState({
    content: '',
    user_Id: props.localState.user.id,
    post_Id: Post.id
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postComment(commentBody)
    await props.fetchComments(Post.id, postIndex)
    SetCommentBody({ ...commentBody, content: '' })
  }

  const handleChange = (e) => {
    SetCommentBody({ ...commentBody, content: e.target.value })
  }
  return (
    <div className='commentSec'>
      <h2>Comment section</h2>
        <form onSubmit={handleSubmit} className="commentForm">
          <textarea
            placeholder="What Do You Think?"
            value={commentBody.content}
            onChange={handleChange}
          />
          <button>Post Comment</button>
        </form>
      <div className="card_holder">
        {comments.length > 0 &&
          comments.map((comment,i) => (
            <CommentCard key={i} comment={comment} {...props} postIndex={postIndex} />
          ))}
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)
