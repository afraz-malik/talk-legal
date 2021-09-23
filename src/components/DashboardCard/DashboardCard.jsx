import React from 'react'
import DashboardCardCss from './DashboardCard.module.scss'
const DashboardCard = ({ idx, type, title }) => {
  const tt = idx + 10 * 7 + '%'
  return (
    <div
      className={` ${DashboardCardCss.card} ${
        idx === 0 ? DashboardCardCss.active : null
      }`}
    >
      <div className={DashboardCardCss.topBar}></div>
      <div className={DashboardCardCss.title}>
        <h1>Photography Services Contract</h1>
        <img alt="" src="images/icon.svg" />
      </div>
      <p>
        Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend
        porttitor.
      </p>
      <span>{title}</span>
      <div
        className={DashboardCardCss.bar}
        style={type === 1 ? { width: '100%' } : { width: tt }}
      ></div>
      {type === 1 ? (
        <button className={DashboardCardCss.download}>
          <img alt="" src="images/arrow-down-circle.svg" />
          Download
        </button>
      ) : (
        <button className={DashboardCardCss.progress}>
          <img alt="" src="images/rightarrow.svg" />
          <img alt="" src="images/rightarrow.svg" />
          Complete
        </button>
      )}
    </div>
  )
}

export default DashboardCard
