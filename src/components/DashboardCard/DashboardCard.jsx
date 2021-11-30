import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addingCartItem } from '../../redux/data/data.action'
import DashboardCardCss from './DashboardCard.module.scss'
const DashboardCard = ({ idx, type, title, form }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSubmit = (form) => {
    console.log(form)
    dispatch(addingCartItem(form))
    history.push('/plans?cart=form')
  }
  const tt = idx + 10 * 7 + '%'
  return (
    <div
      className={` ${DashboardCardCss.card} ${'hey'}`}
      // idx === 0 ? DashboardCardCss.active : null
    >
      <div className={DashboardCardCss.topBar}></div>
      <div className={DashboardCardCss.title}>
        <h2>{form.title}</h2>
        <img alt="" src="images/icon.svg" />
      </div>
      <p>
        Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend
        porttitor.
      </p>
      <span>{type === '1' ? 'Progress' : 'Complete'} </span>
      <div
        className={DashboardCardCss.bar}
        style={type === '1' ? { width: tt } : { width: '100%' }}
      ></div>
      {type === '2' ? (
        <button className={DashboardCardCss.download}>
          <img alt="" src="images/arrow-down-circle.svg" />
          Download
        </button>
      ) : (
        <button
          className={DashboardCardCss.progress}
          onClick={() => handleSubmit(form)}
        >
          <img alt="" src="images/rightarrow.svg" />
          <img alt="" src="images/rightarrow.svg" />
          Complete
        </button>
      )}
    </div>
  )
}

export default DashboardCard
