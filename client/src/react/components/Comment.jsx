import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getComments, postComments } from '../../redux/actions/localActions'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchComments: (postId) => dispatch(getComments(postId)),
  postyourComment: (body) => dispatch(postComments(body))
})

function Comment(props) {
  const [Loading, setLoading] = useState(false)
  const [Commentbody, SetCommentbody] = useState({
    "content": '',
      "user_Id": null,
      "post_Id": null
  })

  console.log(props.Post.id)
  let postId = props.Post.id
  let userId = props.user.id

  useEffect(() => {
    
    props.fetchComments(postId)
    setLoading(true)
  }, [Loading])
  let content = props
  console.log(content)

  const handleSubmit = (e) => {
    e.preventdefault()
    SetCommentbody({
      "content": '',
      "user_Id": parseInt(userId),
      "post_Id": parseInt(postId)
    })

    console.log(Commentbody)
    props.postyourComment(Commentbody)
  }

  return (
    <div>
      <h1>Comment section</h1>
      <div className="comment_forum">
        <form onSubmit={handleSubmit}>
          <input placeholder="content" />
          <button>Submit</button>
        </form>
      </div>
      <div className="card_holder"></div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)
