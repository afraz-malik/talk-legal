import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { subscribePlanStart } from "../../redux/user/user.action";
import DialoguePopup from "../DialoguePopup/DialoguePopup";
import ManageAdOns from "../DialoguePopup/ManageAdOns";
import MembershipPopup from "../DialoguePopup/MembershipPopup";
import PaymentPlanCards from "../PaymentPlanCards/PaymentPlanCards";
import Preview from "../Preview/Preview";
import SubTypeCss from "./SubsciptionType.module.scss";

const SubsciptionType = ({ subscription_plan }) => {
    useEffect(() => {
        setmembership({
            ...membership,
            current: subscription_plan ? subscription_plan : null,
        });
        return () => {};
        // eslint-disable-next-line
    }, [subscription_plan]);
    const dispatch = useDispatch();
    const [state, setstate] = React.useState(false);
    const [manageAdons, setmanageAdons] = React.useState(false);
    const [membership, setmembership] = React.useState({
        current: subscription_plan ? subscription_plan : null,
        next: null,
    });
    const handleSubmit = (plan) => {
        setmembership({ ...membership, next: plan });
    };
    const handleMemberShip = (val) => {
        if (val === true && membership.next != null) {
            setstate(false);
            dispatch(subscribePlanStart({ pid: membership.next.id }));
            setmembership({ ...membership, next: null });
        } else {
            setstate(false);
            setmembership({ ...membership, next: null });
        }
    };
    return (
        <div className={SubTypeCss.container}>
            <div className={SubTypeCss.subscription}>
                <div className={SubTypeCss.membership}>
                    <div className={SubTypeCss.top}>
                        <h1>{membership.current.title} Membership</h1>
                        <div className={SubTypeCss.right}>
                            <h3>${membership.current.membership_cost}/</h3>
                            <p>Membership</p>
                        </div>
                    </div>
                    <div className={SubTypeCss.bottom}>
                        {membership.current.no_of_documents > 0 ? (
                            <div className={SubTypeCss.left}>
                                <p>
                                    3 out of{" "}
                                    {membership.current.no_of_documents}{" "}
                                    Documents
                                </p>
                                <div className={SubTypeCss.progress}>
                                    <div className={SubTypeCss.total}></div>
                                </div>
                            </div>
                        ) : null}
                        <div className={SubTypeCss.button}>
                            <button onClick={() => setstate(true)}>
                                Change Membership
                            </button>
                        </div>
                    </div>
                </div>
                <div className={SubTypeCss.date}>
                    <div>
                        {" "}
                        <p>Next Payment</p>
                        <h1>on November 30, 2020</h1>
                    </div>
                    <div className={SubTypeCss.button}>
                        <button onClick={() => setmanageAdons(true)}>
                            Manage Adons
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
                                Invoice_2021/May.pdf <br />{" "}
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
            {state ? (
                <Preview position="fixed">
                    {!membership.next ? (
                        <DialoguePopup
                            setstate={setstate}
                            title="Change Membership"
                        >
                            <PaymentPlanCards handleSubmit={handleSubmit} />
                        </DialoguePopup>
                    ) : (
                        <DialoguePopup
                            setstate={setstate}
                            title="Change Membership"
                        >
                            <MembershipPopup
                                membership={membership}
                                handleMemberShip={handleMemberShip}
                            />
                        </DialoguePopup>
                    )}
                </Preview>
            ) : null}
            {manageAdons ? (
                <Preview position="fixed">
                    <DialoguePopup
                        setstate={setmanageAdons}
                        title="Manage Addons"
                    >
                        <ManageAdOns setmanageAdons={setmanageAdons} />
                    </DialoguePopup>
                </Preview>
            ) : null}
        </div>
    );
};

export default SubsciptionType;
