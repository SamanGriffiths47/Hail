import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../../redux/actions/localActions'

const mapStateToProps = ({ localState }) => {
  return {
    ...localState
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchComments: (postId) => dispatch(getComments(postId))
})

function Comment(props) {
  const [Loading, setLoading] = useState(false)
  console.log(props.Post.id)
  let post_Id = props.Post.id
  useEffect(() => {
    props.fetchComments(post_Id)
    setLoading(true)
  }, [Loading])
  let content = props
  console.log(content)
  return (
    <div>
      <h1>Comment section</h1>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment)
