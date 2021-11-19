import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { getSubscriptionsPlansStart } from "./redux/data/data.action";
import { getCurrentUser } from "./redux/user/user.action";
import Routes from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentUser());
        dispatch(getSubscriptionsPlansStart());
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <ToastContainer />
            <Router>
                <Routes />
            </Router>
        </>
    );
}

export default App;