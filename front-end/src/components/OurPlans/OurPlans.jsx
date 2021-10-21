import React, { useState } from "react";
import { useSelector } from "react-redux";
import OurPlansCss from "./OurPlans.module.scss";
import { subsctiptionsSelector } from "../../redux/data/data.selector";
const OurPlans = () => {
    const plans = useSelector((state) => subsctiptionsSelector(state));
    console.log(plans);
    const [selectedPlan, setSelectedPlan] = useState(2);
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
                                            onClick={() =>
                                                setSelectedPlan(plan.id)
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
                                            <button>Select</button>
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
        </>
    );
};

export default OurPlans;
