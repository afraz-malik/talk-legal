import React, { useState } from "react";
import { toast } from "react-toastify";
import DialoguePopupCss from "./DialoguePopup.module.scss";
// import toast from "cogo-toast";

const AddCard = ({ popup, closePopup }) => {
    const [state, setstate] = useState({
        card_holder_name: "",
        card_number: "",
        expiry: "",
        cvv: "",
    });
    const handleChange = (event) => {
        if (
            event.target.name === "card_number" ||
            event.target.name === "cvv"
        ) {
            // event.preventDefault();
            // console.log(event.target.name, event.target.value);
            // toast.warn("Enter Only digits");
            event.target.value = event.target.value
                .replace(/[^\dA-Z]/g, "")
                .replace(/(.{4})/g, "$1 ")
                .trim();
        }
        setstate({ ...state, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Check Console Log");
        console.log(state);
        closePopup();
    };
    return (
        <div className={DialoguePopupCss.edit}>
            <form className={DialoguePopupCss.form} onSubmit={handleSubmit}>
                <label>Card Number</label>
                <input
                    // type="text"
                    // placeholder="Enter Card Number"
                    value={state.card_number}
                    name="card_number"
                    onChange={handleChange}
                    id="cardnumber"
                    type="tel"
                    inputmode="numeric"
                    autoComplete="cc-number"
                    pattern="[0-9\s]{19}"
                    maxLength="19"
                    placeholder="xxxx xxxx xxxx xxxx"
                    required
                />
                <label>Card Holder Name</label>
                <input
                    type="text"
                    placeholder="Enter Card Holder Name"
                    value={state.card_holder_name}
                    name="card_holder_name"
                    onChange={handleChange}
                    required
                />
                <label>Expiry Date</label>
                <input
                    type="month"
                    placeholder="Enter Expiry Date"
                    value={state.expiry}
                    name="expiry"
                    onChange={handleChange}
                    required
                />
                <label>CVV</label>
                <input
                    value={state.cvv}
                    name="cvv"
                    onChange={handleChange}
                    type="tel"
                    inputmode="numeric"
                    autoComplete="cc-number"
                    pattern="[0-9\s]{3}"
                    maxLength="3"
                    id="cardnumber"
                    placeholder="Enter CVV"
                    required
                />
                <div className={DialoguePopupCss.greenButtons}>
                    <button type="button" onClick={() => closePopup()}>
                        Cancel
                    </button>
                    <button type="submit">Add Card</button>
                </div>
            </form>
        </div>
    );
};

export default AddCard;
