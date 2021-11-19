import React from "react";
import DialoguePopupCss from "./DialoguePopup.module.scss";
const DeletePopUp = ({ closePopup }) => {
    return (
        <div className={DialoguePopupCss.content}>
            <img alt="" src="images/Group 1000001849.svg" />
            <h3>You’re about to delete your document “Document title”!</h3>
            <p>
                All your document will be permenently removed and you won't be
                able to see them again, including the ones you've shared with
                your friends.
            </p>
            <div className={DialoguePopupCss.buttons}>
                <button onClick={() => closePopup()}>Cancel</button>
                <button onClick={() => closePopup()}>Yes Delete it</button>
            </div>
        </div>
    );
};

export default DeletePopUp;
