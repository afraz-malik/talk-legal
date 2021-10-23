import React, { useState } from "react";
import FormCss from "./Form.module.scss";
import { countryList } from "../../countryList";
import update from "react-addons-update"; // ES6
import $ from "jquery";
import { toast } from "react-toastify";
const NewForm = ({
    handleForm,
    newForm,
    currentPage,
    pageHandler,
    lastPage,
}) => {
    const [fields, setfields] = useState(newForm.feilds);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setfields(newForm.feilds);
    }, [newForm]);

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
    const handleListChange = (value, idx) => {
        setfields(
            update(fields, {
                [idx]: {
                    $set: {
                        ...fields[idx],
                        value,
                    },
                },
            })
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let error = 0;
        fields.forEach((field) => {
            if (!field.value) error = 1;
        });
        error === 0
            ? handleForm(currentPage, fields)
            : toast.error("Fill out details first");
    };
    $(document).click(function (e) {
        for (let i = 0; i < fields.length; i++) {
            if (e.target.id !== `dropdown${i}`) {
                $(`.dd_content${i}`).css("display", "none");
            }
        }
    });
    return (
        <div className={FormCss.form}>
            <form onSubmit={handleSubmit}>
                <div className={FormCss.fields}>
                    <h2>{newForm.title}</h2>
                    <p>{newForm.desp}</p>
                    {fields.map((field, idx) => {
                        switch (field.type) {
                            case "list":
                                return (
                                    <div key={idx}>
                                        <label>{fields[idx].title}</label>
                                        <div className={FormCss.dropdownbox}>
                                            <div
                                                className={`${FormCss.dropdown}  `}
                                                id={`dropdown${idx}`}
                                                onClick={() => {
                                                    $(
                                                        `.dd_content${idx}`
                                                    ).toggle();
                                                }}
                                            >
                                                <h3>
                                                    {fields[idx].value
                                                        ? fields[idx].value
                                                        : "Select Your State"}
                                                </h3>
                                                <img
                                                    alt=""
                                                    src="images/downarrow.png"
                                                />
                                            </div>
                                            <div
                                                className={`${FormCss.dd_content} dd_content${idx}`}
                                            >
                                                <ul>
                                                    {countryList.map(
                                                        (country, j) => (
                                                            <li
                                                                key={j}
                                                                onClick={() => {
                                                                    handleListChange(
                                                                        country,
                                                                        idx
                                                                    );
                                                                    $(
                                                                        `.dd_content${idx}`
                                                                    ).toggle();
                                                                }}
                                                                className={
                                                                    fields[idx]
                                                                        .value ===
                                                                    country
                                                                        ? FormCss.active
                                                                        : null
                                                                }
                                                            >
                                                                {country}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            default:
                                return (
                                    <div key={idx}>
                                        <label>{fields[idx].label}</label>
                                        <input
                                            type={fields[idx].type}
                                            placeholder={
                                                fields[idx].placeholder
                                            }
                                            name={fields[idx].name}
                                            value={fields[idx].value}
                                            onChange={(e) =>
                                                handleChange(e, idx)
                                            }
                                            required
                                        />
                                    </div>
                                );
                        }
                    })}
                </div>
                <div className={FormCss.buttons}>
                    {lastPage ? (
                        <button
                            type="submit"
                            className={FormCss.preview}
                            name="preview"
                            onClick={(e) => {
                                e.preventDefault();
                                handleForm(currentPage, fields, true);
                            }}
                        >
                            Preview
                        </button>
                    ) : null}
                    <div className={FormCss.directions}>
                        {currentPage === 0 ? null : (
                            <button
                                className={FormCss.previous}
                                type="button"
                                onClick={() => pageHandler(currentPage - 1)}
                            >
                                &laquo;
                            </button>
                        )}
                        <input
                            type="submit"
                            value={lastPage ? "Complete" : "Continue"}
                        />
                    </div>
                    <span>
                        {" "}
                        <img alt="" src="images/lock.png" />
                        Your info is savely secured
                    </span>
                </div>
            </form>
        </div>
    );
};

export default NewForm;
