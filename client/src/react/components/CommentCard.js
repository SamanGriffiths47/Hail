import { connect } from 'react-redux'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}

function CommentCard(props) {
  let comment = props.comment
  return (
    <div className="comment_card">
      <div>{comment.content}</div>
      <div>Post by{comment.user_Id}</div>
      <div>at {comment.post_Id}</div>
    </div>
  )
}

export default connect(mapStateToProps)(CommentCard)
