import React from 'react'
import Pdcss from './PaymentDetails.module.scss'
const CreditCards = ({ userCard }) => {
  return (
    <div className={Pdcss.cccontainer}>
      {/* <h2>Select Your Cards</h2> */}
      <div className={Pdcss.creditcards}>
        <div className={Pdcss.creditcard}>
          <div className={Pdcss.ccdata}>
            {/* <span className={Pdcss.ccname_title}>Card Holder Name</span> */}
            <span className={Pdcss.ccname}>{userCard.card_holder_name}</span>
            <img
              alt=""
              src="images/Group 1000001899.svg"
              className={true ? Pdcss.active : null}
            />
            <span className={Pdcss.ccnumber}>
              {userCard.card_number.substring(0, 4)}{' '}
              &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;{' '}
              {userCard.card_number.substring(userCard.card_number.length - 4)}
            </span>
            <span className={Pdcss.ccexp}>09/25</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCards
