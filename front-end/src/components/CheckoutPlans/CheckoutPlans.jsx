import React from "react";
import { withRouter } from "react-router";
import CheckoutPlansCss from "./CheckoutPlans.module.scss";

import { useSelector } from "react-redux";

import { subsctiptionsSelector } from "../../redux/data/data.selector";

const CheckoutPlans = ({ location }) => {
    const plans = useSelector((state) => subsctiptionsSelector(state));

    React.useEffect(() => {
        if (location.plan) setstate({ ...state, plan: location.plan });
        // eslint-disable-next-line
    }, [location.plan]);
    const [box, setbox] = React.useState({ plansBox: true, adOnsBox: true });
    const [state, setstate] = React.useState({ plan: "", adOns: "" });
    return (
        <>
            {plans ? (
                <div className={CheckoutPlansCss.ad_ons}>
                    <div className={CheckoutPlansCss.ad_on}>
                        <div
                            className={CheckoutPlansCss.box}
                            onClick={() =>
                                setbox({ ...box, plansBox: !box.plansBox })
                            }
                        >
                            <h3>Payment Plans</h3>
                            <img
                                alt=""
                                src="images/downarrow2.png"
                                style={
                                    box.plansBox
                                        ? { transform: "rotate(0)" }
                                        : { transform: "rotate(-92deg)" }
                                }
                            />
                        </div>
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`${CheckoutPlansCss.card} ${
                                    state.plan.id === plan.id
                                        ? CheckoutPlansCss.activeCard
                                        : null
                                }`}
                                style={
                                    box.plansBox
                                        ? { display: "flex" }
                                        : { display: "none" }
                                }
                                onClick={() =>
                                    setstate({ ...state, plan: plan })
                                }
                            >
                                <label className={CheckoutPlansCss.container2}>
                                    <input
                                        type="radio"
                                        name="plans"
                                        checked={state.plan.id === plan.id}
                                        onChange={() =>
                                            setstate({
                                                ...state,
                                                plan: plan,
                                            })
                                        }
                                    />
                                    <span
                                        className={CheckoutPlansCss.checkmark}
                                    ></span>
                                </label>
                                <div className={CheckoutPlansCss.text}>
                                    <div className={CheckoutPlansCss.top}>
                                        <h2>{plan.title} Membership</h2>
                                        <h2>${plan.membership_cost}</h2>
                                    </div>
                                    <p>
                                        {plan.no_of_documents === -1
                                            ? "Unlimited"
                                            : plan.no_of_documents}{" "}
                                        number of Documents.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {state.plan.id === 3 ? null : (
                        <div className={CheckoutPlansCss.ad_on}>
                            <div
                                className={CheckoutPlansCss.box}
                                onClick={() =>
                                    setbox({ ...box, adOnsBox: !box.adOnsBox })
                                }
                            >
                                <h3>Add ons</h3>
                                <img
                                    alt=""
                                    src="images/downarrow2.png"
                                    style={
                                        box.adOnsBox
                                            ? { transform: "rotate(0)" }
                                            : { transform: "rotate(-92deg)" }
                                    }
                                />
                            </div>
                            {plans.map((plan, idx) => (
                                <div
                                    key={idx}
                                    className={`${CheckoutPlansCss.card} ${
                                        state.adOns === plan.add_on.id
                                            ? CheckoutPlansCss.activeCard
                                            : null
                                    }`}
                                    style={
                                        box.adOnsBox
                                            ? { display: "flex" }
                                            : { display: "none" }
                                    }
                                    onClick={() =>
                                        setstate({
                                            ...state,
                                            adOns: plan.add_on.id,
                                        })
                                    }
                                >
                                    <label
                                        className={CheckoutPlansCss.container2}
                                    >
                                        <input
                                            type="radio"
                                            name="radio"
                                            value={plan.add_on.id}
                                            checked={
                                                state.adOns === plan.add_on.id
                                            }
                                            onChange={(e) =>
                                                setstate({
                                                    ...state,
                                                    adOns: e.target.value,
                                                })
                                            }
                                        />
                                        <span
                                            className={
                                                CheckoutPlansCss.checkmark
                                            }
                                        ></span>
                                    </label>
                                    <div className={CheckoutPlansCss.text}>
                                        <div className={CheckoutPlansCss.top}>
                                            <h2>Add Ons</h2>
                                            <h2>${plan.add_on.cost}</h2>
                                        </div>
                                        <p>{plan.add_on.session_benifits}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : null}
        </>
    );
};

export default withRouter(CheckoutPlans);
