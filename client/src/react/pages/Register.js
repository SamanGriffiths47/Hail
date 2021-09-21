import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterUser } from '../../services/auth'

const iState = {
  city_state: '',
  country: '',
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function Register(props) {
  const [formValues, setFormValues] = useState({
    ...iState
  })

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    RegisterUser({
      admin: adminToggle(),
      city_state: formValues.city_state,
      country: formValues.country,
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({ ...iState })
    props.history.push('/signin')
  }

  function adminToggle() {
    if (
      formValues.userName === "Sam'an" ||
      formValues.userName === 'Zitai' ||
      formValues.userName === 'Robert'
    ) {
      return true
    }
    return false
  }
  return (
    <div className="formControl">
      <div className="formContain">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="city_state">City/State</label>
            <input
              onChange={handleChange}
              name="city_state"
              type="text"
              placeholder="Your City, Your State"
              value={formValues.city_state}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="country">Country</label>
            <input
              onChange={handleChange}
              name="country"
              type="text"
              placeholder="Country"
              value={formValues.country}
              required
            />
          </div>
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
              placeholder="Choose Password"
              value={formValues.password}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              name="Confirm Password"
              type="password"
              placeholder="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <sectiion className="authFooter">
            <div>
              Already have and account? <Link to="/signin">Signin</Link>
            </div>
            <button
              disabled={
                !formValues.email ||
                !formValues.userName ||
                !formValues.country ||
                !formValues.city_state ||
                !formValues.password ||
                (formValues.password &&
                  formValues.confirmPassword !== formValues.password)
              }
              type="submit"
            >
              Register
            </button>
          </sectiion>
        </form>
      </div>
    </div>
  )
}
