import React from 'react'
import DashboardCss from './Dashboard.module.scss'
const Boxmodel = ({ title, children }) => {
  return (
    <div className={DashboardCss.boxmodel}>
      <h1>{title}</h1>
      <div className={DashboardCss.boxmodel_body}>{children}</div>
    </div>
  )
}

export default Boxmodel
