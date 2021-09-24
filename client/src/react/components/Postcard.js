import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function PostCard(props) {
  const { gamepost } = props
  let showPost = (gamepost) => {
    props.history.push(`/gamepost/${gamepost.id}`)
  }

  return (
    <div className="postcard" onClick={() => showPost(gamepost)}>
      <h3>{gamepost.title}</h3>
      <div className="imgContain flexRow">
        <img
          style={{ display: 'block' }}
          src={gamepost.image}
          alt={'gameposter'}
          className="imgs"
        />
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(withRouter(PostCard))
