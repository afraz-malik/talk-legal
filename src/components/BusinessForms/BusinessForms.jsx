import React from 'react'
import BFormsCss from './BusinessForms.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { clearForm, gettingFormStart } from '../../redux/data/data.action'
import { currentFormSelector } from '../../redux/data/data.selector'

const BusinessForms = ({ forms }) => {
  const currentForm = useSelector((state) => currentFormSelector(state))
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(currentForm)
  const getForm = (id) => {
    if (currentForm) {
      if (currentForm.id === id) {
        history.push({ pathname: '/questions', form: id })
      } else {
        dispatch(clearForm())
        dispatch(gettingFormStart(id))
        history.push({ pathname: '/questions', form: id })
      }
    } else {
      dispatch(clearForm())
      dispatch(gettingFormStart(id))
      history.push({ pathname: '/questions', form: id })
    }
  }
  return (
    <div className={BFormsCss.container}>
      <div className={BFormsCss.helper}></div>
      <div className={BFormsCss.cards}>
        {forms.map((form) => (
          <div className={BFormsCss.card}>
            <div className={BFormsCss.imgTaker}>
              <img alt="" src={form.src} />
            </div>
            <div className={BFormsCss.text}>
              <h3>{form.title}</h3>
              <p>{form.desp}</p>
            </div>
            <div className={BFormsCss.links}>
              <button onClick={() => getForm(form.id)}>Get Started</button>
              <div className={BFormsCss.fees}>
                ${form.price} + state filing fees
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BusinessForms
