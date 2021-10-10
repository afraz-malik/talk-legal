import React from "react";
import DialoguePopupCss from "./DialoguePopup.module.scss";

const DialoguePopup = ({ title, children, closePopup }) => {
    return (
        <div className={DialoguePopupCss.box}>
            {title ? <h5>{title}</h5> : null}
            <img
                alt=""
                src="images/x.svg"
                className={DialoguePopupCss.close}
                onClick={() => closePopup()}
            />
            {children}
        </div>
    );
};

export default DialoguePopup;
