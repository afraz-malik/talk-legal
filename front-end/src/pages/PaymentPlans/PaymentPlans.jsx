import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../components/NavBar/Logo";
import PaymentPlanCards from "../../components/PaymentPlanCards/PaymentPlanCards";
import { currentUserSelector } from "../../redux/user/user.selector";
import PaymentPlansCss from "./PaymentPlans.module.scss";
const PaymentPlans = ({ form }) => {
    const currentUser = useSelector((state) => currentUserSelector(state));
    const history = useHistory();

    React.useEffect(() => {
        window.scrollTo(0, 0);
        if (currentUser) {
            if (currentUser.subscription_plan) history.push("/dashboard");
        }
    }, []);

    const handleSubmit = (val) => {
        history.push({ pathname: "/checkout", plan: val });
    };
    return (
        <div className={PaymentPlansCss.container}>
            <Logo />
            {form ? (
                <div className={PaymentPlansCss.body}>
                    <h1>
                        Your Mutual Non-Disclosure <br />
                        Agreement agreement is ready.
                    </h1>
                    <p>
                        Select a membership to save money and access multiple
                        documents.
                    </p>
                    <PaymentPlanCards handleSubmit={handleSubmit} />
                    <div className={PaymentPlansCss.single}>
                        <Link to="/checkout">
                            Skip this membership step to purchase a single
                            document ›
                        </Link>
                    </div>
                </div>
            ) : (
                <div className={PaymentPlansCss.body}>
                    <h1>Your Agreement, Our responsibilty</h1>
                    <p>
                        Select a membership to save money and access multiple
                        documents.
                    </p>
                    <PaymentPlanCards handleSubmit={handleSubmit} />
                </div>
            )}
        </div>
    );
};

export default PaymentPlans;
