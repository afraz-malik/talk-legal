import React, { useState } from 'react'
import COrdersCss from './CompleteOrders.module.scss'
import Preview from '../Preview/Preview'
import DeletePopUp from '../DialoguePopup/DeletePopUp'
import DialoguePopup from '../DialoguePopup/DialoguePopup'
import { InsideSpinner } from '../Spinner/Spinner'
import moment from 'moment'
const CompleteOrders = ({ userLegalForms, loading }) => {
  const [popup, setpopup] = React.useState(false)
  const [search, setsearch] = useState('')
  const closePopup = () => {
    setpopup(false)
  }
  const refinedForms = userLegalForms.filter((form) =>
    form.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={COrdersCss.container}>
      {loading ? (
        <InsideSpinner />
      ) : (
        <>
          <div className={COrdersCss.topbar}>
            <div className={COrdersCss.search}>
              <input
                type="text"
                placeholder="Search Here..."
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <img alt="" src="images/Group 18.svg" />
            </div>
            <img alt="" src="images/Button.svg" />
            <img alt="" src="images/icon.svg" />
          </div>
          <div className={COrdersCss.table}>
            <table>
              <thead>
                <tr>
                  <td>Document Type</td>
                  <td>Date</td>
                  <td>Time Left</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {refinedForms
                  .filter((form) => form.status === '2')
                  .map((form, idx) => {
                    console.log(form)
                    return (
                      <tr key={idx}>
                        <td>{form.title}</td>
                        <td>
                          {' '}
                          {moment(form.payment_date).format('MMM Do, YYYY')}
                        </td>
                        <td>
                          <span>
                            <i className="fal fa-clock"></i> 18 Days left
                          </span>
                        </td>
                        <td>
                          <img alt="" src="images/Inbox - In.svg" />
                          <img alt="" src="images/Edit.svg" />
                          <img
                            alt=""
                            src="images/Trash.svg"
                            onClick={() => setpopup(true)}
                          />
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
          <div className={COrdersCss.pages}>
            <div className={COrdersCss.back}>&lt;</div>
            {[...Array(5)].map((i, j) => {
              return <NumberGen key={j} counter={j + 1} pageNumber={2} />
            })}
            <div className={COrdersCss.front}>&gt;</div>
          </div>
        </>
      )}
      {popup ? (
        <Preview position="fixed">
          <DialoguePopup>
            <DeletePopUp closePopup={closePopup} />
          </DialoguePopup>
        </Preview>
      ) : null}
    </div>
  )
}

const NumberGen = ({ counter, pageNumber }) => {
  return (
    <div
      className={COrdersCss.numbers}
      style={
        counter === pageNumber
          ? { border: '2px solid #4200FF', color: '#4200FF' }
          : null
      }
    >
      {counter}
    </div>
  )
}
export default CompleteOrders
