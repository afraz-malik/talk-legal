import React from "react";
import FormCss from "./Form.module.scss";

const Form2 = ({ handleForm }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [value, onChange] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleForm({ date_as_of: value });
    };
    return (
        <div className={FormCss.form}>
            <form onSubmit={handleSubmit}>
                <h2>When do you want to start your business?</h2>
                <p>
                    For the purpose of industry regulation, your details are
                    required.
                </p>
                <label>Enter Your State </label>
                <div className={FormCss.dropdownbox}>
                    <div
                        className={FormCss.dropdown}
                        onClick={() => document.getElementById("date")}
                    >
                        <input
                            type="date"
                            id="date"
                            onChange={(e) => onChange(e.target.value)}
                        />
                    </div>
                </div>
                <input type="submit" value="Continue" />
                <span>
                    {" "}
                    <img alt="" src="images/lock.png" />
                    Most customers form their LLC in their local state.
                </span>
            </form>
        </div>
    );
};

export default Form2;
