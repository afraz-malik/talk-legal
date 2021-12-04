import React, { useEffect, useState } from 'react'
import DashboardCss from './Dashboard.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import FilesDocs from '../../components/FilesDocs/FilesDocs'
import OpenOrders from '../../components/OpenOrders/OpenOrders'
import CompleteOrders from '../../components/CompleteOrders/CompleteOrders'
import SubsciptionType from '../../components/SubsciptionType/SubsciptionType'
import AccountSettings from '../../components/AccountSettings/AccountSettings'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import { currentUserSelector } from '../../redux/user/user.selector'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { cartSelector } from '../../redux/data/data.selector'
import { fetchDbGet } from '../../backend/backend'
import Boxmodel from './Boxmodel'
import SideBar from './SideBar'
import PaymentPlans from '../PaymentPlans/PaymentPlans'
const Dashboard = ({ match }) => {
  const history = useHistory()
  const currentUser = useSelector((state) => currentUserSelector(state))
  const token = useSelector((state) => state.userReducer.token)
  const cart = useSelector((state) => cartSelector(state))
  const [userLegalForms, setUserLegalForms] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(async () => {
    try {
      setloading(true)
      const response = await fetchDbGet(`api/user/legal-forms`, token)
      if (response.user_legal_forms) {
        setUserLegalForms(response.user_legal_forms)
        setloading(false)
      }
    } catch (error) {
      setloading(false)
      console.log(error.message)
    }
  }, [])
  useEffect(() => {
    // if (currentUser && !currentUser.subscription_plan && cart.form)
    //     history.push("/plans?cart=form");
    window.scrollTo(0, 0)
  }, [currentUser, cart.form, history])
  console.log(match.path)
  return (
    <div className={DashboardCss.container}>
      <NavBar currentPage="dashboard" />
      <div className={DashboardCss.body}>
        <SideBar />
        <Switch>
          <Route exact path={match.path}>
            <Boxmodel title="My Files & Documents">
              <FilesDocs userLegalForms={userLegalForms} loading={loading} />
            </Boxmodel>
          </Route>
          <Route exact path={`${match.path}/open-orders`}>
            <Boxmodel title="Open Orders">
              <OpenOrders userLegalForms={userLegalForms} loading={loading} />
            </Boxmodel>
          </Route>
          <Route exact path={`${match.path}/complete-orders`}>
            <Boxmodel title="Complete Orders">
              <CompleteOrders
                userLegalForms={userLegalForms}
                loading={loading}
              />
            </Boxmodel>
          </Route>
          <Route exact path={`${match.path}/subscription`}>
            <Boxmodel title="Subscription Type">
              {currentUser.subscription_plan ? (
                <SubsciptionType
                  subscription_plan={currentUser.subscription_plan}
                />
              ) : (
                // <Redirect to={`/plans`} />
                <PaymentPlans nologo={true} />
              )}
            </Boxmodel>
          </Route>
          <Route exact path={`${match.path}/settings`}>
            <Boxmodel title="Account Setting">
              <AccountSettings currentUser={currentUser} />
            </Boxmodel>
          </Route>
          <Redirect to={match.path} />
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(Dashboard)
