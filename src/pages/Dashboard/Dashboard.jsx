import React from 'react'
import DashboardCss from './Dashboard.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import FilesDocs from '../../components/FilesDocs/FilesDocs'
import OpenOrders from '../../components/OpenOrders/OpenOrders'
import CompleteOrders from '../../components/CompleteOrders/CompleteOrders'
import SubsciptionType from '../../components/SubsciptionType/SubsciptionType'
const Dashboard = () => {
  const [state, setstate] = React.useState({
    title: 'My Files & Documents',
    value: 1,
  })
  return (
    <div className={DashboardCss.container}>
      <NavBar currentPage="dashboard" />
      <div className={DashboardCss.body}>
        <div className={DashboardCss.navigation}>
          <ul>
            <li
              className={state.value === 1 ? DashboardCss.active : null}
              onClick={() =>
                setstate({ title: 'My Files & Documents', value: 1 })
              }
            >
              <img alt="" src="images/files.svg" />{' '}
              <span> My Files & Documents </span>
            </li>
            <li
              className={state.value === 2 ? DashboardCss.active : null}
              onClick={() => setstate({ title: 'Open Order', value: 2 })}
            >
              <img alt="" src="images/open-order.svg" />{' '}
              <span> Open Order </span>
            </li>
            <li
              className={state.value === 3 ? DashboardCss.active : null}
              onClick={() => setstate({ title: 'Complete Order', value: 3 })}
            >
              <img alt="" src="images/complete-order.svg" />{' '}
              <span> Complete Order </span>
            </li>
            <li
              className={state.value === 4 ? DashboardCss.active : null}
              onClick={() => setstate({ title: 'Subscription Type', value: 4 })}
            >
              <img alt="" src="images/sub-type.svg" />{' '}
              <span> Subscription Type </span>
            </li>
            <li
              className={state.value === 5 ? DashboardCss.active : null}
              onClick={() => setstate({ title: 'Account Setting', value: 5 })}
            >
              <img alt="" src="images/settings.svg" />{' '}
              <span> Account Setting </span>
            </li>
          </ul>
        </div>
        <div className={DashboardCss.boxmodel}>
          <h1>{state.title}</h1>
          <div className={DashboardCss.boxmodel_body}>
            {state.value === 1 ? <FilesDocs /> : null}
            {state.value === 2 ? <OpenOrders /> : null}
            {state.value === 3 ? <CompleteOrders /> : null}
            {state.value === 4 ? <SubsciptionType /> : null}
            {state.value === 5 ? null : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
