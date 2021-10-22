import React, { useState } from "react";
import { withRouter } from "react-router";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import CheckoutPageCss from "./CheckoutPage.module.scss";
const CheckoutPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [checkout, setcheckout] = useState();
    const handleCheckout = (bill) => {
        setcheckout(bill);
    };
    return (
        <div className={CheckoutPageCss.container}>
            <div className={CheckoutPageCss.paymentdetails}>
                <PaymentDetails checkout={checkout} />
            </div>
            <div className={CheckoutPageCss.summary}>
                <OrderSummary handleCheckout={handleCheckout} />
            </div>
        </div>
    );
};

export default withRouter(CheckoutPage);
