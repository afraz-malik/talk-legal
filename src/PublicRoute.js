import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { currentUserSelector } from "./redux/user/user.selector";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const currentUser = useSelector((state) => currentUserSelector(state));
    return (
        <Route
            {...rest}
            render={(props) =>
                currentUser && restricted ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PublicRoute;
