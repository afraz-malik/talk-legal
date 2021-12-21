import moment from 'moment'
import React from 'react'
import SubTypeCss from './SubsciptionType.module.scss'

const SubscriptionDetails = ({
  subscription_plan,
  currentUser,
  setpopup,
  popup,
}) => {
  return (
    <div className={SubTypeCss.subscription}>
      <div className={SubTypeCss.membership}>
        <div className={SubTypeCss.top}>
          <h1>{subscription_plan.title} Membership</h1>
          <div className={SubTypeCss.right}>
            <h3>${subscription_plan.membership_cost}/</h3>
            <p>Membership</p>
          </div>
        </div>
        {currentUser.next_subscription_id != currentUser.subscription_plan.id &&
        currentUser.next_subscription_id != 0 ? (
          <span>* Your New Subscription will affect on next billing date</span>
        ) : currentUser.next_subscription_id == 0 ? (
          <span>
            * Your subscription will be cancelled at the end of this month
          </span>
        ) : null}
        <div className={SubTypeCss.bottom}>
          {subscription_plan.no_of_documents > 0 ? (
            <div className={SubTypeCss.left}>
              <p>
                {subscription_plan.no_of_documents - currentUser.forms_left} out
                of {subscription_plan.no_of_documents} Documents
              </p>
              <div className={SubTypeCss.progress}>
                <div
                  className={SubTypeCss.total}
                  style={{
                    width: `${
                      ((subscription_plan.no_of_documents -
                        currentUser.forms_left) /
                        subscription_plan.no_of_documents) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          ) : null}
          <div className={SubTypeCss.button}>
            <button onClick={() => setpopup({ ...popup, plans: true })}>
              {currentUser.next_subscription_id == 0
                ? 'Re Subscribe Membership'
                : 'Change Membership'}
            </button>
          </div>
        </div>
      </div>
      <div className={SubTypeCss.date}>
        <div>
          <p>Next Payment</p>
          <h1>
            on {moment(currentUser.subscription_date).format('MMM DD, YYYY')}
          </h1>
        </div>
        <div className={SubTypeCss.button}>
          {/* <button
                            onClick={() => setpopup({ ...popup, adons: true })}
                        >
                            Manage Add-Ons
                        </button> */}
        </div>
      </div>
    </div>
  )
}

export default SubscriptionDetails
