import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchDbGet } from '../../backend/backend'
import LoginBoxmodel from '../../components/LoginBoxmodel/LoginBoxmodel'
import { Spinner } from '../../components/Spinner/Spinner'
import { clearError } from '../../redux/user/user.action'
import { successSelector } from '../../redux/user/user.selector'
import VerificationCss from './Verification.module.scss'
const Verification = (props) => {
  const location = useLocation()
  const search = useLocation().search
  const success = useSelector((state) => successSelector(state))
  const email = new URLSearchParams(search).get('email')
  const history = useHistory()
  const [loading, setloading] = useState(false)
  console.log(location.email)
  React.useEffect(() => {
    window.scrollTo(0, 0)
    if (!location.email) history.goBack()
  }, [])
  const handleSubmit = () => {
    if (location.uid) {
      setloading(true)
      fetchDbGet(`api/verify-link/${location.uid}`)
        .then((res) => {
          setloading(false)
          if (res.status) {
            toast.dismiss()
            toast.success(res.msg, {
              position: 'top-right',
              autoClose: 55000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            history.push('/login')
          }
        })
        .catch((err) => {
          setloading(false)
          toast.error(err)
        })
    }
  }
  return (
    <LoginBoxmodel>
      {loading ? <Spinner /> : null}
      <div className={VerificationCss.verify}>
        <img src="images/Group 1000001982.png" alt="" />
        <h3>Please Verify Your Email Address!</h3>
        <p>
          An email has been sent to <span>{location.email}</span> with a link to
          verify your account. After receiving the email click the link provided
          to complete your registration.
        </p>
        <input
          type="submit"
          value="Resend Email"
          onClick={() => {
            handleSubmit()
          }}
        />
      </div>
    </LoginBoxmodel>
  )
}

export default withRouter(Verification)
