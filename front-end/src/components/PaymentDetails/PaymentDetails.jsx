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
const PaymentDetails = ({ checkout }) => {
    const loading = useSelector((state) => LoadingSelector(state));
    const success = useSelector((state) => successSelector(state));
    const history = useHistory();
    useEffect(() => {
        window.addEventListener("mouseup", clickEvent);
        if (success) {
            dispatch(clearError());
            reset();
            history.push("/dashboard");
        }
        return () => {
            reset();
            window.removeEventListener("mouseup", clickEvent);
            console.log("removed event listner from paymentdetails");
            dispatch(clearError());
        };
        // eslint-disable-next-line
    }, [success]);
    const [toggle, settoggle] = React.useState(false);
    const dispatch = useDispatch();
    const [country, setCountry] = React.useState("");
    const clickEvent = (e) => {
        var container = document.getElementById("dd_content");
        if (!container.contains(e.target)) {
            settoggle(false);
        }
    };
    const {
        register,
        handleSubmit,
        // formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        // cogotoast.success("Check console.");
        console.log({ data, checkout });
        if (checkout.plan) {
            dispatch(subscribePlanStart({ pid: checkout.plan.id }));
        }
    };
    return (
        <div className={PDCss.container}>
            <div className={PDCss.logo}>
                <Logo />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Payment Details</h1>
                <p>Complete your purchase by providing your payment details.</p>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            defaultValue="Joh"
                            {...register("first_name", {
                                required: "Required",
                            })}
                        />
                    </div>
                    <div className={PDCss.col}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            {...register("last_name", {
                                required: "Required",
                            })}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>Address</label>
                        <input
                            type="text"
                            placeholder="Type Your Address"
                            {...register("address", {
                                required: "Required",
                            })}
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
                                    {country ? country : "Select Your Country"}
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
                                    {countryList.map((cl, j) => (
                                        <li
                                            key={j}
                                            onClick={() => {
                                                setCountry(cl);
                                                settoggle(false);
                                            }}
                                            className={
                                                country === cl
                                                    ? PDCss.active
                                                    : null
                                            }
                                        >
                                            {cl}
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
                                {...register("zip", {
                                    required: "Required",
                                })}
                            />
                            <input
                                type="text"
                                placeholder="State"
                                className={PDCss.state}
                                {...register("state", {
                                    required: "Required",
                                })}
                            />
                        </div>
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            {...register("phone", {
                                required: "Required",
                            })}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={`${PDCss.col} ${PDCss.carddetails}`}>
                        <img alt="" src="images/card_icon.png" />
                        <label>Card Details</label>
                        <input
                            type="text"
                            placeholder="Enter Card Details"
                            {...register("card_number", {
                                required: "Required",
                            })}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>Cardholder Name</label>
                        <input
                            type="text"
                            placeholder="Enter Cardholder Name"
                            {...register("card_holder_name", {
                                required: "Required",
                            })}
                        />
                    </div>
                </div>
                <div className={PDCss.row}>
                    <div className={PDCss.col}>
                        <label>Expiry Date</label>
                        <input
                            type="month"
                            placeholder="MM/YY"
                            {...register("expiry", {
                                required: "Required",
                            })}
                        />
                    </div>
                    <div className={PDCss.col}>
                        <label>CVV</label>
                        <input
                            type="text"
                            placeholder="Enter CVV"
                            {...register("cvv", {
                                required: "Required",
                            })}
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
