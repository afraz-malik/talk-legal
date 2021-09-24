import React from 'react'
import DialoguePopupCss from './DialoguePopup.module.scss'
const MembershipPopup = ({ handleMemberShip }) => {
  return (
    <div className={DialoguePopupCss.box}>
      <img alt="" src="images/Group 1000001876.svg" />
      <h3>
        Are you sure you want to change your membership from gold to “Silver”?
      </h3>
      <p>
        The bodhi tree, according to the Buddhists, is the tree beneath which
        one finds enlightenment. That is not exactly how it works with Bodhi.
      </p>
      <div className={DialoguePopupCss.buttons}>
        <button onClick={() => handleMemberShip()}>Cancel</button>
        <button onClick={() => handleMemberShip()}>Change Membershipt</button>
      </div>
    </div>
  )
}

export default MembershipPopup
