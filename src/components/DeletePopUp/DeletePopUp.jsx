import React from 'react'
import DeletePopUpCss from './DeletePopUp.module.scss'
const DeletePopUp = ({ setstate }) => {
  return (
    <div className={DeletePopUpCss.box}>
      <img alt="" src="images/Group 1000001849.svg" />
      <h3>You’re about to delete your document “Document title”!</h3>
      <p>
        All your document will be permenently removed and you won't be able to
        see them again, including the ones you've shared with your friends.
      </p>
      <div className={DeletePopUpCss.buttons}>
        <button onClick={() => setstate(false)}>Cancel</button>
        <button onClick={() => setstate(false)}>Yes Delete it</button>
      </div>
    </div>
  )
}

export default DeletePopUp
