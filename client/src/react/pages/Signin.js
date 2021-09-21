import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignInUser } from '../../services/auth'

const iState = {
  userName: '',
  email: '',
  password: ''
}

export default function Signin(props) {
  const [formValues, setFormValues] = useState({
    ...iState
  })

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    SignInUser({ ...formValues })
    setFormValues({ ...iState })
    props.history.push('/newsfeed')
  }

  return (
    <div className="formControl">
      <div className="formContain">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="userName">Username</label>
            <input
              onChange={handleChange}
              name="userName"
              type="text"
              placeholder="What Should We Call You?"
              value={formValues.userName}
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
                !formValues.userName ||
                !formValues.password
              }
              type="submit"
            >
              Signin
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}
