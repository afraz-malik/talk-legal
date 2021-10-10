import React from "react";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import CheckoutPageCss from "./CheckoutPage.module.scss";

const CheckoutPage = () => {
    return (
        <div className={CheckoutPageCss.container}>
            <div className={CheckoutPageCss.paymentdetails}>
                <PaymentDetails />
            </div>
            <div className={CheckoutPageCss.summary}>
                <OrderSummary />
            </div>
        </div>
    );
};

export default CheckoutPage;
