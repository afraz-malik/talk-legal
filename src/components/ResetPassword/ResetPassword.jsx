import React, { useEffect } from 'react'
import ResetPasswordCss from './ResetPassword.module.scss'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  LoadingSelector,
  successSelector,
} from '../../redux/user/user.selector'
import { Spinner } from '../../components/Spinner/Spinner'
import { useForm } from 'react-hook-form'
import { clearError, passwordResetStart } from '../../redux/user/user.action'

const ResetPassword = () => {
  const search = useLocation().search
  const token = new URLSearchParams(search).get('token')
  const email = new URLSearchParams(search).get('email')
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
  const onSubmit = (data) => {
    if (data.password === data.password_confirmation) {
      dispatch(
        passwordResetStart({
          password: data.password,
          password_confirmation: data.password_confirmation,
          email,
          token,
        })
      )
    } else {
      alert('Password not match')
    }
  }
  const loading = useSelector((state) => LoadingSelector(state))
  return (
    <div className={ResetPasswordCss.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Reset Password</h3>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>New Password*</label>
        <input
          type="password"
          placeholder="Enter Password"
          {...register('password')}
        />
        <label>Confirm New Password*</label>
        <input
          type="password"
          placeholder="Enter Password Again"
          {...register('password_confirmation')}
        />
        <input
          type="submit"
          value="Reset Password"
          // onClick={() => {
          //   alert('Change Successfully')
          //   history.push('/')
          // }}
        />
      </form>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default ResetPassword
