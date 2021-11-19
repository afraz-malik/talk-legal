import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginFormCss from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearError, signInStart } from "../../redux/user/user.action";
import { toast } from "react-toastify";

import {
    currentUserSelector,
    LoadingSelector,
} from "../../redux/user/user.selector";
import { Spinner } from "../Spinner/Spinner";
import { withRouter } from "react-router";

const LoginForm = ({ location }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => LoadingSelector(state));
    const currentUser = useSelector((state) => currentUserSelector(state));
    const redirect = location.search ? location.search.split("=")[1] : null;
    React.useEffect(() => {
        return () => {
            setstate({
                email: "",
                password: "",
            });
            dispatch(clearError());
        };
        // eslint-disable-next-line
    }, [currentUser, dispatch]);

    const [state, setstate] = useState({
        email: "",
        password: "",
        keeplogin: false,
    });
    const handleChange = (event) => {
        setstate({ ...state, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (state.password.length < 6) {
            toast.warn("Password Must be at least 6 characters long");
        } else {
            dispatch(signInStart(state));
        }
    };
    const togglePassword = () => {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    };
    return (
        <div className={LoginFormCss.form}>
            <form onSubmit={handleSubmit}>
                <h2>Get Started now</h2>
                <label>Email Address*</label>
                <input
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    required
                    value={state.email}
                    onChange={handleChange}
                />
                <label>Password*</label>
                <div className={LoginFormCss.password}>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        id="password"
                        value={state.password}
                        onChange={handleChange}
                    />
                    <img
                        alt=""
                        src="images/Group 1000001848.svg"
                        onClick={() => togglePassword()}
                        style={{ display: state.password ? "block" : "none" }}
                    />
                </div>
                <h5>
                    Forget Your Password?
                    <Link to="/forget">
                        <span>Reset it</span>
                    </Link>
                </h5>
                <div>
                    <input
                        id="keeplogin"
                        type="checkbox"
                        name="keeplogin"
                        // checked={state.persistence}
                        onChange={(e) =>
                            setstate({
                                ...state,
                                keeplogin: e.target.checked,
                            })
                        }
                    />
                    <label htmlFor="keeplogin">Keep Logged in</label>
                </div>
                <div>
                    <input type="submit" value="Sign In" />
                </div>
                <h5>
                    Don't have an account?
                    <Link
                        to={
                            redirect
                                ? `/register?redirect=${redirect}`
                                : "/register"
                        }
                    >
                        <span>Sign Up</span>
                    </Link>
                </h5>
                <img
                    alt=""
                    src="images/line.png"
                    className={LoginFormCss.line}
                />
                <img
                    alt=""
                    src="images/1.png"
                    className={LoginFormCss.computer}
                />
            </form>
            {loading ? <Spinner /> : null}
        </div>
    );
};

export default withRouter(LoginForm);
