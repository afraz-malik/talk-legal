import React from 'react'
import DashboardCard from '../DashboardCard/DashboardCard'
import { InsideSpinner } from '../Spinner/Spinner'
import OpenOrdersCss from './OpenOrders.module.scss'
const OpenOrders = ({ userLegalForms, loading }) => {
  const openOrderForms = userLegalForms.filter((form) => form.status === '1')
  return (
    <div className={OpenOrdersCss.cards}>
      {loading ? (
        <InsideSpinner />
      ) : (
        <>
          {openOrderForms.length < 1 ? (
            <span>You don't have any open orders yet ! </span>
          ) : null}
          {openOrderForms.map((el, i) => (
            <DashboardCard type={el.status} key={i} idx={i} form={el} />
          ))}
        </>
      )}
    </div>
  )
}
export default OpenOrders
