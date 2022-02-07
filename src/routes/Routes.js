import React from 'react'
import { Switch } from 'react-router-dom'
// Pages
import HomePage from '../pages/HomePage/HomePage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ResetPasswordPage from '../pages/ResetPasswordPage/ResetPasswordPage'
import ForgetPage from '../pages/ForgetPage/ForgetPage'
import PaymentPlans from '../pages/PaymentPlans/PaymentPlans'
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage'
import PreQuestionaires from '../pages/Questionaires/PreQuestionaires'
import BusinessOpPage from '../pages/Services/BusinessOpPage/BusinessOpPage'
import StartupAndPage from '../pages/Services/StartupAndPage/StartupAndPage'
import SocialMediaPage from '../pages/Services/SocialMediaPage/SocialMediaPage'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Questionaires from '../pages/Questionaires/Questionaires'
import FormGenerator from '../pages/FormGenerator/FormGenerator'
import DashboardRoutes from '../pages/Dashboard/Dashboard.jsx'
import Verification from '../pages/Verification/Verification'
const Routes = () => {
  return (
    <Switch>
      {/* Private Routes */}

      <PrivateRoute exact path="/checkout" component={CheckoutPage} />
      <PrivateRoute path="/dashboard" component={DashboardRoutes} />
      <PrivateRoute exact path="/plans" component={PaymentPlans} />
      {/* <PublicRoute component={PageNotFound} /> */}

      {/* Public Routes */}
      <PublicRoute restricted={false} exact path="/" component={HomePage} />
      
      <PublicRoute
        restricted={false}
        exact
        path="/business"
        component={BusinessOpPage}
      />
      
      <PublicRoute
        restricted={false}
        exact
        path="/startups-and-entrepreneurship"
        component={StartupAndPage}
      />
      
      <PublicRoute
        restricted={false}
        exact
        path="/social-media-and-freelancing"
        component={SocialMediaPage}
      />
      
      <PublicRoute
        restricted={false}
        exact
        path="/businessform"
        component={Questionaires}
      />

      <PublicRoute
        restricted={false}
        exact
        path="/formgenerator"
        component={FormGenerator}
      />
      
      <PublicRoute
        restricted={false}
        exact
        path="/resetpassword"
        component={ResetPasswordPage}
      />

      {/* Restricted Routes */}
      <PublicRoute
        restricted={true}
        exact
        path="/forget"
        component={ForgetPage}
      />
      <PublicRoute
        restricted={true}
        exact
        path="/register"
        component={RegisterPage}
      />
      <PublicRoute
        restricted={true}
        exact
        path="/login"
        component={LoginPage}
      />
      <PublicRoute
        restricted={false}
        exact
        path="/verify"
        component={Verification}
      />
    </Switch>
  )
}
export default Routes
