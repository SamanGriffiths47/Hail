import React from 'react'
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
      <img
        style={{ display: 'block' }}
        src={gamepost.image}
        alt={'gameposter'}
        className="imgs"
      />
    </div>
  )
}
export default withRouter(PostCard)
