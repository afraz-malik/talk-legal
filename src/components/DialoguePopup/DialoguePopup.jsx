import React from 'react'
import DialoguePopupCss from './DialoguePopup.module.scss'

const DialoguePopup = ({ title, children, setstate }) => {
  return (
    <div className={DialoguePopupCss.box}>
      {title ? <h5>{title}</h5> : null}
      <img
        alt=""
        src="images/x.svg"
        className={DialoguePopupCss.close}
        onClick={() => setstate(false)}
      />
      {children}
    </div>
  )
}

export default DialoguePopup
