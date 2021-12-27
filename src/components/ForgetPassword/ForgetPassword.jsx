import React, { useEffect } from 'react'
import { clearError, forgetPasswordStart } from '../../redux/user/user.action'
import ForgetPasswordCss from './ForgetPassword.module.scss'

import { useForm } from 'react-hook-form'

import { useDispatch, useSelector } from 'react-redux'
import {
  LoadingSelector,
  successSelector,
} from '../../redux/user/user.selector'
import { Spinner } from '../../components/Spinner/Spinner'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const ForgetPassword = () => {
  const { register, handleSubmit, reset } = useForm()
  const success = useSelector((state) => successSelector(state))
  const history = useHistory()
  useEffect(() => {
    if (success) {
      reset()
      setTimeout(() => {
        // history.push('/')
      }, 3000)
      dispatch(clearError())
    }
    return () => {
      toast.dismiss()
    }
  }, [success])
  const dispatch = useDispatch()
  const onSubmit = (data) => dispatch(forgetPasswordStart(data))
  const loading = useSelector((state) => LoadingSelector(state))
  return (
    <div className={ForgetPasswordCss.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Reset Your Password!</h3>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>Email address*</label>
        <input
          type="email"
          placeholder="Enter email address"
          name="email"
          required
          {...register('email')}
        />

        <input
          type="submit"
          value="Reset Password"
          // onClick={() => history.push('/changepassword')}
        />
        <div>
          <img alt="" src="images/lock.png" /> Your info is safely secured
        </div>
        <hr />
        <div>
          <Link to="/login" style={{ borderBottom: '1px solid lightgrey' }}>
            Go Back
          </Link>
        </div>
      </form>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default ForgetPassword
