import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/user/user.action";
import { getSubscriptionsPlansStart } from "./redux/data/data.action";
import Routes from "./Routes";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(getSubscriptionsPlansStart());
        // eslint-disable-next-line
    }, []);

    return (
        <Router basename="/">
            <Routes />
        </Router>
    );
}

export default App;
