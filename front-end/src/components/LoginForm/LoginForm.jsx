import React from "react";
import { Link } from "react-router-dom";
import LoginFormCss from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearError, signInStart } from "../../redux/user/user.action";
import { toast } from "react-toastify";

import {
    currentUserSelector,
    errorSelector,
    LoadingSelector,
} from "../../redux/user/user.selector";
import { Spinner } from "../Spinner/Spinner";
import { useHistory, withRouter } from "react-router";

const LoginForm = ({ location }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => LoadingSelector(state));
    const currentUser = useSelector((state) => currentUserSelector(state));
    const error = useSelector((state) => errorSelector(state));
    const history = useHistory();
    const redirect = location.search ? location.search.split("=")[1] : null;
    React.useEffect(() => {
        // if (currentUser) {
        //     dispatch(clearError());
        //     redirect
        //         ? history.push(`/${redirect}`)
        //         : history.push("/dashboard");
        // }
        return () => {
            reset();
            dispatch(clearError());
        };
        // eslint-disable-next-line
    }, [currentUser, dispatch]);
    const {
        register,
        handleSubmit,
        // formState: { errors },
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        if (data.password.length < 6) {
            toast.warn("Password Must be at least 6 characters long");
        } else {
            dispatch(signInStart(data));
        }
    };
    return (
        <div className={LoginFormCss.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Get Started now</h2>
                <label>Enter Email*</label>
                <input
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    required
                    {...register("email")}
                />
                <label>Enter Password*</label>

                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                    {...register("password")}
                />
                <h5>
                    Forget password?{" "}
                    <Link to="/forget">
                        <span>Reset Password</span>
                    </Link>
                </h5>
                <div>
                    <input
                        id="keeplogin"
                        type="checkbox"
                        {...register("keepLogin")}
                    />
                    <label htmlFor="keeplogin">Keep Loggged in</label>
                </div>
                <div>
                    <input type="submit" value="Sign In" />
                </div>
                <h5>
                    Don't have an account?{" "}
                    <Link
                        to="/register"
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
