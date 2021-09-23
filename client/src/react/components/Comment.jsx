import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getComments, postComments } from '../../redux/actions/localActions'
import CommentCard from './CommentCard'
import { delComment } from '../../services/localServices'
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
 
  const [Commentbody, SetCommentbody] = useState({
    "content": '',
      "user_Id": null,
      "post_Id": null
  })
  const [Content,SetContent]=useState('')
  const [Comments,SetComments]=useState(null)
  const [Loading,SetLoading]=useState(true)
  //const [PostId,SetPostId]=useState(null)

 
  async function getComs(postid){
    await props.fetchComments(postid)
    // let allcomments = props.comments
    // SetComments(allcomments)
  }
  
  let postId = props.Post.id
  useEffect(() => {
    
    let postId = props.Post.id
    getComs(postId)
    let allcomments = props.comments
    SetComments(allcomments)
     
     console.log(Comments)
    SetLoading(false)
  }, [postId])
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    let tempbody=Commentbody
  
    tempbody.content = Content
    tempbody.user_Id = parseInt(props.user.id)
    tempbody.post_Id = parseInt(props.Post.id)
    SetCommentbody(tempbody)
 
    props.postyourComment(Commentbody)
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
