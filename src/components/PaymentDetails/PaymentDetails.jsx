import React from 'react'
import Logo from '../NavBar/Logo'
import PDCss from './PaymentDetails.module.scss'
const PaymentDetails = () => {
  return (
    <div className={PDCss.container}>
      <Logo />
      <form>
        <h1>Payment Details</h1>
        <p>Complete your purchase by providing your payment details.</p>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter First Name"
              defaultValue="Joh"
            />
          </div>
          <div className={PDCss.col}>
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="Enter Last Name" />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>Address</label>
            <input type="text" placeholder="Select Your Address" />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={`${PDCss.col} ${PDCss.group}`}>
            <label>Billing Address</label>
            <div className={PDCss.select}>
              <img alt="" src="images/downarrow.png" />
              <select>
                <option> Select your state</option>
                <option>Albama</option>
                <option>Alaska</option>
                <option></option>
              </select>
            </div>
            <div className={PDCss.insiderow}>
              <input type="text" placeholder="Zip" className={PDCss.zip} />
              <input type="text" placeholder="State" className={PDCss.state} />
            </div>
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>Phone Number</label>
            <input type="text" placeholder="Enter Phone Number" />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={`${PDCss.col} ${PDCss.carddetails}`}>
            <img alt="" src="images/card_icon.png" />
            <label>Card Details</label>
            <input type="text" placeholder="Enter Card Details" />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>Cardholder Name</label>
            <input type="text" placeholder="Enter Cardholder Name" />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>Expiry Date</label>
            <input type="text" name="first_name" placeholder="MM/YY" />
          </div>
          <div className={PDCss.col}>
            <label>CVV</label>
            <input type="text" name="last_name" placeholder="Enter CVV" />
          </div>
        </div>
        <div className={PDCss.row}>
          <input type="submit" value={'Pay $48.80'} />
        </div>
      </form>
    </div>
  )
}

export default PaymentDetails
