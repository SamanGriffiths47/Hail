import { connect } from 'react-redux'
import { getComments } from '../../redux/actions/localActions'
import { delComment } from '../../services/localServices'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (postId, index) => dispatch(getComments(postId, index))
})

function CommentCard(props) {
  const comment = props.comment

  async function deletecomment() {
    await delComment(comment.id)
    await props.fetchComments(comment.post_Id, props.postIndex)
  }
  let stamp = ''
  let date = new Date(comment.createdAt)
  date = `${date}`.split(' ')
  date.splice(5,1)
  date.slice(date.length-3).forEach(word =>{
    word = word.replace('(','')
    stamp += word[0]
  })
  date = `${date.slice(4,5)} ${date.slice(0,4).join(' ')} ${stamp}`

  return (
    <div className="comment_card">
      <h5><span>{comment.comment_by.username} Said:</span> {comment.content} <br /> At {date}</h5>
      {comment.user_Id === props.user.id && <button 
        className='delBtn'
        id={comment.id}
        onClick={() => {
          deletecomment()
        }}
      >
        Delete Comment
      </button>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard)
