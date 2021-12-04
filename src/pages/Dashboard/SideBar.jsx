import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import DashboardCss from './Dashboard.module.scss'

const SideBar = ({ match, location }) => {
  console.log(location)
  return (
    <div className={DashboardCss.navigation}>
      <ul>
        <Link to={`${match.path}`}>
          <li
            className={
              location.pathname === match.path ? DashboardCss.active : null
            }
          >
            <img alt="" src="images/files.svg" />
            <span> My Files & Documents </span>
          </li>
        </Link>
        <Link to={`${match.path}/open-orders`}>
          <li
            className={
              location.pathname === `${match.path}/open-orders`
                ? DashboardCss.active
                : null
            }
          >
            <img alt="" src="images/open-order.svg" />
            <span> Open Order </span>
          </li>
        </Link>
        <Link to={`${match.path}/complete-orders`}>
          <li
            className={
              location.pathname === `${match.path}/complete-orders`
                ? DashboardCss.active
                : null
            }
          >
            <img alt="" src="images/complete-order.svg" />
            <span> Complete Order </span>
          </li>
        </Link>
        <Link to={`${match.path}/subscription`}>
          <li
            className={
              location.pathname === `${match.path}/subscription`
                ? DashboardCss.active
                : null
            }
          >
            <img alt="" src="images/subtype.svg" />
            <span> Subscription Type </span>
          </li>
        </Link>
        <Link to={`${match.path}/settings`}>
          <li
            className={
              location.pathname === `${match.path}/settings`
                ? DashboardCss.active
                : null
            }
          >
            <img alt="" src="images/settings.svg" />
            <span> Account Setting </span>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default withRouter(SideBar)
