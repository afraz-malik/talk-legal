import React from 'react'
import { useHistory } from 'react-router-dom'
import DashboardCardCss from './DashboardCard.module.scss'
const DashboardCard = ({ idx, type, title, form }) => {
  const history = useHistory()

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
          onClick={() => history.push('/plans?cart=form')}
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
