import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { currentUserSelector } from '../../redux/user/user.selector'
import AddCard from '../DialoguePopup/AddCard'
import DialoguePopup from '../DialoguePopup/DialoguePopup'
import EditProfile from '../DialoguePopup/EditProfile'
import Preview from '../Preview/Preview'
import AccountSettingsCss from './AccountSettings.module.scss'
import ChangePassword from './ChangePassword'
const AccountSettings = () => {
  const currentUser = useSelector((state) => currentUserSelector(state))
  console.log(currentUser)
  useEffect(() => {
    setstate({ ...state, user: currentUser })
  }, [currentUser])
  const [state, setstate] = React.useState({
    activeCard: 'gold',
    user: currentUser,
  })

  const [popup, setpopup] = React.useState({
    editProfile: false,
    editCard: false,
  })
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
        </div>
      </form>
      <hr />
      {console.log(state)}
      <ChangePassword />
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
