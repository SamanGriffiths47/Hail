import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { authToggle, emptyPosts, userLogout } from "../../redux/actions/localActions"
import { getUser } from "../../services/localServices"
import PostCard from "../components/Postcard"

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    clearUser: () => dispatch(userLogout()),
    clearPosts: () => dispatch(emptyPosts()),
    toggleAuth: (boolean) => dispatch(authToggle(boolean))
  }
}

function UserPage (props){

  const [user, setUser] = useState(null)
  const [date, setDate] = useState(null)

  function logoutUser(){
    localStorage.removeItem('token')
    props.clearUser()
    props.clearPosts()
    props.toggleAuth(false)
  }

  useEffect(()=>{
    async function userGrab () {
      if(props.user){
        setUser(await getUser(props.user.id))
      }
    }
    userGrab()
  },[props.user])
  
  useEffect(()=>{
    function dateFormat () {
      if(user){
        let stamp = ''
        let date = new Date(user.createdAt)
        date = `${date}`.split(' ')
        date.splice(5,1)
        date.slice(date.length-3).forEach(word =>{
          word = word.replace('(','')
          stamp += word[0]
        })
        setDate(`${date.slice(4,5)} ${date.slice(0,4).join(' ')} ${stamp}`)
      }
    }
    dateFormat()
  },[user])


return(
  <div>
    {user &&
      <div className="userInfo">
      <h1>{user.username}</h1>
      <h3>{user.city_state}, {user.country}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Joined At: {date}</h3>
      <button id='logOut' type='button' onClick={(e)=>logoutUser(e)}>Log Out</button>
      <h2>Posts You've Commented On</h2>
      <div className="postlist flexRow">
      {user.commented.map(gamePost => (
        <PostCard key={gamePost.id} gamePost={gamePost} {...props}/>
      ))}
        </div>
      </div>
    }
  </div>
)
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPage)