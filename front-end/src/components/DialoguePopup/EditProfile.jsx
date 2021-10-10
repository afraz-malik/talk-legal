import React, { useState } from "react";
import DialoguePopupCss from "./DialoguePopup.module.scss";

const EditProfile = ({ setpopup, user }) => {
    const [state, setstate] = useState(user);
    const handleChange = (event) => {
        setstate({ ...state, [event.target.name]: event.target.value });
    };
    return (
        <div className={DialoguePopupCss.edit}>
            <form className={DialoguePopupCss.form}>
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
                    type="text"
                    placeholder="Enter Phone Number"
                    value={state.phone}
                    name="phone"
                    onChange={handleChange}
                />
            </form>
            <div className={DialoguePopupCss.greenButtons}>
                <button
                    onClick={() =>
                        setpopup({ editCard: false, editProfile: false })
                    }
                >
                    Cancel
                </button>
                <button onClick={() => console.log(state)}>Save Changed</button>
            </div>
        </div>
    );
};

export default EditProfile;
