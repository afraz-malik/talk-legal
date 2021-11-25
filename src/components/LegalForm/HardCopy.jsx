import React, { useState } from 'react'
import FormCss from './Form.module.scss'

import $ from 'jquery'
const HardCopy = ({ values, currentForm }) => {
  // eslint-disable-next-line
  const [stateForm, setstate] = useState(currentForm)
  let state = {}

  React.useEffect(() => {
    window.scrollTo(0, 0)
    // Clearing Div
    $('.hardcopy').empty()
    // Parsing HTML into Div
    var $log = $('.hardcopy'),
      html = $.parseHTML(stateForm.description)
    $log.append(html)
    // If values
    if (values) {
      // Fill state with each object and their values
      fillingState()

      // Removing text from HTML DIV if Master value is not matched
      const elements = document.querySelectorAll('[data-parent-name]')
      elements.forEach((element) => {
        if (element) {
          let parentName = element.getAttribute('data-parent-name')
          let parentValue = element.getAttribute('data-parent-value')
          currentForm.pages.forEach((page) => {
            page.questions.forEach((qs) => {
              if (qs.name === parentName) {
                let oppositeVal = qs.fields.filter(
                  (field) => field.name !== qs.value
                )
                if (oppositeVal[0].name.trim().toLowerCase() === parentValue)
                  element.remove()
              }
            })
          })
        }
      })

      // currentForm.pages.forEach((page) =>
      //   page.questions.forEach((qs) => {
      //     if (qs.name === 'master' && qs.value) {
      //       const opposite = qs.fields.filter(
      //         (field) => field.name !== qs.value
      //       )
      //       const oppVal = opposite[0].name.trim().toLowerCase()
      //       const oppEl = document.querySelectorAll('[data-parent-value]')
      //       oppEl.forEach((element) => {
      //         if (element) {
      //           // console.log(element.getAttribute('data-parent-value'), oppVal)
      //           if (
      //             element.getAttribute('data-parent-value').toLowerCase() ===
      //             oppVal
      //           )
      //             element.remove()
      //         }
      //       })
      //     }
      //   })
      // )

      // Getting Values from State and putting in repective
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

  // Fill State with each object name and their values
  const fillingState = () => {
    values.pages.map((page) =>
      page.questions.map((field) => {
        return (state = { ...state, [field.name]: field.value })
      })
    )
  }

  return (
    <div className={`hardcopy`} id="pdf">
      {}
    </div>
  )
}

export default HardCopy
