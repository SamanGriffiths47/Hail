import { connect } from 'react-redux'
import { getPosts } from '../../redux/actions/localActions'
import Comments from '../components/Comments'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts())
  }
}

function PostDetail(props) {
  // const [Post, setPost] = useState(null)
  const { gamePosts } = props.localState
  const { post_Id } = props.match.params
  const Post = gamePosts.find((post) => post.id === parseInt(post_Id))

  return (
    <div className="game_detail flex">
      <h1 className="title flex">{Post.title}</h1>
      <div className="imgCont flex">
        <img src={Post.image} alt="game_image" className="game_img flex"/>
      </div>
      <h5 className="desc">{Post.description}</h5>
      <Comments Post={Post} {...props} />
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
