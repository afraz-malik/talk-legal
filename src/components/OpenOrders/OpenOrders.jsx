import React from 'react'
import { useSelector } from 'react-redux'
import { currentUserSelector } from '../../redux/user/user.selector'
import DashboardCard from '../DashboardCard/DashboardCard'
import OpenOrdersCss from './OpenOrders.module.scss'
const OpenOrders = () => {
  const currentUser = useSelector((state) => currentUserSelector(state))
  return (
    <div className={OpenOrdersCss.cards}>
      {currentUser.user_legal_form.length < 1 ? (
        <span>You don't have any forms yet ! </span>
      ) : null}
      {currentUser.user_legal_form
        .filter((form) => form.status === '1')
        .map((el, i) => (
          <DashboardCard type={el.status} key={i} idx={i} form={el} />
        ))}
    </div>
  )
}
export default OpenOrders
