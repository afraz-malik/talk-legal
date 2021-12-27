import React from 'react'
import PaymentDetailsCss from './PaymentDetails.module.scss'
const CreditCards = () => {
  return (
    <div className={PaymentDetailsCss.cccontainer}>
      <h2>Select Your Cards</h2>
      <div className={PaymentDetailsCss.creditcards}>
        <div className={PaymentDetailsCss.creditcard}>
          {/* <img alt="" src="images/Card 1.svg" /> */}
          <div className={PaymentDetailsCss.ccdata}>
            <span className={PaymentDetailsCss.ccnumber}>
              5282 3456 7890 1289
            </span>
            <span className={PaymentDetailsCss.ccexp}>09/25</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCards
