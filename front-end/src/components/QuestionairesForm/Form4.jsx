import cogoToast from "cogo-toast";
import React, { useState } from "react";
import FormCss from "./Form.module.scss";

const Form4 = ({ handleForm, settoggle, submitForm }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [state, setstate] = useState({
        company_two_name: "",
        companu_two_street_address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!state.company_two_name) {
            cogoToast.warn("Enter Company's Name to Proceed", {
                hideAfter: 10,
            });
        } else if (!state.companu_two_street_address) {
            cogoToast.warn("Enter Company's Address to Proceed");
        } else {
            if (e.target.name === "preview") {
                handleForm(state);
                settoggle(true);
            } else {
                handleForm(state);
                submitForm();
            }
        }
    };
    const handleChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
    };
    return (
        <div className={FormCss.form}>
            <form onSubmit={handleSubmit}>
                <h2>Enter Company 2 Details!</h2>
                <p>
                    For the purpose of industry regulation, your details are
                    required.
                </p>
                <label>Enter Company 1 Name </label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="company_two_name"
                    value={state.company_two_name}
                    onChange={handleChange}
                />
                <label>Enter Company 1 Name </label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="companu_two_street_address"
                    value={state.companu_two_street_address}
                    onChange={handleChange}
                />
                <button
                    type="button"
                    className={FormCss.complete}
                    name="preview"
                    onClick={handleSubmit}
                >
                    Preview
                </button>
                <input
                    type="submit"
                    value="Complete"
                    className={FormCss.complete}
                />
                <span>
                    {" "}
                    <img alt="" src="images/lock.png" />
                    Your info is savely secured
                </span>
            </form>
        </div>
    );
};

export default Form4;
