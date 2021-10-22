import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import { currentFormSelector } from "../../redux/data/data.selector";
import CheckoutPlans from "../CheckoutPlans/CheckoutPlans";
import Logo from "../NavBar/Logo";
import HardCopy from "../QuestionairesForm/HardCopy";
import OrderCss from "./OrderSummary.module.scss";
import OrderSummaryGen from "./OrderSummaryGen";
const OrderSummary = ({ location, form, handleCheckout }) => {
    const currentForm = useSelector((state) => currentFormSelector(state));
    const [planBill, setPlanBill] = useState({});
    let subtotal =
        Number(planBill.plan ? planBill.plan.membership_cost : 0) +
        Number(planBill.adOns ? planBill.adOns.price : 0) +
        Number(form ? form : 0);
    let tax = (subtotal * 10) / 100;
    let totalValue = tax + subtotal;
    useEffect(() => {
        handleCheckout({
            ...planBill,
            totalValue: totalValue,
        });
        return () => {};
    }, [planBill]);
    return (
        <div className={OrderCss.container}>
            <div className={OrderCss.logo}>
                <Logo />
            </div>
            <h1 className={OrderCss.h1}>Order Summary</h1>
            {form ? (
                <div
                    className={OrderCss.hardCopy}
                    style={{ backgroundImage: "url(images/TLTM.png)" }}
                >
                    <div className={`${OrderCss.content} preview`}>
                        <HardCopy values={currentForm} />
                    </div>
                    <CheckoutPlans setPlanBill={setPlanBill} />
                </div>
            ) : (
                <CheckoutPlans setPlanBill={setPlanBill} />
            )}
            <OrderSummaryGen planBill={planBill} />
            <div
                className={OrderCss.price}
                style={{ borderBottom: "2px dashed black" }}
            >
                <p className={OrderCss.p}>Tax</p>
                <p className={OrderCss.p}>${tax}</p>
            </div>
            <div className={OrderCss.price}>
                <p className={OrderCss.p} style={{ fontWeight: "bold" }}>
                    Total
                </p>
                <p
                    className={OrderCss.p}
                    style={{ fontWeight: "bold", color: "#7854F7" }}
                >
                    ${totalValue}
                </p>
            </div>
        </div>
    );
};

export default withRouter(OrderSummary);
