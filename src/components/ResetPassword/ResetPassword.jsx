import React, { useEffect, useState } from 'react'
import ResetPasswordCss from './ResetPassword.module.scss'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingSelector, successSelector } from '../../redux/user/user.selector'
import { Link } from 'react-router-dom'
import { Spinner } from '../../components/Spinner/Spinner'
import { useForm } from 'react-hook-form'
import { clearError, passwordResetStart } from '../../redux/user/user.action'

const ResetPassword = () => {
  const search = useLocation().search
  const token = new URLSearchParams(search).get('token')
  const email = new URLSearchParams(search).get('email')
  const [state, setstate] = useState({
    password: '',
    password_confirmation: '',
  })
  const history = useHistory()
  useEffect(() => {
    if (!token && !email) {
      history.push('/')
    }
  }, [])
  const success = useSelector((state) => successSelector(state))
  useEffect(() => {
    if (success) {
      history.push('/login')
      dispatch(clearError())
    }
  }, [success])
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    if (state.password === state.password_confirmation) {
      dispatch(
        passwordResetStart({
          password: state.password,
          password_confirmation: state.password_confirmation,
          email,
          token,
        })
      )
    } else {
      alert('Password not match')
    }
  }
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }
  const togglePassword = (val) => {
    var x = document.getElementById(`${val}`)
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }
  const loading = useSelector((state) => LoadingSelector(state))
  return (
    <div className={ResetPasswordCss.form}>
      <form onSubmit={onSubmit}>
        <h3>Reset Password</h3>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>New Password*</label>
        <div className={ResetPasswordCss.col}>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={state.password}
            onChange={handleChange}
            // {...register('password')}
          />
          <img
            alt=""
            src="images/Group 1000001848.svg"
            onClick={() => togglePassword('password')}
            style={{ display: state.password ? 'block' : 'none' }}
          />
        </div>
        <label>Confirm New Password*</label>
        <div className={ResetPasswordCss.col}>
          <input
            type="password"
            placeholder="Enter Password Again"
            name="password_confirmation"
            id="password_confirmation"
            onChange={handleChange}
            value={state.password_confirmation}
          />
          <img
            alt=""
            src="images/Group 1000001848.svg"
            onClick={() => togglePassword('password_confirmation')}
            style={{ display: state.password_confirmation ? 'block' : 'none' }}
          />
        </div>
        <input
          type="submit"
          value="Reset Password"
        />
        <div style={{ textAlign: 'center' }}>
          <Link to="/login" style={{ borderBottom: '1px solid lightgrey' }}>
            &#8592; Go Back
          </Link>
        </div>
      </form>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default ResetPassword
