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
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  cartSelector,
  userLegalFormsSelector,
} from '../../redux/data/data.selector'
import { fetchDbGet } from '../../backend/backend'
import Boxmodel from './Boxmodel'
import SideBar from './SideBar'
import PaymentPlans from '../PaymentPlans/PaymentPlans'
import { gettingUserLegalFormsStart } from '../../redux/data/data.action'
const Dashboard = ({ match }) => {
  const history = useHistory()
  const currentUser = useSelector((state) => currentUserSelector(state))
  const useforms = useSelector((state) => userLegalFormsSelector(state))
  const dispatch = useDispatch()
  const token = useSelector((state) => state.userReducer.token)
  const cart = useSelector((state) => cartSelector(state))
  const [userLegalForms, setUserLegalForms] = useState([])
  const [loading, setloading] = useState(false)
  console.log(userLegalForms)
  useEffect(() => {
    // try {
    //   setloading(true)
    //   const response = await fetchDbGet(`api/user/legal-forms`, token)
    //   if (response.user_legal_forms) {
    //     setUserLegalForms(response.user_legal_forms)
    //     setloading(false)
    //   }
    // } catch (error) {
    //   setloading(false)
    //   console.log(error.message)
    // }
    window.scrollTo(0, 0)

    setloading(true)
    if (useforms) {
      setUserLegalForms(useforms)
      setloading(false)
    }
  }, [useforms])
  useEffect(() => {
    // if (currentUser && !currentUser.subscription_plan && cart.form)
    //     history.push("/plans?cart=form");
    window.scrollTo(0, 0)
    dispatch(gettingUserLegalFormsStart())
  }, [currentUser, cart.form, history])
  console.log(userLegalForms)
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
              {/* {currentUser.subscription_plan ? (
                <SubsciptionType
                  subscription_plan={currentUser.subscription_plan}
                />
              ) : (
                <PaymentPlans nologo={true} />
              )} */}
              <SubsciptionType
                subscription_plan={currentUser.subscription_plan}
              />
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
