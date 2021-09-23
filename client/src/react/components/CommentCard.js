import { connect } from 'react-redux'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function CommentCard(props) {
  console.log(props)
}

export default connect(mapStateToProps)(CommentCard)
