import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../../redux/actions/localActions'
import CommentCard from './CommentCard'
import { delComment, postComment } from '../../services/localServices'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (postId, index) => dispatch(getComments(postId, index))
})

function Comments(props) {
  const postIndex = props.gamePosts.findIndex((post) => post.id === props.Post.id)
  const Post = props.gamePosts[postIndex]
  const [comments, setComments] = useState(Post.post_comments)
  const [commentBody, setCommentBody] = useState({
    content: '',
    user_Id: props.user.id,
    post_Id: Post.id
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    postComment(commentBody).then(_ => {
      props.fetchComments(Post.id, postIndex).then(_ =>{
        setCommentBody({ ...commentBody, content: '' })
        setComments(_)
      })
    })
  }

  const deleteComment =(i) => {
    delComment(comments[i].id).then(_ => {
      props.fetchComments(comments[i].post_Id, postIndex).then(_ => {
        setComments(_)
      })
    })
  }

  const handleChange = (e) => {
    setCommentBody({ ...commentBody, content: e.target.value })
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
            <CommentCard key={i} index={i} deleteComment={deleteComment} comment={comment} {...props} postIndex={postIndex} />
          ))}
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)
