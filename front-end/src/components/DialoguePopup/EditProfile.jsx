import React, { useState } from "react";
import { toast } from "react-toastify";
import DialoguePopupCss from "./DialoguePopup.module.scss";

const EditProfile = ({ popup, setpopup, user }) => {
    const [state, setstate] = useState(user);
    const handleChange = (event) => {
        setstate({ ...state, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Check Console Log");
        console.log(state);
    };
    return (
        <div className={DialoguePopupCss.edit}>
            <form className={DialoguePopupCss.form} onSubmit={handleSubmit}>
                <label>First name</label>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
                <label>Last name</label>
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="last_name"
                    value={state.last_name}
                    onChange={handleChange}
                />
                <label>Phone Number</label>
                <input
                    type="phone"
                    pattern="[0-9]{8,15}"
                    placeholder="Enter Phone Number"
                    value={state.phone}
                    name="phone"
                    onChange={handleChange}
                />
                <div className={DialoguePopupCss.greenButtons}>
                    <button
                        type="button"
                        onClick={() =>
                            setpopup({ ...popup, editProfile: false })
                        }
                    >
                        Cancel
                    </button>
                    <button type="submit">Save Changed</button>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
