import React, { useState } from "react";
import { withRouter } from "react-router";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import CheckoutPageCss from "./CheckoutPage.module.scss";
const CheckoutPage = () => {
    const [totalValue, settotalValue] = useState(0);
    return (
        <div className={CheckoutPageCss.container}>
            <div className={CheckoutPageCss.paymentdetails}>
                <PaymentDetails totalValue={totalValue} />
            </div>
            <div className={CheckoutPageCss.summary}>
                <OrderSummary settotalValue={settotalValue} />
            </div>
        </div>
    );
};

export default withRouter(CheckoutPage);
