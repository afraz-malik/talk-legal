import React from 'react'
import COrdersCss from './CompleteOrders.module.scss'
import Preview from '../Preview/Preview'
import DeletePopUp from '../DialoguePopup/DeletePopUp'
import DialoguePopup from '../DialoguePopup/DialoguePopup'
const CompleteOrders = () => {
  const [popup, setpopup] = React.useState(false)
  const closePopup = () => {
    setpopup(false)
  }
  return (
    <div className={COrdersCss.container}>
      <div className={COrdersCss.topbar}>
        <div className={COrdersCss.search}>
          <input type="text" placeholder="Search Here..." />
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
            {[...Array(5)].map((el, idx) => (
              <tr key={idx}>
                <td> NDA - unilateral (investor)</td>
                <td> October 31, 2017</td>
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
            ))}
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
