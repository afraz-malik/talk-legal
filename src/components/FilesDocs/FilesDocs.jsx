import React from 'react'
import DashboardCard from '../DashboardCard/DashboardCard'
import { InsideSpinner } from '../Spinner/Spinner'
import FilesDocsCss from './FilesDocs.module.scss'
const FilesDocs = ({ userLegalForms, loading }) => {
  return (
    <div className={FilesDocsCss.cards}>
      {loading ? (
        <InsideSpinner />
      ) : (
        <>
          {userLegalForms.length < 1 ? (
            <span>You don't have any forms yet ! </span>
          ) : null}
          {userLegalForms
            .filter((form) => form.status === '1')
            .map((form, idx) => (
              <DashboardCard
                key={idx}
                idx={idx}
                type={form.status}
                form={form}
              />
            ))}
        </>
      )}
    </div>
  )
}

export default FilesDocs
