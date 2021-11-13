import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Spinner } from '../../components/Spinner/Spinner'
import { currentFormSelector } from '../../redux/data/data.selector'
import Questionaires from './Questionaires'
const PreQuestionaires = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // if (!location.form) history.push('/')
  }, [dispatch])
  const currentForm = useSelector((state) => currentFormSelector(state))
  return (
    <div>
      {currentForm ? <Questionaires formSelector={currentForm} /> : <Spinner />}
    </div>
  )
}

export default PreQuestionaires
