import React from 'react'
import { forgetPasswordStart } from '../../redux/user/user.action'
import ForgetPasswordCss from './ForgetPassword.module.scss'

import { useForm } from 'react-hook-form'

import { useDispatch, useSelector } from 'react-redux'
import { LoadingSelector } from '../../redux/user/user.selector'
import { Spinner } from '../../components/Spinner/Spinner'

const ForgetPassword = () => {
  const { register, handleSubmit } = useForm()
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
      </form>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default ForgetPassword
