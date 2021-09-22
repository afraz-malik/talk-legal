import React from 'react'
import DashboardCss from './Dashboard.module.scss'
import NavBar from '../../components/NavBar/NavBar'

const Dashboard = () => {
  return (
    <div className={DashboardCss.container}>
      <NavBar currentPage="dashboard" />
      <div className={DashboardCss.body}>
        <div className={DashboardCss.navigation}>
          <ul>
            <li className={DashboardCss.active}>
              <img alt="" src="images/files.svg" />{' '}
              <span> My Files & Documents </span>
            </li>
            <li>
              <img alt="" src="images/open-order.svg" />{' '}
              <span> Open Order </span>
            </li>
            <li>
              <img alt="" src="images/complete-order.svg" />{' '}
              <span> Complete Order </span>
            </li>
            <li>
              <img alt="" src="images/sub-type.svg" />{' '}
              <span> Subscription Type </span>
            </li>
            <li>
              <img alt="" src="images/settings.svg" />{' '}
              <span> Account Setting </span>
            </li>
          </ul>
        </div>
        <div className={DashboardCss.boxmodel}>
          <h1>My Files & Document</h1>
          <div className={DashboardCss.boxmodel_body}></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
