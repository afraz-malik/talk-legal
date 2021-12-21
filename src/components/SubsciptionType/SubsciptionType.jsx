import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  currentUserSelector,
  LoadingSelector,
} from '../../redux/user/user.selector'
import DialoguePopup from '../DialoguePopup/DialoguePopup'
import moment from 'moment'
import ManageAdOns from '../DialoguePopup/ManageAdOns'

import Preview from '../Preview/Preview'
import { Spinner } from '../Spinner/Spinner'
import UpdatePlans from '../UpdatePlans/UpdatePlans'
import SubTypeCss from './SubsciptionType.module.scss'
import { fetchDbGet } from '../../backend/backend'
import axios from 'axios'

const SubsciptionType = ({ subscription_plan }) => {
  const loading = useSelector((state) => LoadingSelector(state))
  const currentUser = useSelector((state) => currentUserSelector(state))
  const token = useSelector((state) => state.userReducer.token)
  const [invoices, setinvoices] = useState([])
  const [newloading, setloading] = useState(false)
  useEffect(() => {
    return () => {}
    // eslint-disable-next-line
  }, [subscription_plan])
  useEffect(() => {
    fetchDbGet(`api/user/payments`, token).then((res) => {
      console.log(res)
      if (res.response === '200') {
        setinvoices(res.data)
      }
    })
  }, [])
  const [popup, setpopup] = React.useState({ adons: false, plans: false })
  const closePopup = () => {
    setpopup({ adons: false, plans: false })
  }
  const getPdf = (id) => {
    setloading(true)
    const link = document.createElement('a')
    link.target = '_blank'
    link.download = 'Legal Document'
    axios({
      url: `http://tlts-back.maqware.com/api/download-invoice/${id}`,
      method: 'get',
      headers: {
        Accept: 'application/pdf',
        'Content-Type': 'application/pdf',
        mode: 'no-cors',
        Authorization: 'Bearer ' + token,
      },
      responseType: 'blob',
    }).then((res) => {
      link.href = URL.createObjectURL(
        new Blob([res.data], { type: 'application/pdf' })
      )
      link.click()
      setloading(false)
    })
  }
  return (
    <div className={SubTypeCss.container}>
      {newloading ? <Spinner /> : null}
      <div className={SubTypeCss.subscription}>
        <div className={SubTypeCss.membership}>
          <div className={SubTypeCss.top}>
            <h1>{subscription_plan.title} Membership</h1>
            <div className={SubTypeCss.right}>
              <h3>${subscription_plan.membership_cost}/</h3>
              <p>Membership</p>
            </div>
          </div>
          {currentUser.next_subscription_id !=
            currentUser.subscription_plan.id &&
          currentUser.next_subscription_id != 0 ? (
            <span>
              * Your New Subscription will affect on next billing date
            </span>
          ) : currentUser.next_subscription_id == 0 ? (
            <span>
              * Your subscription will be cancelled at the end of this month
            </span>
          ) : null}
          <div className={SubTypeCss.bottom}>
            {subscription_plan.no_of_documents > 0 ? (
              <div className={SubTypeCss.left}>
                <p>
                  {subscription_plan.no_of_documents - currentUser.forms_left}{' '}
                  out of {subscription_plan.no_of_documents} Documents
                </p>
                <div className={SubTypeCss.progress}>
                  <div
                    className={SubTypeCss.total}
                    style={{
                      width: `${
                        ((subscription_plan.no_of_documents -
                          currentUser.forms_left) /
                          subscription_plan.no_of_documents) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ) : null}
            <div className={SubTypeCss.button}>
              <button onClick={() => setpopup({ ...popup, plans: true })}>
                {currentUser.next_subscription_id == 0
                  ? 'Re Subscribe Membership'
                  : 'Change Membership'}
              </button>
            </div>
          </div>
        </div>
        <div className={SubTypeCss.date}>
          <div>
            <p>Next Payment</p>
            <h1>
              on {moment(currentUser.subscription_date).format('MMM DD, YYYY')}
            </h1>
          </div>
          <div className={SubTypeCss.button}>
            {/* <button
                            onClick={() => setpopup({ ...popup, adons: true })}
                        >
                            Manage Add-Ons
                        </button> */}
          </div>
        </div>
      </div>

      <div className={SubTypeCss.invoices}>
        <p>{`Invoices(${invoices.length})`} </p>
        {invoices.map((arr, idx) => (
          <div className={SubTypeCss.box} key={idx}>
            <div className={SubTypeCss.left}>
              <img alt="" src="images/Group 1000001813.svg" />
              <h5>
                Invoice_2021/December.pdf <br />
                <p>
                  Date of invoice -<span> October 31, 2017</span>
                </p>
              </h5>
            </div>
            <div className={SubTypeCss.center}>
              <p>
                Date of invoice -
                <span>{moment(arr.created_at).format('MMM Do, YYYY')}</span>
              </p>
            </div>
            {/* <img alt="" src="images/rounddots.svg" /> */}
            <img
              alt=""
              src="images/Inbox - In.svg"
              style={{ cursor: 'pointer' }}
              onClick={() => getPdf(arr.id)}
            />
          </div>
        ))}
      </div>
      {popup.plans ? <UpdatePlans closePopup={closePopup} /> : null}
      {popup.adons ? (
        <Preview position="fixed">
          <DialoguePopup title="Manage Add-Ons">
            <ManageAdOns closePopup={closePopup} />
          </DialoguePopup>
        </Preview>
      ) : null}
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default SubsciptionType
