import React, { useEffect, useState } from 'react'
import Logo from '../NavBar/Logo'
import PDCss from './PaymentDetails.module.scss'

import { countryList } from '../../countryList'
import {
  clearError,
  paymentStart,
  refreshingUser,
  subscribePlanStart,
} from '../../redux/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentUserSelector,
  successSelector,
} from '../../redux/user/user.selector'
import { Spinner } from '../Spinner/Spinner'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { clearingCart } from '../../redux/data/data.action'
import { cartSelector } from '../../redux/data/data.selector'
import { fetchDbGet, fetchDbPost } from '../../backend/backend'
import CreditCards from './CreditCards'
const initialState = {
  first_name: '',
  last_name: '',
  address: '',
  zip_code: '',
  state: '',
  country: '',
  phone: '',
  card_number: '',
  card_holder_name: '',
  expiry: '',
  cvv: '',
  saveCard: true,
}
const PaymentDetails = ({ checkout }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const cart = useSelector((state) => cartSelector(state))
  const token = useSelector((state) => state.userReducer.token)
  const success = useSelector((state) => successSelector(state))
  const currentUser = useSelector((state) => currentUserSelector(state))
  const [state, setstate] = React.useState(initialState)
  const [toggle, settoggle] = React.useState(false)
  const [loading, setloading] = useState(false)
  useEffect(() => {
    window.addEventListener('mouseup', clickEvent)
    if (success) {
      dispatch(clearError())
      setstate(initialState)
      // history.push("/dashboard");
    }
    return () => {
      setstate(initialState)
      window.removeEventListener('mouseup', clickEvent)
      dispatch(clearError())
    }
    // eslint-disable-next-line
  }, [success])
  // useEffect(() => {
  //   fetchDbGet(`api/user/cards`, token).then((response) => {
  //     if (response.response == 200 && response.data.length > 0) {
  //       setstate({
  //         ...state,
  //         card_holder_name: response.data[0].card_holder_name,
  //         card_number: response.data[0].card_number,
  //       })
  //     }
  //   })
  // }, [])
  const clickEvent = (e) => {
    var container = document.getElementById('dd_content')
    if (!container.contains(e.target)) {
      settoggle(false)
    }
  }
  const handleChange = (event) => {
    if (
      event.target.name === 'card_number' ||
      event.target.name === 'cvv' ||
      event.target.name === 'phone'
    ) {
      event.target.value = event.target.value.replace(/[^\dA-Z]/g, '').trim()
    }
    if (event.target.name === 'card_number') {
      event.target.value = event.target.value.replace(/(.{4})/g, '$1 ').trim()
    }
    setstate({ ...state, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!state.country) {
      toast.dismiss()
      toast.error('Select your country')
    } else {
      console.log(checkout)
      if (checkout.form || checkout.plan) {
        try {
          const payload = {
            ...state,
            cvv: parseInt(state.cvv),
            card_number: parseInt(state.card_number.replace(/\s/g, '')),
            amount: checkout.totalValue,
            expiry_year: parseInt(state.expiry.split('-')[0]),
            expiry_month: parseInt(state.expiry.split('-')[1]),

            payment_type: checkout.plan ? 2 : 1,

            user_legal_form_id: checkout.form ? cart.form.id : null,
            plan_amount: checkout.plan
              ? parseInt(checkout.plan.membership_cost)
              : null,
            plan_id: checkout.plan ? checkout.plan.id : null,
          }
          setloading(true)
          let response
          if (
            currentUser.subscription_plan &&
            checkout.plan.id < currentUser.subscription_plan.id
          ) {
            response = await fetchDbGet(
              `api/user/downgrade-subscription/${checkout.plan.id}`,
              token
            )
            // if(response.status)
          } else {
            response = await fetchDbPost(
              `api/user/plan-payment`,
              token,
              payload
            )
          }
          if (response.status) {
            await fetchDbGet(`api/user/data`, token).then(({ user }) => {
              if (user) {
                dispatch(refreshingUser())
                setloading(false)
                dispatch(clearingCart())
                toast.dismiss()
                toast.success(response.message)
                // if (checkout.form && !checkout.plan)
                //   toast.dismiss();toast.success('Form Completed Successfully')
                history.push('/dashboard')
              }
            })
          } else {
            throw new Error(response.message)
          }
        } catch (error) {
          setloading(false)
          toast.dismiss()
          toast.error(error.message)
          // console.log(error.message)
        }
        // )
      } else {
        toast.dismiss()
        toast.error('Cart is Empty')
      }
      //   toast.dismiss();toast.success('Payment Success !')
      //   history.push('/dashboard')
      //   dispatch(clearingCart())
    }
  }
  return (
    <div className={PDCss.container}>
      <div className={PDCss.logo}>
        <Logo />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Payment Details</h1>
        <p>Complete your purchase by providing your payment details.</p>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              required
              name="first_name"
              value={state.first_name}
              onChange={handleChange}
            />
          </div>
          <div className={PDCss.col}>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              required
              name="last_name"
              value={state.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>Address</label>
            <input
              type="text"
              placeholder="Type Your Address"
              required
              name="address"
              value={state.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={`${PDCss.col} ${PDCss.group}`}>
            <label>Billing Address</label>
            <div className={PDCss.dropdownbox}>
              <div
                className={PDCss.dropdown}
                onClick={() => settoggle(!toggle)}
              >
                <h3>{state.country ? state.country : 'Select Your Country'}</h3>
                <img alt="" src="images/downarrow.png" />
              </div>
              <div
                className={PDCss.dd_content}
                id="dd_content"
                style={toggle ? { display: 'block' } : { display: 'none' }}
              >
                <ul>
                  {countryList.map((country, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setstate({ ...state, country })
                        settoggle(false)
                      }}
                      className={
                        state.country === country ? PDCss.active : null
                      }
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={PDCss.insiderow}>
              <input
                type="text"
                placeholder="Zip"
                className={PDCss.zip}
                required
                name="zip_code"
                value={state.zip_code}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="State"
                className={PDCss.state}
                required
                name="state"
                value={state.state}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>Phone Number</label>
            <input
              type="phone"
              pattern="[0-9]{8,15}"
              placeholder="Enter Phone Number"
              required
              name="phone"
              value={state.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={`${PDCss.col} ${PDCss.carddetails}`}>
            <img alt="" src="images/card_icon.png" />
            <label>Card Number</label>
            <input
              id="cardnumber"
              type="tel"
              inputmode="numeric"
              autoComplete="cc-number"
              pattern="[0-9\s]{19}"
              maxLength="19"
              placeholder="xxxx xxxx xxxx xxxx"
              required
              name="card_number"
              value={state.card_number}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>Card Holder Name</label>
            <input
              type="text"
              placeholder="Enter Card holder Name"
              required
              name="card_holder_name"
              value={state.card_holder_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={PDCss.row}>
          <div className={PDCss.col}>
            <label>Expiry Date</label>
            <input
              type="month"
              placeholder="MM/YY"
              required
              name="expiry"
              value={state.expiry}
              onChange={handleChange}
            />
          </div>
          <div className={PDCss.col}>
            <label>CVV</label>
            <input
              type="tel"
              inputmode="numeric"
              autoComplete="cc-number"
              pattern="[0-9\s]{3}"
              maxLength="3"
              id="cardnumber"
              placeholder="Enter CVV"
              required
              name="cvv"
              value={state.cvv}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`${PDCss.row} ${PDCss.cardsave}`}>
          <input type="checkbox" id="cardsave" checked={state.saveCard} />
          <label htmlFor="cardsave">
            Save this card for future transactions
          </label>
        </div>
        <div className={PDCss.row}>
          <input
            type="submit"
            value={`Pay $${checkout ? checkout.totalValue : 0}`}
          />
        </div>
        <CreditCards />
      </form>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default PaymentDetails
