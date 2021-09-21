import React from 'react'
import { connect } from 'react-redux'
import getPosts from '../../redux/actions/localActions'

function Newsfeed(props) {
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
  return <div></div>
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
