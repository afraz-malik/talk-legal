import React, { useEffect } from "react";
import Logo from "../NavBar/Logo";
import PDCss from "./PaymentDetails.module.scss";
import { useForm } from "react-hook-form";
import cogotoast from "cogo-toast";
import { countryList } from "../../countryList";
import { clearError, subscribePlanStart } from "../../redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import {
    LoadingSelector,
    successSelector,
} from "../../redux/user/user.selector";
import { Spinner } from "../Spinner/Spinner";
import { useHistory } from "react-router";
import $ from "jquery";
import { toast } from "react-toastify";
const initialState = {
    first_name: "",
    last_name: "",
    address: "",
    zip: "",
    state: "",
    country: "",
    phone: "",
    card_number: "",
    card_holder_name: "",
    expiry: "",
    cvv: "",
};
const PaymentDetails = ({ checkout }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const loading = useSelector((state) => LoadingSelector(state));
    const success = useSelector((state) => successSelector(state));

    const [state, setstate] = React.useState(initialState);
    const [toggle, settoggle] = React.useState(false);

    useEffect(() => {
        window.addEventListener("mouseup", clickEvent);
        if (success) {
            dispatch(clearError());
            setstate(initialState);
            history.push("/dashboard");
        }
        return () => {
            setstate(initialState);
            window.removeEventListener("mouseup", clickEvent);
            dispatch(clearError());
        };
        // eslint-disable-next-line
    }, [success]);

    const clickEvent = (e) => {
        var container = document.getElementById("dd_content");
        if (!container.contains(e.target)) {
            settoggle(false);
        }
    };
    const handleChange = (event) => {
        if (
            event.target.name === "card_number" ||
            event.target.name === "cvv" ||
            event.target.name === "phone"
        ) {
            event.target.value = event.target.value
                .replace(/[^\dA-Z]/g, "")
                .trim();
        }
        if (event.target.name === "card_number") {
            event.target.value = event.target.value
                .replace(/(.{4})/g, "$1 ")
                .trim();
        }
        setstate({ ...state, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        // cogotoast.success("Check console.");
        event.preventDefault();
        if (!state.country) {
            toast.error("Select your country");
        } else {
            if (checkout.plan) {
                console.log(state);
                console.log(checkout);
                // dispatch(subscribePlanStart({ pid: checkout.plan.id }));
            }
        }
    };
    return (
        <div className={PDCss.container}>
            <div className={PDCss.logo}>
                <Logo />
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Payment Details</h1>
                <p>Complete your purchase by providing your payment details.</p>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            required
                            name="first_name"
                            value={state.first_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={PDCss.col}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            required
                            name="last_name"
                            value={state.last_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>Address</label>
                        <input
                            type="text"
                            placeholder="Type Your Address"
                            required
                            name="address"
                            value={state.address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={`${PDCss.col} ${PDCss.group}`}>
                        <label>Billing Address</label>
                        <div className={PDCss.dropdownbox}>
                            <div
                                className={PDCss.dropdown}
                                onClick={() => settoggle(!toggle)}
                            >
                                <h3>
                                    {state.country
                                        ? state.country
                                        : "Select Your Country"}
                                </h3>
                                <img alt="" src="images/downarrow.png" />
                            </div>
                            <div
                                className={PDCss.dd_content}
                                id="dd_content"
                                style={
                                    toggle
                                        ? { display: "block" }
                                        : { display: "none" }
                                }
                            >
                                <ul>
                                    {countryList.map((country, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() => {
                                                setstate({ ...state, country });
                                                settoggle(false);
                                            }}
                                            className={
                                                state.country === country
                                                    ? PDCss.active
                                                    : null
                                            }
                                        >
                                            {country}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={PDCss.insiderow}>
                            <input
                                type="text"
                                placeholder="Zip"
                                className={PDCss.zip}
                                required
                                name="zip"
                                value={state.zip}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="State"
                                className={PDCss.state}
                                required
                                name="state"
                                value={state.state}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>Phone Number</label>
                        <input
                            type="phone"
                            pattern="[0-9]{8,15}"
                            placeholder="Enter Phone Number"
                            placeholder="Enter Phone Number"
                            required
                            name="phone"
                            value={state.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={`${PDCss.col} ${PDCss.carddetails}`}>
                        <img alt="" src="images/card_icon.png" />
                        <label>Card Number</label>
                        <input
                            id="cardnumber"
                            type="tel"
                            inputmode="numeric"
                            autoComplete="cc-number"
                            pattern="[0-9\s]{19}"
                            maxLength="19"
                            placeholder="xxxx xxxx xxxx xxxx"
                            required
                            required
                            name="card_number"
                            value={state.card_number}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>Cardholder Name</label>
                        <input
                            type="text"
                            placeholder="Enter Card holder Name"
                            required
                            name="card_holder_name"
                            value={state.card_holder_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>Expiry Date</label>
                        <input
                            type="month"
                            placeholder="MM/YY"
                            required
                            name="expiry"
                            value={state.expiry}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={PDCss.col}>
                        <label>CVV</label>
                        <input
                            type="tel"
                            inputmode="numeric"
                            autoComplete="cc-number"
                            pattern="[0-9\s]{3}"
                            maxLength="3"
                            id="cardnumber"
                            placeholder="Enter CVV"
                            required
                            name="cvv"
                            value={state.cvv}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <input
                        type="submit"
                        value={`Pay $${checkout ? checkout.totalValue : 0}`}
                    />
                </div>
            </form>
            {loading ? <Spinner /> : null}
        </div>
    );
};

export default PaymentDetails;
