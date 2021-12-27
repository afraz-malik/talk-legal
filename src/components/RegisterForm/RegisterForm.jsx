import React, { useState } from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom'
import RegisterFormCss from './RegisterForm.module.scss'
import {
  clearError,
  signUpFailed,
  signUpStart,
  signUpSuccess,
} from '../../redux/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
import {
  errorSelector,
  LoadingSelector,
  successSelector,
} from '../../redux/user/user.selector'
import { Spinner } from '../Spinner/Spinner'
import { toast } from 'react-toastify'
import $ from 'jquery'
import { fetchDbPost } from '../../backend/backend'
const RegisterForm = ({ location }) => {
  const [state, setstate] = useState({
    name: '',
    lname: '',
    email: '',
    password: '',
    // phone: "+92 324 8205435",
  })
  const [loading, setloading] = useState(false)
  const success = useSelector((state) => successSelector(state))
  const error = useSelector((state) => errorSelector(state))
  const dispatch = useDispatch()
  const history = useHistory()
  const redirect = location.search ? location.search.split('=')[1] : null
  const [formError, setformError] = useState({
    checkbox: false,
  })
  React.useEffect(() => {
    setstate({ ...state, password: '' })
    return () => {
      setstate({ ...state, password: '' })
      dispatch(clearError())
    }
    // eslint-disable-next-line
  }, [success, error])

  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if ($('#' + 'checkbox').is(':checked')) {
      setformError({
        ...formError,
        error: false,
      })
      if (state.password.length < 6) {
        toast.error('Password Length Must be greater than 6 characters')
      } else {
        // dispatch(signUpStart(state))
        try {
          setloading(true)
          const response = await fetchDbPost('api/register', null, state)
          console.log(response)
          // setloading(false)
          if (response.user) {
            toast.dismiss()
            toast.success(
              'We have sent you a verification link. Kindly Verify yourself before logging in!',
              {
                position: 'top-right',
                autoClose: 55000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            )
            dispatch(signUpSuccess())
            setloading(false)

            redirect
              ? history.push({
                  pathname: '/login?redirect=plans',
                  email: state.email,
                })
              : history.push({ pathname: '/login', email: state.email })
          } else if (response.error) {
            setloading(false)
            // setloading(false)
            for (const key in response.error) {
              if (response.error.hasOwnProperty(key)) {
                // console.log(`${key}: ${response.error[key]}`)
                console.log(response.error[key][0])
                toast.error(response.error[key][0])
              }
            }
            dispatch(signUpFailed(response.error))
          }
        } catch (err) {
          setloading(false)

          dispatch(signUpFailed(err.message))
        }
      }
    } else {
      // $('input[name^=checbox]')[0].focus()
      // console.log($('input[name=checbox]')[0])
      setformError({
        ...formError,
        error: true,
      })
    }
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
          <input type="checkbox" name="checkbox" id="checkbox" autoFocus />
          <label htmlFor="checkbox">I agree to terms & conditions</label>
        </div>
        {formError.checkbox ? 'Kindly Check this box' : null}
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
