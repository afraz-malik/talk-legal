import React, { useState } from "react";
import FormCss from "./Form.module.scss";

const Form4 = ({ handleForm, settoggle }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [state, setstate] = useState({
        company2Name: "",
        company2Address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name === "preview") {
            handleForm({
                company2Name: state.company2Name,
                company2Address: state.company2Address,
            });
            settoggle(true);
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
                    name="company2Name"
                    value={state.company2Name}
                    onChange={handleChange}
                />
                <label>Enter Company 1 Name </label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="company2Address"
                    value={state.company2Address}
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
