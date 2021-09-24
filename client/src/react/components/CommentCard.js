import { connect } from 'react-redux'
import { delComment } from '../../services/localServices'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}
async function deletecomment(id) {
  await delComment(id)
  console.log('deleted')
}
function CommentCard(props) {
  let comment = props.comment
  return (
    <div className="comment_card">
      <div>{comment.content}</div>
      <div>Post by{comment.user_Id}</div>
      <div>at {comment.post_Id}</div>
      <button
        value={comment.id}
        onClick={() => {
          deletecomment(comment.id)
        }}
      >
        x
      </button>
    </div>
  )
}

export default connect(mapStateToProps)(CommentCard)
