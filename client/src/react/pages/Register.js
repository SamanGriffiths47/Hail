import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterUser } from '../../services/auth'

const iState = {
  city_state: '',
  country: '',
  username: '',
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
    const user = {
      admin: adminToggle(),
      city_state: formValues.city_state,
      country: formValues.country,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    }
    RegisterUser(user)
    setFormValues({ ...iState })
    props.history.push('/signin')
  }

  function adminToggle() {
    if (
      formValues.username === "Sam'an" ||
      formValues.username === 'Zitai' ||
      formValues.username === 'Robert'
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
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
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
              placeholder="Choose Password"
              value={formValues.password}
              required
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <section className="authFooter">
            <div>
              Already have and account? <Link to="/signin">Signin</Link>
            </div>
            <button
              disabled={
                !formValues.email ||
                !formValues.username ||
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
          </section>
        </form>
      </div>
    </div>
  )
}
