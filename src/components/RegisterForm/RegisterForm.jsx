import React, { useState } from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom'
import RegisterFormCss from './RegisterForm.module.scss'
import { clearError, signUpStart } from '../../redux/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
import {
  errorSelector,
  LoadingSelector,
  successSelector,
} from '../../redux/user/user.selector'
import { Spinner } from '../Spinner/Spinner'
import { toast } from 'react-toastify'

const RegisterForm = ({ location }) => {
  const [state, setstate] = useState({
    name: '',
    lname: '',
    email: '',
    password: '',
    // phone: "+92 324 8205435",
  })
  const loading = useSelector((state) => LoadingSelector(state))
  const success = useSelector((state) => successSelector(state))
  const error = useSelector((state) => errorSelector(state))
  const dispatch = useDispatch()
  const history = useHistory()
  const redirect = location.search ? location.search.split('=')[1] : null
  React.useEffect(() => {
    setstate({ ...state, password: '' })
    if (success) {
      setstate({ name: '', email: '', password: '' })
      redirect ? history.push('/login?redirect=plans') : history.push('/login')
    }
    return () => {
      setstate({ ...state, password: '' })
      dispatch(clearError())
    }
    // eslint-disable-next-line
  }, [success, error])

  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (state.password.length < 6) {
      toast.error('Password Length Must be greater than 6 characters')
    } else {
      dispatch(signUpStart(state))
    }
    // history.push("/plans");
  }
  const togglePassword = () => {
    var x = document.getElementById('password')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }
  return (
    <div className={RegisterFormCss.form}>
      <form onSubmit={handleSubmit}>
        {redirect === 'plans' ? (
          <h3>Almost there! Create an account to save your document.</h3>
        ) : (
          <h3>Register Your Account!</h3>
        )}
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>First name*</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your first name"
          onChange={handleChange}
          value={state.name}
          required
        />
        <label>Last name*</label>
        <input
          type="text"
          name="lname"
          placeholder="Enter your last name"
          onChange={handleChange}
          value={state.lname}
          required
        />

        <label>Email address*</label>
        <input
          type="email"
          placeholder="Enter email address"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <label>Create password*</label>
        <div className={RegisterFormCss.password}>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
            id="password"
          />
          <img
            alt=""
            src="images/Group 1000001848.svg"
            onClick={() => togglePassword()}
            style={{ display: state.password ? 'block' : 'none' }}
          />
        </div>
        <div className={RegisterFormCss.checkbox}>
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <label htmlFor="checkbox">I agree to terms & conditions</label>
        </div>
        <input type="submit" value="Register Account" />
        <span className={RegisterFormCss.or}>Or</span>
        <div className={RegisterFormCss.google}>
          <img alt="" src="images/google.png" />
          Register With Google
        </div>
        <div className={RegisterFormCss.signin}>
          Already Have an Account?
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            <span type="submit">Sign in</span>
          </Link>
        </div>
      </form>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default withRouter(RegisterForm)
