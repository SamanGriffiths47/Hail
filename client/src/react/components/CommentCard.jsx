import { parse } from 'dotenv'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { delComment } from '../../services/localServices'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}

function CommentCard(props) {
  const [commentId, SetcommentId] = useState(null)
  async function deletecomment() {
    //let commentid = e.target.value

    await delComment(commentId)
    console.log('deleted')
  }

  useEffect(() => {
    let id = props.comment.id
    // SetcommentId(id)
  })
  let comment = props.comment

  return (
    <div className="comment_card">
      <div>{comment.content}</div>
      <div>Post by{comment.user_Id}</div>
      <div>at {comment.post_Id}</div>
      <div>at {comment.createdAt}</div>
      <div>{props.comment.user_Id === props.user.id ?<button
        value={comment.id}
        onClick={() => {
          deletecomment()
        }}
      >
        x
      </button>:null}</div>
    </div>
  )
}

export default connect(mapStateToProps)(CommentCard)
