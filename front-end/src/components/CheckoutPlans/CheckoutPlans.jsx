import React from "react";
import { withRouter } from "react-router";
import CheckoutPlansCss from "./CheckoutPlans.module.scss";

import { useSelector } from "react-redux";

import { subsctiptionsSelector } from "../../redux/data/data.selector";

const CheckoutPlans = ({ location, handlePlan }) => {
    const plans = useSelector((state) => subsctiptionsSelector(state));
    const addons = [
        {
            id: 1,
            title: "Unlimited Sessions",
            price: 100,
            desp: "Unlimited 30-minutes sessions per month (no refunds)",
        },
        {
            id: 2,
            title: "One-time Session",
            price: 80,
            desp: "One time 30-minutes session",
        },
    ];

    const [box, setbox] = React.useState({ plansBox: true, adOnsBox: true });
    const [state, setstate] = React.useState({ plan: "", adOns: "" });
    React.useEffect(() => {
        if (location.plan) setstate({ ...state, plan: location.plan });
        // eslint-disable-next-line
    }, [location.plan]);

    React.useEffect(() => {
        handlePlan(state);
        // eslint-disable-next-line
    }, [state]);
    const updatePlan = (plan) => {
        if (state.plan.id === plan.id) {
            setstate({ ...state, plan: "" });
        } else {
            if (plan.id === 3) {
                setstate({ plan: plan, adOns: "" });
            } else {
                setstate({ ...state, plan: plan });
            }
        }
    };
    const updateAdon = (adon) => {
        if (state.adOns.id === adon.id) {
            setstate({ ...state, adOns: "" });
        } else {
            setstate({ ...state, adOns: adon });
        }
    };
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
                                onClick={() => updatePlan(plan)}
                            >
                                <label className={CheckoutPlansCss.container2}>
                                    <input
                                        type="radio"
                                        name="plans"
                                        checked={state.plan.id === plan.id}
                                        disabled
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
                                            : plan.no_of_documents}
                                        number of Documents.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {state.plan.id === 3 || state.plan === "" ? null : (
                        <div className={CheckoutPlansCss.ad_on}>
                            <div
                                className={CheckoutPlansCss.box}
                                onClick={() =>
                                    setbox({ ...box, adOnsBox: !box.adOnsBox })
                                }
                            >
                                <h3>Add-Ons</h3>
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
                            {addons.map((addon, idx) => (
                                <div
                                    key={idx}
                                    className={`${CheckoutPlansCss.card} ${
                                        state.adOns.id === addon.id
                                            ? CheckoutPlansCss.activeCard
                                            : null
                                    }`}
                                    style={
                                        box.adOnsBox
                                            ? { display: "flex" }
                                            : { display: "none" }
                                    }
                                    onClick={() => updateAdon(addon)}
                                >
                                    <label
                                        className={CheckoutPlansCss.container2}
                                    >
                                        <input
                                            type="radio"
                                            name="radio"
                                            value={addon.id}
                                            checked={
                                                state.adOns.id === addon.id
                                            }
                                            disabled
                                        />
                                        <span
                                            className={
                                                CheckoutPlansCss.checkmark
                                            }
                                        ></span>
                                    </label>
                                    <div className={CheckoutPlansCss.text}>
                                        <div className={CheckoutPlansCss.top}>
                                            <h2>{addon.title}</h2>
                                            <h2>${addon.price}</h2>
                                        </div>
                                        <p>{addon.desp}</p>
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
