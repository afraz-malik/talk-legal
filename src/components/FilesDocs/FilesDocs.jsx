import React from 'react'
import DashboardCard from '../DashboardCard/DashboardCard'
import FilesDocsCss from './FilesDocs.module.scss'
const FilesDocs = () => {
  return (
    <div className={FilesDocsCss.cards}>
      {[...Array(5)].map((el, idx) => (
        <DashboardCard key={idx} idx={idx} type={1} title="Completed" />
      ))}
    </div>
  )
}

export default FilesDocs
