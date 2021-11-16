import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { Spinner } from '../../components/Spinner/Spinner'
import { clearForm, gettingFormStart } from '../../redux/data/data.action'
import { currentFormSelector } from '../../redux/data/data.selector'
import Questionaires from './Questionaires'
const PreQuestionaires = () => {
  const currentForm = useSelector((state) => currentFormSelector(state))
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const formId = location.search ? location.search.split('=')[1] : null

  useEffect(() => {
    if (currentForm && currentForm.id == formId) {
      console.log('Same form')
    } else {
      if (formId) {
        console.log(formId)
        dispatch(clearForm())
        dispatch(gettingFormStart(formId))
      } else {
        history.push('/')
      }
    }
  }, [])
  return (
    <div>
      {currentForm ? <Questionaires formSelector={currentForm} /> : <Spinner />}
    </div>
  )
}

export default PreQuestionaires
