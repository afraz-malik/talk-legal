import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import BusinessOpPage from "./pages/BusinessOpPage/BusinessOpPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import ForgetPage from "./pages/ForgetPage/ForgetPage";
import PaymentPlans from "./pages/PaymentPlans/PaymentPlans";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Dashboard from "./pages/Dashboard/Dashboard";
//Redux
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import PreQuestionaires from "./pages/Questionaires/PreQuestionaires";

const Routes = () => {
    return (
        <Switch>
            {/* Public Routes */}
            <PublicRoute
                restricted={false}
                exact
                path="/"
                component={HomePage}
            />
            <PublicRoute
                restricted={false}
                exact
                path="/business"
                component={BusinessOpPage}
            />
            <PublicRoute
                restricted={false}
                exact
                path="/questions"
                component={PreQuestionaires}
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
                restricted={true}
                exact
                path="/resetpassword"
                component={ResetPasswordPage}
            />

            {/* Private Routes */}

            <PrivateRoute exact path="/checkout" component={CheckoutPage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/plans" component={PaymentPlans} />
        </Switch>
    );
};
export default Routes;
