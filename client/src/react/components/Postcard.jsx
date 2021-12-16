
function PostCard(props) {
  const { gamePost } = props
  let showPost = (gamePost) => {
    props.history.push(`/gamepost/${gamePost.id}`)
  }

  let gameTitle = gamePost.title.split(' ')
  gameTitle.forEach((word) => {
    word = word.charAt(0).toUpperCase() + word.slice(1)
  })
  gameTitle = gameTitle.join(' ')

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
export default PostCard
