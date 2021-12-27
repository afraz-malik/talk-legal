import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import LoginFormCss from './LoginForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearError,
  refreshingUser,
  signInFailed,
  signInStart,
  signInSuccess,
} from '../../redux/user/user.action'
import { toast } from 'react-toastify'

import {
  currentUserSelector,
  LoadingSelector,
} from '../../redux/user/user.selector'
import { Spinner } from '../Spinner/Spinner'
import { withRouter } from 'react-router'
import { fetchDbPost } from '../../backend/backend'
import {
  addingCartItemSuccess,
  clearingCart,
} from '../../redux/data/data.action'

const LoginForm = ({ location }) => {
  const dispatch = useDispatch()
  // const loading = useSelector((state) => LoadingSelector(state))
  const history = useHistory()
  const [loading, setloading] = useState(false)
  const currentUser = useSelector((state) => currentUserSelector(state))
  const cart = useSelector((state) => state.dataReducer.cart)
  console.log(cart)
  const redirect = location.search ? location.search.split('=')[1] : null
  React.useEffect(() => {
    return () => {
      setstate({
        email: '',
        password: '',
      })
      dispatch(clearError())
      toast.dismiss()
    }
    // eslint-disable-next-line
  }, [currentUser, dispatch])

  const [state, setstate] = useState({
    email: '',
    password: '',
    keeplogin: false,
  })
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (state.password.length < 6) {
      toast.dismiss()
      toast.warn('Password Must be at least 6 characters long')
    } else {
      // dispatch(signInStart(state))
      try {
        setloading(true)
        const response = await fetchDbPost('api/login', null, {
          email: state.email,
          password: state.password,
        })
        setloading(false)
        if (response.user && response.user.email_verified_at) {
          dispatch(
            signInSuccess({
              user: response.user,
              token: response.access_token.plainTextToken,
            })
          )
          sessionStorage.setItem(
            'currentUser',
            JSON.stringify({
              user: response.user,
              token: response.access_token.plainTextToken,
            })
          )
          if (state.keeplogin) {
            localStorage.setItem(
              'currentUser',
              JSON.stringify({
                user: response.user,
                token: response.access_token.plainTextToken,
              })
            )
          }
          if (cart.form) {
            // dispatch(
            // savingFormToApiAction({ id: response.user.id, form: cart.form })
            // )

            const newresponse = await fetchDbPost(
              `api/user/submit-legal-form`,
              // response.access_token.accessToken.plainTextToken,
              response.access_token.plainTextToken,
              cart.form
            )
            if (newresponse.status) {
              dispatch(addingCartItemSuccess(newresponse.user_legal_form))
              if (newresponse.user_legal_form.status === '2') {
                toast.dismiss()
                toast.success(
                  `Welcome ${response.user.name}, Your Form has been completed successfully`
                )
                dispatch(refreshingUser())
                dispatch(clearingCart())
              } else {
                toast.dismiss()
                toast.success(`Welcome ${response.user.name}.`)
              }
            } else {
              console.log(newresponse)
              throw Error(newresponse.msg)
            }
          } else {
            toast.dismiss()
            toast.success(`Welcome ${response.user.name}`)
          }
        } else if (response.message) {
          toast.dismiss()
          toast.error(response.message)
          dispatch(signInFailed(response.message))
        } else if (response.user && !response.user.email_verified_at) {
          toast.dismiss()
          // toast.error(
          //   'Kindly verify your email first. Verify link has sent to this email',
          //   {
          //     position: 'top-right',
          //     autoClose: 55000,
          //     hideProgressBar: true,
          //     closeOnClick: false,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //   }
          // )

          redirect
            ? history.push({
                pathname: '/verify?redirect=plans',
                email: state.email,
              })
            : history.push({
                pathname: '/verify',
                email: state.email,
                uid: response.user.id,
              })
          throw new Error('Email not verified')
        } else {
          toast.dismiss()

          toast.error(response)
          dispatch(signInFailed(response))
        }
      } catch (error) {
        setloading(false)
        dispatch(signInFailed(error))
      }
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
    <div className={LoginFormCss.form}>
      <form onSubmit={handleSubmit}>
        <h2>Get Started now</h2>
        <label>Email Address*</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          name="email"
          required
          value={state.email}
          onChange={handleChange}
        />
        <label>Password*</label>
        <div className={LoginFormCss.password}>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            id="password"
            value={state.password}
            onChange={handleChange}
          />
          <img
            alt=""
            src="images/Group 1000001848.svg"
            onClick={() => togglePassword()}
            style={{ display: state.password ? 'block' : 'none' }}
          />
        </div>
        <h5>
          Forget Your Password?
          <Link to="/forget">
            <span>Reset it</span>
          </Link>
        </h5>
        <div>
          <input
            id="keeplogin"
            type="checkbox"
            name="keeplogin"
            // checked={state.persistence}
            onChange={(e) =>
              setstate({
                ...state,
                keeplogin: e.target.checked,
              })
            }
          />
          <label htmlFor="keeplogin">Keep Logged in</label>
        </div>
        <div>
          <input type="submit" value="Sign In" />
        </div>
        <h5>
          Don't have an account?
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            <span>Sign Up</span>
          </Link>
        </h5>
        <img alt="" src="images/line.png" className={LoginFormCss.line} />
        <img alt="" src="images/1.png" className={LoginFormCss.computer} />
      </form>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default withRouter(LoginForm)
