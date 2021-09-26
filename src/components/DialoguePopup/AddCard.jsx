import React from 'react'
import DialoguePopupCss from './DialoguePopup.module.scss'
const AddCard = ({ setpopup }) => {
  return (
    <div className={DialoguePopupCss.edit}>
      <form className={DialoguePopupCss.form}>
        <label>Card Number</label>
        <input type="text" placeholder="Enter Card Number" />
        <label>Card Holder Name</label>
        <input type="text" placeholder="Enter Card Holder Name" />
        <label>Expiry Date</label>
        <input type="text" placeholder="Enter Expiry Date" />
        <label>CVV</label>
        <input type="text" placeholder="Enter CVV" />
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
          Add Card
        </button>
      </div>
    </div>
  )
}

export default AddCard
