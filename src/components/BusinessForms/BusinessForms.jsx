import React from 'react'
import BFormsCss from './BusinessForms.module.scss'
import { useHistory } from 'react-router'
import Slide from 'react-reveal/Slide'

const BusinessForms = ({ forms }) => {
  const history = useHistory()

  return (
    <div className={BFormsCss.container}>
      <div className={BFormsCss.helper}></div>
      <div className={BFormsCss.cards}>
        {forms.map((form) => (
          <Slide left>
            <div
              className={BFormsCss.card}
              onClick={() => history.push(`/businessform?form=${form.id}`)}
            >
              <div className={BFormsCss.imgTaker}>
                <img alt="" src={form.src} />
              </div>
              <div className={BFormsCss.text}>
                <h3>{form.title}</h3>
                <p>{form.desp}</p>
              </div>
              <div className={BFormsCss.links}>
                <button
                  onClick={() => history.push(`/businessform?form=${form.id}`)}
                >
                  Get Started
                </button>
                <div className={BFormsCss.fees}>
                  ${form.price} + state filing fees
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  )
}

export default BusinessForms
