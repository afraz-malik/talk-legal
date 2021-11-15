import React from 'react'
import { useSelector } from 'react-redux'
import { currentUserSelector } from '../../redux/user/user.selector'
import DashboardCard from '../DashboardCard/DashboardCard'
import FilesDocsCss from './FilesDocs.module.scss'
const FilesDocs = () => {
  const currentUser = useSelector((state) => currentUserSelector(state))
  return (
    <div className={FilesDocsCss.cards}>
      {currentUser.user_legal_form.length < 1 ? (
        <span>You don't have any forms yet ! </span>
      ) : null}
      {currentUser.user_legal_form
        .filter((form) => form.status === '1')
        .map((form, idx) => (
          <DashboardCard key={idx} idx={idx} type={form.status} form={form} />
        ))}
    </div>
  )
}

export default FilesDocs
