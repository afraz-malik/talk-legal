import React from "react";
import { withRouter } from "react-router";
import AdOnsCss from "./AdOns.module.scss";
const AdOns = ({ location }) => {
    React.useEffect(() => {
        if (location.plan) setstate({ ...state, plans: location.plan });
        // eslint-disable-next-line
    }, [location.plan]);
    const [box, setbox] = React.useState({ plansBox: true, adOnsBox: true });
    const [state, setstate] = React.useState({ plans: "", adOns: "" });
    return (
        <div className={AdOnsCss.ad_ons}>
            <div className={AdOnsCss.ad_on}>
                <div
                    className={AdOnsCss.box}
                    onClick={() => setbox({ ...box, plansBox: !box.plansBox })}
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
                <div
                    className={`${AdOnsCss.card} ${
                        state.plans === "silver" ? AdOnsCss.activeCard : null
                    }`}
                    style={
                        box.plansBox ? { display: "flex" } : { display: "none" }
                    }
                    onClick={() => setstate({ ...state, plans: "silver" })}
                >
                    <label className={AdOnsCss.container2}>
                        <input
                            type="radio"
                            name="plans"
                            value="silver"
                            checked={state.plans === "silver"}
                            onChange={(e) =>
                                setstate({ ...state, plans: e.target.value })
                            }
                        />
                        <span className={AdOnsCss.checkmark}></span>
                    </label>
                    <div className={AdOnsCss.text}>
                        <div className={AdOnsCss.top}>
                            <h2>Silver Membership</h2>
                            <h2>$110</h2>
                        </div>
                        <p>4 number of Documents.</p>
                    </div>
                </div>
                <div
                    className={`${AdOnsCss.card} ${
                        state.plans === "gold" ? AdOnsCss.activeCard : null
                    }`}
                    style={
                        box.plansBox ? { display: "flex" } : { display: "none" }
                    }
                    onClick={() => setstate({ ...state, plans: "gold" })}
                >
                    <label className={AdOnsCss.container2}>
                        <input
                            type="radio"
                            name="plans"
                            value="gold"
                            checked={state.plans === "gold"}
                            onChange={(e) =>
                                setstate({ ...state, plans: e.target.value })
                            }
                        />
                        <span className={AdOnsCss.checkmark}></span>
                    </label>
                    <div className={AdOnsCss.text}>
                        <div className={AdOnsCss.top}>
                            <h2>Gold Membership</h2>
                            <h2>$200</h2>
                        </div>
                        <p>8 number of Documents.</p>
                    </div>
                </div>
                <div
                    className={`${AdOnsCss.card} ${
                        state.plans === "platinum" ? AdOnsCss.activeCard : null
                    }`}
                    style={
                        box.plansBox ? { display: "flex" } : { display: "none" }
                    }
                    onClick={() => setstate({ adOns: "", plans: "platinum" })}
                >
                    <label className={AdOnsCss.container2}>
                        <input
                            type="radio"
                            name="plans"
                            value="platinum"
                            checked={state.plans === "platinum"}
                            onChange={(e) =>
                                setstate({ plans: e.target.value, adOns: "" })
                            }
                        />
                        <span className={AdOnsCss.checkmark}></span>
                    </label>
                    <div className={AdOnsCss.text}>
                        <div className={AdOnsCss.top}>
                            <h2>Platinum Membership</h2>
                            <h2>$500</h2>
                        </div>
                        <p>8 number of Documents.</p>
                    </div>
                </div>
            </div>
            {state.plans === "platinum" ? null : (
                <div className={AdOnsCss.ad_on}>
                    <div
                        className={AdOnsCss.box}
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
                    <div
                        className={`${AdOnsCss.card} ${
                            state.adOns === "unlimited"
                                ? AdOnsCss.activeCard
                                : null
                        }`}
                        style={
                            box.adOnsBox
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                        onClick={() =>
                            setstate({ ...state, adOns: "unlimited" })
                        }
                    >
                        <label className={AdOnsCss.container2}>
                            <input
                                type="radio"
                                name="radio"
                                value="unlimited"
                                checked={state.adOns === "unlimited"}
                                onChange={(e) =>
                                    setstate({
                                        ...state,
                                        adOns: e.target.value,
                                    })
                                }
                            />
                            <span className={AdOnsCss.checkmark}></span>
                        </label>
                        <div className={AdOnsCss.text}>
                            <div className={AdOnsCss.top}>
                                <h2>Unlimited sessions</h2>
                                <h2>$100</h2>
                            </div>
                            <p>
                                Unlimited 30-minute sessions per month(no
                                refunds).
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${AdOnsCss.card} ${
                            state.adOns === "one" ? AdOnsCss.activeCard : null
                        }`}
                        style={
                            box.adOnsBox
                                ? { display: "flex" }
                                : { display: "none" }
                        }
                        onClick={() => setstate({ ...state, adOns: "one" })}
                    >
                        <label className={AdOnsCss.container2}>
                            <input
                                type="radio"
                                name="radio"
                                value="one"
                                checked={state.adOns === "one"}
                                onChange={(e) =>
                                    setstate({
                                        ...state,
                                        adOns: e.target.value,
                                    })
                                }
                            />
                            <span className={AdOnsCss.checkmark}></span>
                        </label>
                        <div className={AdOnsCss.text}>
                            <div className={AdOnsCss.top}>
                                <h2>One-time session</h2>
                                <h2>$80</h2>
                            </div>
                            <p>One-time 30 minutes session.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default withRouter(AdOns);
