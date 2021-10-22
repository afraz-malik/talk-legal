import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribePlanStart } from "../../redux/user/user.action";
import { currentUserSelector } from "../../redux/user/user.selector";
import DialoguePopupCss from "./DialoguePopup.module.scss";
const MembershipPopup = ({ nextMembership, closePopup }) => {
    const currentUser = useSelector((state) => currentUserSelector(state));
    const dispatch = useDispatch();
    const handleMemberShip = (val) => {
        if (val === true && nextMembership != null) {
            closePopup();
            dispatch(subscribePlanStart({ pid: nextMembership.id }));
        } else {
            closePopup();
        }
    };
    return (
        <div className={DialoguePopupCss.content}>
            <img alt="" src="images/Group 1000001876.svg" />
            <h3>
                Are you sure you want to change your membership from{" "}
                {currentUser.subscription_plan.title} to “{nextMembership.title}
                ”?
            </h3>
            <p>
                The bodhi tree, according to the Buddhists, is the tree beneath
                which one finds enlightenment. That is not exactly how it works
                with Bodhi.
            </p>
            <div className={DialoguePopupCss.buttons}>
                <button onClick={() => handleMemberShip(false)}>Cancel</button>
                <button onClick={() => handleMemberShip(true)}>
                    Change Membership
                </button>
            </div>
        </div>
    );
};

export default MembershipPopup;
