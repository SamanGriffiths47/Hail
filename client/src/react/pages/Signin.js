import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignInUser } from '../../services/auth'
import { setUser, authToggle } from '../../redux/actions/localActions'

const iState = {
  username: '',
  email: '',
  password: ''
}

const mapStateToProps = ({ rawgState, localState }) => {
  return {
    rawgState,
    localState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userSet: () => dispatch(setUser()),
    toggleAuth: (boolean) => dispatch(authToggle(boolean))
  }
}

function Signin(props) {
  const [formValues, setFormValues] = useState({
    ...iState
  })

  const checkToken = async (e) => {
    const token = localStorage.getItem('token')
    if (token) {
      props.userSet()
      props.toggleAuth(true)
      props.history.push('/newsfeed')
    }
    setFormValues({ ...iState })
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await SignInUser({ ...formValues })
    checkToken(e)
  }

  return (
    <div className="formControl">
      <div className="formContain">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="What Should We Call You?"
              value={formValues.username}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <section className="authFooter">
            <div>
              Don't have an account yet? <Link to="/register">Register</Link>
            </div>
            <button
              disabled={
                !formValues.email ||
                !formValues.username ||
                !formValues.password
              }
              type="submit"
              // onMouseOver={handleSubmit}
            >
              Signin
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
