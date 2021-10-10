import React from "react";
import ResetPasswordCss from "./ResetPassword.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { LoadingSelector } from "../../redux/user/user.selector";
import { Spinner } from "../../components/Spinner/Spinner";
import { useForm } from "react-hook-form";
import { passwordResetStart } from "../../redux/user/user.action";

const ResetPassword = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        if (data.password === data.password_confirmation) {
            dispatch(
                passwordResetStart({
                    ...data.password,
                    email: "nbutt@gmail.com",
                    token: "$2y$10$s65fL0FG50GolV2eSqzr0.0Nn4eS/IKIYIvIfRT6Ez0pwnR/Oruia",
                })
            );
        } else {
            alert("Password not match");
        }
    };
    const loading = useSelector((state) => LoadingSelector(state));
    return (
        <div className={ResetPasswordCss.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Reset Password</h3>
                <p>
                    For the purpose of industry regulation, your details are
                    required.
                </p>
                <label>New Password*</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    {...register("password")}
                />
                <label>New Password*</label>
                <input
                    type="password"
                    placeholder="Enter Password Again"
                    {...register("password_confirmation")}
                />
                <input
                    type="submit"
                    value="Reset Password"
                    // onClick={() => {
                    //   alert('Change Successfully')
                    //   history.push('/')
                    // }}
                />
            </form>
            {loading ? <Spinner /> : null}
        </div>
    );
};

export default ResetPassword;
