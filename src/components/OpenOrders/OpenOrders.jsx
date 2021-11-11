import React from 'react'
import DashboardCard from '../DashboardCard/DashboardCard'
import OpenOrdersCss from './OpenOrders.module.scss'
const OpenOrders = () => {
  return (
    <div className={OpenOrdersCss.cards}>
      {[...Array(3)].map((el, i) => (
        <DashboardCard type={0} title="Progress" key={i} idx={i} />
      ))}
    </div>
  )
}
export default OpenOrders
