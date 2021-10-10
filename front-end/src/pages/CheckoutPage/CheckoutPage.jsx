import React from "react";
import { withRouter } from "react-router";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import CheckoutPageCss from "./CheckoutPage.module.scss";
import CheckoutPlans from "../../components/CheckoutPlans/CheckoutPlans";
const CheckoutPage = ({ location }) => {
    return (
        <div className={CheckoutPageCss.container}>
            <div className={CheckoutPageCss.paymentdetails}>
                <PaymentDetails />
            </div>
            <div className={CheckoutPageCss.summary}>
                <OrderSummary>
                    {location.plan ? <CheckoutPlans /> : null}
                </OrderSummary>
            </div>
        </div>
    );
};

export default withRouter(CheckoutPage);
