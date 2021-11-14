import React, { useState } from 'react'
import FormCss from './Form.module.scss'

import $ from 'jquery'
const HardCopy = ({ values, currentForm }) => {
  // eslint-disable-next-line
  const [stateForm, setstate] = useState(currentForm)
  let state = {}
  React.useEffect(() => {
    window.scrollTo(0, 0)
    $('.hardcopy').empty()
    var $log = $('.hardcopy'),
      html = $.parseHTML(stateForm.description)
    $log.append(html)
    if (values) {
      fillingState()
      currentForm.pages.forEach((page) =>
        page.questions.forEach((qs) => {
          if (qs.name === 'master' && qs.value) {
            const opposite = qs.fields.filter(field => field.name !== qs.value )
            const oppVal = opposite[0].name.trim().toLowerCase();
            console.log(oppVal)
            const oppEl = document.querySelectorAll('[data-parent]')
            oppEl.forEach(element => {
              if(element){
                // console.log(element.getAttribute('data-parent'), oppVal)
                if(element.getAttribute('data-parent').toLowerCase() === oppVal) element.remove()

              }
            });
          }
        })
      )
      const keys = Object.keys(state)
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        const el = document.querySelectorAll(`.preview .${key}`)
        if (el.length > 0) {
          for (let j = 0; j < el.length; j++) {
            el[j].innerHTML = state[key]
          }
        }
      }
    }
    // eslint-disable-next-line
  }, [currentForm, values])
  const fillingState = () => {
    values.pages.map((page) =>
      page.questions.map((field) => {
        return (state = { ...state, [field.name]: field.value })
      })
    )
  }
  return <div className={`${FormCss.page} hardcopy`}>{}</div>
}

export default HardCopy
