import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchDbGet } from '../../backend/backend'

import {
  currentUserSelector,
  tokenSelector,
} from '../../redux/user/user.selector'
import AddCard from '../DialoguePopup/AddCard'
import DialoguePopup from '../DialoguePopup/DialoguePopup'
import EditProfile from '../DialoguePopup/EditProfile'
import Preview from '../Preview/Preview'
import AccountSettingsCss from './AccountSettings.module.scss'
import ChangePassword from './ChangePassword'
// import Cards from './Cards'
const AccountSettings = () => {
  const currentUser = useSelector((state) => currentUserSelector(state))
  // const token = useSelector((state) => tokenSelector(state))
  const [state, setstate] = useState({
    activeCard: 'gold',
    user: currentUser,
  })
  // const [userCards, setuserCards] = useState([])
  const [popup, setpopup] = React.useState({
    editProfile: false,
    editCard: false,
  })
  // useEffect(() => {
  //   setstate({ ...state, user: currentUser })
  // }, [currentUser])
  // useEffect(() => {
  //   fetchDbGet(`api/user/cards`, token).then((response) => {
  //     if (response.response == 200) {
  //       setuserCards(response.data)
  //     }
  //   })
  // }, [])
  const closePopup = () => {
    setpopup({ editCard: false, editProfile: false })
  }
  return (
    <div className={AccountSettingsCss.container}>
      <div className={AccountSettingsCss.top}>
        <h4>Profile Setting</h4>
        <h5 onClick={() => setpopup({ editCard: false, editProfile: true })}>
          Edit Account ›
        </h5>
      </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
      <form>
        <div className={AccountSettingsCss.row}>
          <div className={AccountSettingsCss.col}>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              value={state.user.name}
              disabled
            />
          </div>
          <div className={AccountSettingsCss.col}>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              value={state.user.last_name}
              disabled
            />
          </div>
          <div className={AccountSettingsCss.col}>
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={state.user.phone}
              disabled
            />
          </div>
          <div className={AccountSettingsCss.col}>
            <label>Email </label>
            <input
              type="text"
              placeholder="Email"
              value={state.user.email}
              disabled
            />
          </div>
        </div>
      </form>
      <hr />
      <ChangePassword />
      <hr />
      <div className={AccountSettingsCss.top}>
        <h4>Payment Setting</h4>
        <h5 onClick={() => setpopup({ ...popup, editCard: true })}>
          Add Card ›{' '}
        </h5>
      </div>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do.</p>
      <div className={AccountSettingsCss.ad_ons}>
        <div className={AccountSettingsCss.ad_on}>
          {currentUser.cards.map((card) => (
            <div
              className={`${AccountSettingsCss.card} ${
                card.is_active === '1' ? AccountSettingsCss.activeCard : null
              }`}
              onClick={() => setstate({ ...state, plans: 'silver' })}
            >
              <label className={AccountSettingsCss.container2}>
                <input
                  type="radio"
                  name="plans"
                  value="silver"
                  checked={card.is_active === '1'}
                  // onChange={(e) =>
                  // setstate({ ...state, plans: e.target.value })
                  // }
                />
                <span className={AccountSettingsCss.checkmark}></span>
              </label>
              <div className={AccountSettingsCss.top}>
                <h2>
                  {/* 4756 &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
                  3847 */}
                  {card.card_number.substring(0, 4)}{' '}
                  &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;{' '}
                  {card.card_number.substring(card.card_number.length - 4)}
                </h2>
                <img alt="" src="images/path3789.svg" />
              </div>
            </div>
          ))}
          {/* <div
            className={`${AccountSettingsCss.card} ${
              state.plans === 'gold' ? AccountSettingsCss.activeCard : null
            }`}
            onClick={() => setstate({ ...state, plans: 'gold' })}
          >
            <label className={AccountSettingsCss.container2}>
              <input
                type="radio"
                name="plans"
                value="gold"
                checked={state.plans === 'gold'}
                onChange={(e) => setstate({ ...state, plans: e.target.value })}
              />
              <span className={AccountSettingsCss.checkmark}></span>
            </label>
            <div className={AccountSettingsCss.top}>
              <h2>
                4756 &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
                3847
              </h2>
              <img alt="" src="images/Group 1000001865.svg" />
            </div>
          </div> */}
        </div>
      </div>
      {popup.editProfile ? (
        <Preview>
          <DialoguePopup title={'Edit Your Profile'} closePopup={closePopup}>
            <EditProfile
              popup={popup}
              closePopup={closePopup}
              user={state.user}
            />
          </DialoguePopup>
        </Preview>
      ) : null}
      {popup.editCard ? (
        <Preview>
          <DialoguePopup title={'Add Card'} closePopup={closePopup}>
            <AddCard closePopup={closePopup} />
          </DialoguePopup>
        </Preview>
      ) : null}
    </div>
  )
}

export default AccountSettings
