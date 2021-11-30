import React from 'react'
import DashboardCard from '../DashboardCard/DashboardCard'
import { InsideSpinner } from '../Spinner/Spinner'
import OpenOrdersCss from './OpenOrders.module.scss'
const OpenOrders = ({ userLegalForms, loading }) => {
  return (
    <div className={OpenOrdersCss.cards}>
      {loading ? (
        <InsideSpinner />
      ) : (
        <>
          {userLegalForms.length < 1 ? (
            <span>You don't have any forms yet ! </span>
          ) : null}
          {userLegalForms
            .filter((form) => form.status === '1')
            .map((el, i) => (
              <DashboardCard type={el.status} key={i} idx={i} form={el} />
            ))}
        </>
      )}
    </div>
  )
}
export default OpenOrders
