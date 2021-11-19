import React from "react";

import DialoguePopup from "../DialoguePopup/DialoguePopup";
import MembershipPopup from "../DialoguePopup/MembershipPopup";
import PaymentPlanCards from "../PaymentPlanCards/PaymentPlanCards";
import Preview from "../Preview/Preview";

const UpdatePlans = ({ closePopup }) => {
    const [nextMembership, setmembership] = React.useState(null);
    // const [adons, setAdons] = React.useState(null);
    const handleSubmit = (plan) => {
        setmembership(plan);
    };
    return (
        <Preview position="fixed">
            {!nextMembership ? (
                <DialoguePopup
                    title="Change Membership"
                    closePopup={closePopup}
                    close={true}
                >
                    <PaymentPlanCards handleSubmit={handleSubmit} />
                </DialoguePopup>
            ) : (
                <DialoguePopup title="Change Membership">
                    <MembershipPopup
                        nextMembership={nextMembership}
                        closePopup={closePopup}
                    />
                </DialoguePopup>
            )}
        </Preview>
    );
};

export default UpdatePlans;
