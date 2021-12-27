import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchDbGet, fetchDbPost } from '../../backend/backend'
import {
  addingCartItem,
  clearingCart,
  gettingUserLegalFormsStart,
} from '../../redux/data/data.action'
import { refreshingUser } from '../../redux/user/user.action'
import { currentUserSelector } from '../../redux/user/user.selector'
import { Spinner } from '../Spinner/Spinner'
import DashboardCardCss from './DashboardCard.module.scss'
const DashboardCard = ({ idx, type, title, form }) => {
  const currentUser = useSelector((state) => currentUserSelector(state))
  const token = useSelector((state) => state.userReducer.token)
  const [loading, setloading] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSubmit = async (form) => {
    if (currentUser.subscription_plan) {
      try {
        setloading(true)
        const response = await fetchDbGet(
          `api/user/complete-form/${form.id}`,
          // response.access_token.accessToken.plainTextToken,
          token
        )

        if (response.status) {
          setloading(false)
          toast.dismiss()
          toast.success(response.msg)
          dispatch(clearingCart())
          dispatch(refreshingUser())
          dispatch(gettingUserLegalFormsStart())
          history.push('/dashboard/complete-orders')
        } else {
          if (response.response === '402') {
            dispatch(addingCartItem(form))
            history.push('/plans?cart=form')
          } else {
            throw Error(response.msg)
          }
        }
      } catch (e) {
        console.log(e)
        setloading(false)
        toast.dismiss()
        toast.error(e.message)
      }
    } else {
      dispatch(addingCartItem(form))
      history.push('/plans?cart=form')
    }
  }
  const tt = idx + 10 * 7 + '%'
  const getPdf = (id) => {
    const link = document.createElement('a')
    link.target = '_blank'
    link.download = 'Legal Document'
    axios({
      url: `http://tlts-back.maqware.com/api/user/download-form/${id}`,
      method: 'get',
      headers: {
        Accept: 'application/pdf',
        'Content-Type': 'application/pdf',
        mode: 'no-cors',
        Authorization: 'Bearer ' + token,
      },
      responseType: 'blob',
    })
      .then((res) => {
        link.href = URL.createObjectURL(
          new Blob([res.data], { type: 'application/pdf' })
        )
        link.click()
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <div
      className={` ${DashboardCardCss.card} ${'hey'}`}
      // idx === 0 ? DashboardCardCss.active : null
    >
      <div className={DashboardCardCss.topBar}></div>
      <div className={DashboardCardCss.title}>
        <h2>{form.title}</h2>
        <img alt="" src="images/icon.svg" />
      </div>
      <p>
        Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend
        porttitor.
      </p>
      <span>{type === '1' ? 'Progress' : 'Complete'} </span>
      <div
        className={DashboardCardCss.bar}
        style={type === '1' ? { width: tt } : { width: '100%' }}
      ></div>
      {type === '2' ? (
        <button
          className={DashboardCardCss.download}
          onClick={() => getPdf(form.id)}
        >
          <img alt="" src="images/arrow-down-circle.svg" />
          Download
        </button>
      ) : (
        <button
          className={DashboardCardCss.progress}
          onClick={() => handleSubmit(form)}
        >
          <img alt="" src="images/rightarrow.svg" />
          <img alt="" src="images/rightarrow.svg" />
          Complete
        </button>
      )}
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default DashboardCard
