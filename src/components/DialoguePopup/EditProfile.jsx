import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchDbGet, fetchDbPost } from '../../backend/backend'
import { refreshingUser } from '../../redux/user/user.action'
import { Spinner } from '../Spinner/Spinner'
import DialoguePopupCss from './DialoguePopup.module.scss'

const EditProfile = ({ closePopup, user }) => {
  const [state, setstate] = useState(user)
  const token = useSelector((state) => state.userReducer.token)
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setloading(true)
    fetchDbPost('api/user/update_profile', token, {
      name: state.name,
      last_name: state.last_name,
      phone: state.phone,
    })
      .then(async (res) => {
        if (res.status) {
          await fetchDbGet(`api/user/data`, token).then(({ user }) => {
            if (user) {
              dispatch(refreshingUser({ user, token }))
              toast.success('Profile Updated Successfully')
              setloading(false)
              closePopup()
            }
          })
          // window.location.reload()
        } else {
          throw new Error(res.msg)
        }
      })
      .catch((e) => {
        toast.error(e.message)
        setloading(false)
      })
    // toast.success('Check Console Log')
  }
  return (
    <div className={DialoguePopupCss.edit}>
      <form className={DialoguePopupCss.form} onSubmit={handleSubmit}>
        <label>First name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <label>Last name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="last_name"
          value={state.last_name}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="phone"
          pattern="[0-9]{8,15}"
          placeholder="Enter Phone Number"
          value={state.phone}
          name="phone"
          onChange={handleChange}
        />
        <div className={DialoguePopupCss.greenButtons}>
          <button type="button" onClick={() => closePopup()}>
            Cancel
          </button>
          <button type="submit">Save Changed</button>
        </div>
      </form>
      {console.log(loading)}
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default EditProfile
