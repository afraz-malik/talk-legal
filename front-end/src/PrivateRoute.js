import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { currentUserSelector } from "./redux/user/user.selector";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const currentUser = useSelector((state) => currentUserSelector(state));
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={(props) =>
                currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
