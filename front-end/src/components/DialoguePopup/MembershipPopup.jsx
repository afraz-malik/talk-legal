import React from "react";
import DialoguePopupCss from "./DialoguePopup.module.scss";
const MembershipPopup = ({ handleMemberShip, membership }) => {
    return (
        <div className={DialoguePopupCss.content}>
            <img alt="" src="images/Group 1000001876.svg" />
            <h3>
                Are you sure you want to change your membership from{" "}
                {membership.current.title} to “{membership.next.title}”?
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
