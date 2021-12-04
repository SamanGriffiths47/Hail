import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function PostCard(props) {
  const { gamePost } = props
  console.log('GAMEPOSTS 2', gamePost)
  let showPost = (gamePost) => {
    props.history.push(`/gamepost/${gamePost.id}`)
  }

  return (
    <div className="postcard" onClick={() => showPost(gamePost)}>
      <h3>{gamePost.title}</h3>
      <div className="imgContain flexRow">
        <img
          style={{ display: 'block' }}
          src={gamePost.image}
          alt={'gameposter'}
          className="imgs"
        />
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(withRouter(PostCard))
