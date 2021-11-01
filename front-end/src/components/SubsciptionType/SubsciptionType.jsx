import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LoadingSelector } from "../../redux/user/user.selector";
import DialoguePopup from "../DialoguePopup/DialoguePopup";
import ManageAdOns from "../DialoguePopup/ManageAdOns";

import Preview from "../Preview/Preview";
import { Spinner } from "../Spinner/Spinner";
import UpdatePlans from "../UpdatePlans/UpdatePlans";
import SubTypeCss from "./SubsciptionType.module.scss";

const SubsciptionType = ({ subscription_plan }) => {
    const loading = useSelector((state) => LoadingSelector(state));
    useEffect(() => {
        return () => {};
        // eslint-disable-next-line
    }, [subscription_plan]);
    const [popup, setpopup] = React.useState({ adons: false, plans: false });
    const closePopup = () => {
        setpopup({ adons: false, plans: false });
    };
    return (
        <div className={SubTypeCss.container}>
            <div className={SubTypeCss.subscription}>
                <div className={SubTypeCss.membership}>
                    <div className={SubTypeCss.top}>
                        <h1>{subscription_plan.title} Membership</h1>
                        <div className={SubTypeCss.right}>
                            <h3>${subscription_plan.membership_cost}/</h3>
                            <p>Membership</p>
                        </div>
                    </div>
                    <div className={SubTypeCss.bottom}>
                        {subscription_plan.no_of_documents > 0 ? (
                            <div className={SubTypeCss.left}>
                                <p>
                                    3 out of {subscription_plan.no_of_documents}
                                    Documents
                                </p>
                                <div className={SubTypeCss.progress}>
                                    <div className={SubTypeCss.total}></div>
                                </div>
                            </div>
                        ) : null}
                        <div className={SubTypeCss.button}>
                            <button
                                onClick={() =>
                                    setpopup({ ...popup, plans: true })
                                }
                            >
                                Change Membership
                            </button>
                        </div>
                    </div>
                </div>
                <div className={SubTypeCss.date}>
                    <div>
                        <p>Next Payment</p>
                        <h1>on November 30, 2020</h1>
                    </div>
                    <div className={SubTypeCss.button}>
                        <button
                            onClick={() => setpopup({ ...popup, adons: true })}
                        >
                            Manage Add-Ons
                        </button>
                    </div>
                </div>
            </div>

            <div className={SubTypeCss.invoices}>
                <p>Invoices(12) </p>
                {[...Array(12)].map((arr, idx) => (
                    <div className={SubTypeCss.box} key={idx}>
                        <div className={SubTypeCss.left}>
                            <img alt="" src="images/Group 1000001813.svg" />
                            <h5>
                                Invoice_2021/May.pdf <br />
                                <p>
                                    Date of invoice -
                                    <span> October 31, 2017</span>
                                </p>
                            </h5>
                        </div>
                        <div className={SubTypeCss.center}>
                            <p>
                                Date of invoice -<span> October 31, 2017</span>
                            </p>
                        </div>
                        <img alt="" src="images/rounddots.svg" />
                    </div>
                ))}
            </div>
            {popup.plans ? <UpdatePlans closePopup={closePopup} /> : null}
            {popup.adons ? (
                <Preview position="fixed">
                    <DialoguePopup title="Manage Add-Ons">
                        <ManageAdOns closePopup={closePopup} />
                    </DialoguePopup>
                </Preview>
            ) : null}
            {loading ? <Spinner /> : null}
        </div>
    );
};

export default SubsciptionType;
