import React from "react";
import DialoguePopupCss from "./DialoguePopup.module.scss";

const DialoguePopup = ({ title, children, closePopup, close }) => {
    return (
        <div className={DialoguePopupCss.box}>
            {title ? <h5>{title}</h5> : null}
            {close ? (
                <img
                    alt=""
                    src="images/x.svg"
                    className={DialoguePopupCss.close}
                    onClick={() => closePopup()}
                />
            ) : null}
            {children}
        </div>
    );
};

export default DialoguePopup;
