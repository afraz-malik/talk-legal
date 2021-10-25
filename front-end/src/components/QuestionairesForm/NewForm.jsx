import React, { useState } from "react";
import FormCss from "./Form.module.scss";
import { stateList } from "../../countryList";
import update from "react-addons-update"; // ES6
import $ from "jquery";
const NewForm = ({
    handleForm,
    newForm,
    currentPage,
    pageHandler,
    lastPage,
    settoggle,
    submitForm,
}) => {
    const [fields, setfields] = useState(newForm.feilds);
    const [previewed, setpreviewed] = useState(false);
    const [errors, seterrors] = useState([]);
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setfields(newForm.feilds);
    }, [newForm]);
    const handleChange = (event, idx) => {
        seterrors(
            errors.filter((error) => {
                return error !== event.target.name;
            })
        );
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
        let localerrors = [];
        fields.forEach((field) => {
            if (!field.value) localerrors = [...localerrors, field.name];
        });
        console.log(localerrors);

        if (localerrors.length === 0) {
            handleForm(currentPage, fields);
            if (e.target.name === "preview") {
                settoggle(true);
                setpreviewed(true);
            }
            if (e.target.name === "submitForm") {
                submitForm();
            }
        }
        seterrors(localerrors);
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
                                    <div
                                        key={idx}
                                        className={
                                            errors.includes(fields[idx].name)
                                                ? FormCss.error
                                                : null
                                        }
                                    >
                                        <label>{fields[idx].label}</label>
                                        <div
                                            className={FormCss.dropdownbox}
                                            id={`dropdown${idx}`}
                                            onClick={() => {
                                                $(`.dd_content${idx}`).toggle();
                                            }}
                                        >
                                            <div
                                                className={`${FormCss.dropdown}  `}
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
                                                    {stateList.map(
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
                                            <span
                                                style={
                                                    errors.includes(
                                                        fields[idx].name
                                                    )
                                                        ? { opacity: "1" }
                                                        : { opacity: "0" }
                                                }
                                            >
                                                {" "}
                                                This field is required
                                            </span>
                                        </div>
                                    </div>
                                );
                            default:
                                return (
                                    <div
                                        key={idx}
                                        className={
                                            errors.includes(fields[idx].name)
                                                ? FormCss.error
                                                : null
                                        }
                                    >
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
                                        />
                                        <span
                                            style={
                                                errors.includes(
                                                    fields[idx].name
                                                )
                                                    ? { opacity: "1" }
                                                    : { opacity: "0" }
                                            }
                                        >
                                            {" "}
                                            This field is required
                                        </span>
                                    </div>
                                );
                        }
                    })}
                </div>
                <div className={FormCss.buttons}>
                    {lastPage ? (
                        <input
                            type="button"
                            name="preview"
                            onClick={(e) => {
                                handleSubmit(e);
                            }}
                            value="Preview"
                        />
                    ) : null}
                    <div className={FormCss.directions}>
                        {currentPage === 0 ? null : (
                            <input
                                className={FormCss.previous}
                                type="button"
                                onClick={() => pageHandler(currentPage - 1)}
                                value="&laquo;"
                            />
                        )}
                        {!lastPage ? (
                            <input type="submit" value="Continue" />
                        ) : (
                            <input
                                type="button"
                                name="submitForm"
                                onClick={(e) => {
                                    handleSubmit(e);
                                }}
                                value="Complete"
                                title="Please Preview First"
                                disabled={previewed === false ? true : false}
                            />
                        )}
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
