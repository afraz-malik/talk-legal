import React, { useState } from "react";
import DialoguePopupCss from "./DialoguePopup.module.scss";
import toast from "cogo-toast";

const AddCard = ({ popup, setpopup }) => {
    const [state, setstate] = useState({
        card_holder_name: "",
        card_number: "",
        expiry: "",
        cvv: "",
    });
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
                <label>Card Number</label>
                <input
                    type="text"
                    placeholder="Enter Card Number"
                    value={state.card_number}
                    name="card_number"
                    onChange={handleChange}
                />
                <label>Card Holder Name</label>
                <input
                    type="text"
                    placeholder="Enter Card Holder Name"
                    value={state.card_holder_name}
                    name="card_holder_name"
                    onChange={handleChange}
                />
                <label>Expiry Date</label>
                <input
                    type="month"
                    placeholder="Enter Expiry Date"
                    value={state.expiry}
                    name="expiry"
                    onChange={handleChange}
                />
                <label>CVV</label>
                <input
                    type="text"
                    placeholder="Enter CVV"
                    value={state.cvv}
                    name="cvv"
                    onChange={handleChange}
                />
                <div className={DialoguePopupCss.greenButtons}>
                    <button
                        type="button"
                        onClick={() => setpopup({ ...popup, editCard: false })}
                    >
                        Cancel
                    </button>
                    <button type="submit">Add Card</button>
                </div>
            </form>
        </div>
    );
};

export default AddCard;
