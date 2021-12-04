import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../../redux/actions/localActions'
import CommentCard from './CommentCard'
import { delComment, postComment } from '../../services/localServices'
const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchComments: (postId) => dispatch(getComments(postId))
})

function Comment(props) {
  const [commentBody, SetCommentBody] = useState({
    content: '',
    user_Id: null,
    post_Id: null
  })
  const [Content,SetContent]=useState('')
  const [Comments,SetComments]=useState(null)
  const [Loading,SetLoading]=useState(true)
  //const [PostId,SetPostId]=useState(null)

  async function getComs(postid){
    await props.fetchComments(postid)
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    let tempbody=commentBody
  
    tempbody.content = Content
    tempbody.user_Id = parseInt(props.user.id)
    tempbody.post_Id = parseInt(props.Post.id)
    SetCommentBody(tempbody)
    await postComment(commentBody)
    props.postyourComment(commentBody)
  }

  const handleChange= (e)=>{
    SetContent(e.target.value)
  }

  return (
    <div>
      <h1>Comment section</h1>
      <div className="comment_forum">
        <form onSubmit={handleSubmit}>
          <div>Comment</div>
          <input placeholder="Comments"   onChange={handleChange} />
          <button>Submit</button>
        </form>
      </div>
      <div className="card_holder">
      {Loading===false?
      
            Comments.map((comment)=>(
              <CommentCard
              key={comment.id}  
                comment={comment}
                />
            )):null
        
        }
      </div>
    </div>)
  
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)
