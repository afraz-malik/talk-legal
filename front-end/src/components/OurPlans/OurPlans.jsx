import React, { useState } from "react";
import { useSelector } from "react-redux";
import OurPlansCss from "./OurPlans.module.scss";
import { subsctiptionsSelector } from "../../redux/data/data.selector";
import { currentUserSelector } from "../../redux/user/user.selector";
import { useHistory } from "react-router";
import Preview from "../Preview/Preview";
import DialoguePopup from "../DialoguePopup/DialoguePopup";
import MembershipPopup from "../DialoguePopup/MembershipPopup";
const OurPlans = () => {
    const plans = useSelector((state) => subsctiptionsSelector(state));
    const currentUser = useSelector((state) => currentUserSelector(state));
    const history = useHistory();
    const [popup, setpopup] = useState(false);
    const [nextMembership, setnextMembership] = useState(null);
    const closePopup = () => {
        setpopup(false);
    };
    const handleClick = (plan) => {
        if (currentUser) {
            if (currentUser.subscription_plan) {
                setnextMembership(plan);
                setpopup(true);
            } else {
                history.push({ pathname: "/checkout", plan: plan });
            }
        } else {
            history.push("/register?redirect=plans");
        }
    };

    return (
        <>
            {plans ? (
                <div className={OurPlansCss.container} id="plans">
                    <h2>
                        Our <span>Plans</span>
                    </h2>
                    <div className={OurPlansCss.title}>
                        <h4>Simple, transparent pricing</h4>
                        <p>No contracts. No surprise fees.</p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td width="300px"></td>
                                {plans.map((plan) => (
                                    <td key={plan.id}>
                                        <div
                                            className={
                                                // plan.id === selectedPlan
                                                //     ? OurPlansCss.active
                                                //     : OurPlansCss.card
                                                OurPlansCss.card
                                            }
                                        >
                                            <h3>{plan.title}</h3>
                                            <h1>${plan.membership_cost}</h1>
                                            <span>Membership</span>
                                            <p>
                                                Velit officia consequat duis
                                                enim velit mollit. Exercitation
                                                veniam consequat sunt nostrud
                                                amet.
                                            </p>
                                            <button
                                                onClick={() =>
                                                    handleClick(plan)
                                                }
                                            >
                                                Select
                                            </button>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Number of Documents</td>
                                {plans.map((plan) => (
                                    <td key={plan.id}>
                                        {plan.no_of_documents === -1
                                            ? "Unlimited"
                                            : plan.no_of_documents}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td>Add-on attorney consulting service?</td>
                                {plans.map((plan) => (
                                    <td key={plan.id}>
                                        {plan.add_on ? (
                                            <img
                                                alt=""
                                                src="images/Shape.png"
                                            />
                                        ) : null}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td>Cost</td>
                                {plans.map((plan) => (
                                    <td key={plan.id}>
                                        {plan.membership_description.replace(
                                            /(^.*\(|\).*$)/g,
                                            ""
                                        )}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : null}
            {popup ? (
                <Preview position="fixed">
                    <DialoguePopup title="Change Membership">
                        <MembershipPopup
                            nextMembership={nextMembership}
                            closePopup={closePopup}
                        />
                    </DialoguePopup>
                </Preview>
            ) : null}
        </>
    );
};

export default OurPlans;
