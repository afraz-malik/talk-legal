import React, { useEffect } from "react";
import "./App.css";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
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
import { currentUserSelector } from "./redux/user/user.selector";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./redux/user/user.action";
import { getSubscriptionsPlansStart } from "./redux/data/data.action";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(getSubscriptionsPlansStart());
        // eslint-disable-next-line
    }, []);
    const currentUser = useSelector((state) => currentUserSelector(state));
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/business" component={BusinessOpPage} />
                <Route
                    path="/login"
                    render={() =>
                        currentUser ? (
                            <Redirect to={`/dashboard`} />
                        ) : (
                            <LoginPage />
                        )
                    }
                />
                <Route
                    path="/register"
                    render={() =>
                        currentUser ? (
                            <Redirect to={`/dashboard`} />
                        ) : (
                            <RegisterPage />
                        )
                    }
                />
                <Route path="/changepassword" component={ResetPasswordPage} />
                <Route path="/forget" component={ForgetPage} />
                <Route path="/plans" component={PaymentPlans} />
                <Route path="/questions" component={Questionaires} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route
                    path="/dashboard"
                    render={() =>
                        !currentUser ? (
                            <Redirect to={`/login`} />
                        ) : (
                            <Dashboard />
                        )
                    }
                />
            </Switch>
        </Router>
    );
}

export default App;
