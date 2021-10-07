import React, { useState } from "react";
import FormCss from "./Form.module.scss";
const Form3 = ({ handleForm }) => {
    const [state, setstate] = useState({
        company1Name: "",
        company1Address: "",
    });
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleForm(state);
    };
    const handleChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
    };
    return (
        <div className={FormCss.form}>
            <form onSubmit={handleSubmit}>
                <h2>Enter Company 1 Details!</h2>
                <p>
                    For the purpose of industry regulation, your details are
                    required.
                </p>
                <label>Enter Company 1 Name </label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="company1Name"
                    value={state.company1Name}
                    onChange={handleChange}
                />
                <label>Enter Company 1 Address </label>
                <input
                    type="text"
                    placeholder="Enter Address"
                    name="company1Address"
                    value={state.company1Address}
                    onChange={handleChange}
                />
                <input type="submit" value="Continue" />
                <span>
                    {" "}
                    <img alt="" src="images/lock.png" />
                    Your info is savely secured
                </span>
            </form>
        </div>
    );
};

export default Form3;
