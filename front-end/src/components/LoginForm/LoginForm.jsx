import React from "react";
import { Link } from "react-router-dom";
import LoginFormCss from "./LoginForm.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signInStart } from "../../redux/user/user.action";
import { LoadingSelector } from "../../redux/user/user.selector";
import { Spinner } from "../Spinner/Spinner";

const LoginForm = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => LoadingSelector(state));
    React.useEffect(() => {
        return () => {
            // dispatch(clearError());
            reset();
        };
        // eslint-disable-next-line
    }, []);
    const {
        register,
        handleSubmit,
        // formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        dispatch(signInStart(data));
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
                    {...register("email", {
                        required: "Required",
                    })}
                />
                <label>Enter Password*</label>

                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    {...register("password", {
                        required: "Required",
                    })}
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
                    <Link to="/register">
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

export default LoginForm;
