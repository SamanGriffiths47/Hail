import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(() => {})
  }
}

function PostDetail(props) {
  console.log(props)
  return <div>Game detail</div>
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
