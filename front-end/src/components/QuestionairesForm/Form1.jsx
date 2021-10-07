import React from "react";

import FormCss from "./Form.module.scss";
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Zimbabwe",
    "Åland Islands",
];

const Form1 = ({ handleForm }) => {
    const [state, setstate] = React.useState("Select Your State");
    const [toggle, settoggle] = React.useState(false);
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleForm({ state: state });
    };
    return (
        <div className={FormCss.form}>
            <form onSubmit={handleSubmit}>
                <h2>In what State would you like to form ________?</h2>
                <p>
                    For the purpose of industry regulation, your details are
                    required.
                </p>
                <label>Enter Your State </label>
                <div className={FormCss.dropdownbox}>
                    <div
                        className={FormCss.dropdown}
                        onClick={() => settoggle(!toggle)}
                    >
                        <h3>{state}</h3>
                        <img alt="" src="images/downarrow.png" />
                    </div>
                    <div
                        className={FormCss.dd_content}
                        style={
                            toggle ? { display: "block" } : { display: "none" }
                        }
                    >
                        <ul>
                            {countryList.map((cl, j) => (
                                <li
                                    key={j}
                                    onClick={() => {
                                        setstate(cl);
                                        settoggle(false);
                                    }}
                                    className={
                                        state === cl ? FormCss.active : null
                                    }
                                >
                                    {cl}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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

export default Form1;
