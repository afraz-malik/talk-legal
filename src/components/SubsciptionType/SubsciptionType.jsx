import React from 'react'
import DialoguePopup from '../DialoguePopup/DialoguePopup'
import ManageAdOns from '../DialoguePopup/ManageAdOns'
import MembershipPopup from '../DialoguePopup/MembershipPopup'
import PaymentPlanCards from '../PaymentPlanCards/PaymentPlanCards'
import Preview from '../Preview/Preview'
import SubTypeCss from './SubsciptionType.module.scss'
const SubsciptionType = () => {
  const [state, setstate] = React.useState(false)
  const [manageAdons, setmanageAdons] = React.useState(false)
  const [membership, setmembership] = React.useState({
    current: 'gold',
    next: null,
  })
  const handleSubmit = (val) => {
    setmembership({ ...membership, next: val })
  }
  const handleMemberShip = () => {
    setstate(false)
    setmembership({ current: membership.next, next: null })
  }
  return (
    <div className={SubTypeCss.container}>
      <div className={SubTypeCss.subscription}>
        <div className={SubTypeCss.membership}>
          <div className={SubTypeCss.top}>
            <h1>{membership.current} Membership</h1>
            <div className={SubTypeCss.right}>
              <h3>$200/</h3>
              <p>Membership</p>
            </div>
          </div>
          <div className={SubTypeCss.bottom}>
            <div className={SubTypeCss.left}>
              <p>5 out of 8 Documents </p>
              <div className={SubTypeCss.progress}>
                <div className={SubTypeCss.total}></div>
              </div>
            </div>
            <div className={SubTypeCss.button}>
              <button onClick={() => setstate(true)}>Change Membership</button>
            </div>
          </div>
        </div>
        <div className={SubTypeCss.date}>
          <div>
            {' '}
            <p>Next Payment</p>
            <h1>on November 30, 2020</h1>
          </div>
          <div className={SubTypeCss.button}>
            <button onClick={() => setmanageAdons(true)}>Manage Adons</button>
          </div>
        </div>
      </div>
      <div className={SubTypeCss.invoices}>
        <p>Invoices(12) </p>
        {[...Array(12)].map((arr) => (
          <div className={SubTypeCss.box}>
            <div className={SubTypeCss.left}>
              <img alt="" src="images/Group 1000001813.svg" />
              <h5>Invoice_2021/May.pdf</h5>
            </div>
            <div className={SubTypeCss.center}>
              <p>
                Date of invoice -<span> October 31, 2017</span>
              </p>
            </div>
            <img alt="" src="images/rounddots.svg" />
          </div>
        ))}
      </div>
      {state ? (
        <Preview position="fixed">
          {!membership.next ? (
            <DialoguePopup setstate={setstate} title="Change Membership">
              <PaymentPlanCards handleSubmit={handleSubmit} />
            </DialoguePopup>
          ) : (
            <DialoguePopup setstate={setstate} title="Change Membership">
              <MembershipPopup handleMemberShip={handleMemberShip} />
            </DialoguePopup>
          )}
        </Preview>
      ) : null}
      {manageAdons ? (
        <Preview position="fixed">
          <DialoguePopup setstate={setmanageAdons} title="Manage Addons">
            <ManageAdOns setmanageAdons={setmanageAdons} />
          </DialoguePopup>
        </Preview>
      ) : null}
    </div>
  )
}

export default SubsciptionType
