import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignInUser } from '../../services/auth'
import { changeForm } from '../../redux/actions/localActions'

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeForm: (values) => dispatch(changeForm(values))
  }
}

function Signin(props) {
  const userForm = props.form

  function handleChange(e) {
    props.changeForm({ ...userForm, [e.target.name]: e.target.value })
  }

  async function formSubmit() {
    const { city_state, country, confirmPassword, ...formValues } = userForm
    await SignInUser(formValues)
    if (localStorage.getItem('token')) {
      props.changeForm(clearForm())
      props.history.push('/')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    formSubmit()
  }

  function clearForm() {
    const form = userForm
    Object.keys(form).forEach((val) => (form[val] = ''))
    return form
  }

  async function autoSignIn() {
    if (userForm.confirmPassword) {
      formSubmit()
    }
  }

  autoSignIn()

  return (
    <div className="formControl flex">
      <div className="formContain">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
              value={userForm.username}
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
              value={userForm.email}
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
              value={userForm.password}
              required
            />
          </div>
          <section className="authFooter">
            <div>
              Don't have an account yet? <Link to="/register">Register</Link>
            </div>
            <button
              disabled={
                !userForm.email || !userForm.username || !userForm.password
              }
              type="submit"
              className='authBtn'
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
