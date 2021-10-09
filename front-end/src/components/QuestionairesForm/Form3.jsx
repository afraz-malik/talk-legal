import React, { useState } from "react";
import FormCss from "./Form.module.scss";
const Form3 = ({ handleForm }) => {
    const [state, setstate] = useState({
        company_one_name: "",
        companu_one_street_address: "",
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
                    name="company_one_name"
                    value={state.company_one_name}
                    onChange={handleChange}
                />
                <label>Enter Company 1 Address </label>
                <input
                    type="text"
                    placeholder="Enter Address"
                    name="companu_one_street_address"
                    value={state.companu_one_street_address}
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
