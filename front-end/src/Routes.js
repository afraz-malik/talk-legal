import React from "react";
import { Switch, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import BusinessOpPage from "./pages/BusinessOpPage/BusinessOpPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import Questionaires from "./pages/Questionaires/Questionaires";
import ForgetPage from "./pages/ForgetPage/ForgetPage";
import PaymentPlans from "./pages/PaymentPlans/PaymentPlans";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Dashboard from "./pages/Dashboard/Dashboard";
//Redux
import { currentFormSelector } from "./redux/data/data.selector";
import { useSelector } from "react-redux";
import { Spinner } from "./components/Spinner/Spinner";

const Routes = () => {
    const currentForm = useSelector((state) => currentFormSelector(state));
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/business" component={BusinessOpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/resetpassword" component={ResetPasswordPage} />
            <Route path="/forget" component={ForgetPage} />
            <Route path="/plans" component={PaymentPlans} />
            <Route path="/questions">
                {currentForm ? <Questionaires /> : <Spinner />}
            </Route>
            <Route path="/checkout" component={CheckoutPage} />
        </Switch>
    );
};
export default Routes;
