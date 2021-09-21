import React, { useEffect, useState } from 'react'

const mapStateToProps = ({ localState }) => {
  return {
    localState
  }
}

function Register(props) {
  const iState = {
    admin: '',
    city_state: '',
    country: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState({
    ...iState
  })

  function hidePassword (string) {
    let value = ''
    for(let i = 0; i < string.length; i++){
      value.concat('*')
    }
  }

  function adminToggle() {
    if (
      formValues.userName === "Sam'an" ||
      formValues.userName === 'Zitai' ||
      formValues.userName === 'Robert'
    ) {
      return setFormValues({ ...formValues, admin: true })
    }
    return setFormValues({ ...formValues, admin: false })
  }
  useEffect(() => {
    adminToggle()
  }, [formValues.userName, formValues.password, formValues.confirmPassword])
  return (
    <form>
      <div className="inputWrapper">
        <label>Username</label>
        <input
          name="userName"
          type="text"
          placeholder="What Should We Call You?"
          value={formValues.userName}
          required
        />
      </div>
      <div className="inputWrapper">
        <label>Email</label>
        <input
          name="email"
          type="text"
          placeholder="user@email.com"
          value={formValues.email}
          required
        />
      </div>
      <div className="inputWrapper">
        <label>Password</label>
        <input
          name="password"
          type="text"
          placeholder="Choose Password"
          value={formValues.password}
          required
        />
      <div className="inputWrapper">
        <label>Confirm Password</label>
        <input
          name="password"
          type="text"
          placeholder="****"
          value={}
          required
        />
      </div>
    </form>
  )
}
