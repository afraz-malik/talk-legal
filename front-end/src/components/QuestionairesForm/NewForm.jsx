import React, { useState } from "react";
import toast from "cogo-toast";
import FormCss from "./Form.module.scss";
import { countryList } from "../../countryList";
import update from "react-addons-update"; // ES6

const NewForm = ({ handleForm, newForm, currentPage, lastPage }) => {
    const [fields, setfields] = useState(newForm.feilds);
    const [state, setstate] = useState("");
    const [toggle, settoggle] = useState(false);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setfields(newForm.feilds);
    }, [newForm]);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleForm(currentPage, fields);
    };
    const handleChange = (event, idx) => {
        setfields(
            update(fields, {
                [idx]: {
                    $set: {
                        ...fields[idx],
                        value: event.target.value,
                    },
                },
            })
        );
    };
    return (
        <div className={FormCss.form}>
            <form onSubmit={handleSubmit}>
                <h2>{newForm.title}</h2>
                <p>{newForm.desp}</p>
                {fields.map((field, idx) => {
                    switch (field.type) {
                        case "list":
                            return (
                                <>
                                    <label>{fields[idx].title}</label>
                                    <div className={FormCss.dropdownbox}>
                                        <div
                                            className={FormCss.dropdown}
                                            onClick={() => settoggle(!toggle)}
                                        >
                                            <h3>
                                                {state
                                                    ? state
                                                    : "Select Your State"}
                                            </h3>
                                            <img
                                                alt=""
                                                src="images/downarrow.png"
                                            />
                                        </div>
                                        <div
                                            className={FormCss.dd_content}
                                            style={
                                                toggle
                                                    ? { display: "block" }
                                                    : { display: "none" }
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
                                                            state === cl
                                                                ? FormCss.active
                                                                : null
                                                        }
                                                    >
                                                        {cl}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            );
                        default:
                            return (
                                <>
                                    <label>{fields[idx].label}</label>
                                    <input
                                        type={fields[idx].type}
                                        placeholder={fields[idx].placeholder}
                                        name={fields[idx].name}
                                        value={fields[idx].value}
                                        onChange={(e) => handleChange(e, idx)}
                                    />
                                </>
                            );
                    }
                })}
                {lastPage ? (
                    <>
                        <button
                            type="submit"
                            className={FormCss.complete}
                            name="preview"
                            onClick={(e) => {
                                e.preventDefault();
                                handleForm(currentPage, fields, true);
                            }}
                        >
                            Preview
                        </button>
                        <input
                            type="submit"
                            value="Complete"
                            className={FormCss.complete}
                        />
                    </>
                ) : (
                    <input type="submit" value="Continue" />
                )}
                <span>
                    {" "}
                    <img alt="" src="images/lock.png" />
                    Your info is savely secured
                </span>
            </form>
        </div>
    );
};

export default NewForm;
