import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { byIdChain } from '../../redux/actions/localActions'
import Comments from '../components/Comments'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    byIdChain: (post_id) => dispatch(byIdChain(post_id))
  }
}

function PostDetail(props) {
  const { gamePosts } = props
  const { post_Id } = props.match.params
  const [Post, setPost] = useState(null)

  useEffect(()=>{
    if(!Post){
      const found = gamePosts.find((post) => post.id === parseInt(post_Id))
      found ? setPost(found) : props.byIdChain(post_Id).then(post => setPost(gamePosts))
    }
  },[gamePosts])
  
  return (
    <div>
      {Post && (Post !== "Post Not Found" ?
        <div className="game_detail flex">
          <h1 className="title flex">{Post.title}</h1>
          <div className="imgCont flex">
            <img src={Post.image} alt="game_image" className="game_img flex"/>
          </div>
          <h5 className="desc">{Post.description}</h5>
          <Comments Post={Post} {...props} />
        </div> :
        <h1 className='searchMsg'>{Post}</h1>
        )}
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
