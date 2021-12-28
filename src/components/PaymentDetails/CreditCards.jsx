import React from 'react'
import Pdcss from './PaymentDetails.module.scss'
const CreditCards = ({ userCards }) => {
  return (
    <div className={Pdcss.cccontainer}>
      {/* <h2>Select Your Cards</h2> */}
      <div className={Pdcss.creditcards}>
        <div className={Pdcss.creditcard}>
          <div className={Pdcss.ccdata}>
            {/* <span className={Pdcss.ccname_title}>Card Holder Name</span> */}
            <span className={Pdcss.ccname}>
              {userCards[0].card_holder_name}
            </span>
            <img
              alt=""
              src="images/Group 1000001899.svg"
              className={true ? Pdcss.active : null}
            />
            <span className={Pdcss.ccnumber}>
              {userCards[0].card_number.substring(0, 4)}{' '}
              &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;{' '}
              {userCards[0].card_number.substring(
                userCards[0].card_number.length - 4
              )}
            </span>
            <span className={Pdcss.ccexp}>09/25</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCards
