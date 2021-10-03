import React from 'react'
import DialoguePopupCss from './DialoguePopup.module.scss'
const EditProfile = ({ setpopup }) => {
  return (
    <div className={DialoguePopupCss.edit}>
      <form className={DialoguePopupCss.form}>
        <label>First name</label>
        <input type="text" placeholder="Enter First Name" />
        <label>Last name</label>
        <input type="text" placeholder="Enter Last Name" />
        <label>Phone Number</label>
        <input type="text" placeholder="Enter Phone Number" />
      </form>
      <div className={DialoguePopupCss.greenButtons}>
        <button
          onClick={() => setpopup({ editCard: false, editProfile: false })}
        >
          Cancel
        </button>
        <button
          onClick={() => setpopup({ editCard: false, editProfile: false })}
        >
          Save Changed
        </button>
      </div>
    </div>
  )
}

export default EditProfile
