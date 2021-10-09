import React, { useState } from "react";
import FormCss from "./Form.module.scss";
import HardCopy from "./HardCopy";
import { useHistory } from "react-router-dom";
import Preview from "../Preview/Preview";

import { useSelector } from "react-redux";
import { mutualFormSelector } from "../../redux/data/data.selector";
import { InsideSpinner } from "../Spinner/Spinner";

const Form4 = ({ handleForm }) => {
    const mutualForm = useSelector((state) => mutualFormSelector(state));
    const history = useHistory();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [state, setstate] = useState({
        company2Name: "",
        company2Address: "",
        toggle: false,
    });
    const toggle = () => {
        setstate({ ...state, toggle: !state.toggle });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // history.push({
        //     pathname: "/register",
        //     form: "yes",
        // });
        handleForm({
            company2Name: state.company2Name,
            company2Address: state.company2Address,
        });
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
                    onClick={() => toggle()}
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
            {state.toggle ? (
                <Preview position="fixed">
                    <div
                        className={FormCss.hc}
                        style={{ backgroundImage: "url(images/TLTM.png)" }}
                    >
                        <img
                            className={FormCss.hcimg}
                            alt=""
                            src="images/x-circle.png"
                            onClick={() => toggle()}
                        />

                        {mutualForm ? (
                            <HardCopy mutualForm={mutualForm} />
                        ) : (
                            <InsideSpinner />
                        )}
                    </div>
                </Preview>
            ) : null}
        </div>
    );
};

export default Form4;
