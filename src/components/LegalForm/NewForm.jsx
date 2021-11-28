import React, { useState } from 'react'
import FormCss from './Form.module.scss'
import { stateList } from '../../countryList'
import update from 'react-addons-update' // ES6
import $ from 'jquery'
const NewForm = ({
  handleForm,
  newForm,
  currentPage,
  pageHandler,
  lastPage,
  settoggle,
  submitForm,
  currentForm,
}) => {
  const [questions, setquestions] = useState(newForm.questions)
  const [previewed, setpreviewed] = useState(false)
  const [errors, seterrors] = useState([])

  React.useEffect(() => {
    window.scrollTo(0, 0)
    setquestions(newForm.questions)
  }, [newForm, currentPage])
  const handleChange = (event, idx) => {
    seterrors(
      errors.filter((error) => {
        return error !== event.target.name
      })
    )
    setquestions(
      update(questions, {
        [idx]: {
          $set: {
            ...questions[idx],
            value: event.target.value,
          },
        },
      })
    )
  }
  const handleListChange = (value, idx) => {
    seterrors([])
    setquestions(
      update(questions, {
        [idx]: {
          $set: {
            ...questions[idx],
            value,
          },
        },
      })
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let localerrors = []
    questions.forEach((field) => {
      if (!field.value) {
        const res = checkParentById(field.id)
        // console.log(res, field)
        if (res === 'show') {
          localerrors = [...localerrors, field.name]
        }
      }
    })
    if (localerrors.length === 0) {
      handleForm(currentPage, questions)
      if (e.target.name === 'preview') {
        settoggle(true)
        setpreviewed(true)
      }
      if (e.target.name === 'submitForm') {
        submitForm()
      }
    }
    seterrors(localerrors)
  }

  $(document).click(function (e) {
    for (let i = 0; i < questions.length; i++) {
      if (e.target.id !== `dropdown${i}`) {
        $(`.dd_content${i}`).css('display', 'none')
      }
    }
  })

  const checkParentByIndex = (idx) => {
    let response
    if (questions[idx].parent_id) {
      currentForm.pages.forEach((page) =>
        page.questions.forEach((qs) => {
          if (Number(questions[idx].parent_id) === Number(qs.id)) {
            if (
              questions[idx].parent_value.toLowerCase() ===
              qs.value.trim().toLowerCase()
            )
              response = 'show'
            else {
              response = 'hide'
            }
          }
        })
      )
    } else {
      response = 'show'
    }
    return response
  }
  const checkParentById = (id) => {
    let response = 'show'
    questions.forEach((question) => {
      if (Number(question.id) === Number(id) && question.parent_id) {
        currentForm.pages.forEach((page) =>
          page.questions.forEach((qs) => {
            if (Number(question.parent_id) === Number(qs.id)) {
              if (question.parent_value === qs.value.trim()) {
                response = 'show'
              } else {
                response = 'hide'
              }
            }
          })
        )
      }
    })
    return response
  }

  return (
    <div className={FormCss.form}>
      <form onSubmit={handleSubmit}>
        <div className={FormCss.fields}>
          <h2>{newForm.title}</h2>
          <p>{newForm.description}</p>
          <hr style={{ borderTop: '1px solid #ffffff2e' }} />
          {questions.map((question, idx) => {
            switch (question.type) {
              case 'radio':
                return (
                  <div
                    className={
                      checkParentByIndex(idx) === 'show' ? null : FormCss.hide
                    }
                  >
                    <div key={idx} className={FormCss.div} id="checkbox">
                      <div className={FormCss.checkbox}>
                        <label className={FormCss.container2}>
                          <input
                            type={questions[idx].type}
                            // name={questions[idx].fields[0].name}
                            name="radio"
                            value={questions[idx].fields[0].name}
                            id="checkbox1"
                            // required={
                            //   checkParentByIndex(idx) === 'show' ? true : false
                            // }
                            onChange={(e) => handleChange(e, idx)}
                            checked={
                              questions[idx].value ===
                              questions[idx].fields[0].name
                            }
                          />
                          <span className={FormCss.checkmark}></span>
                        </label>
                        <label
                          htmlFor="checkbox1"
                          className={
                            errors.includes(questions[idx].name)
                              ? `${FormCss.error}`
                              : null
                          }
                        >
                          {questions[idx].fields[0].name}
                        </label>
                      </div>
                      <div className={FormCss.checkbox}>
                        <label className={FormCss.container2}>
                          <input
                            type={questions[idx].type}
                            // name={questions[idx].fields[1].name}
                            name="radio"
                            value={questions[idx].fields[1].name}
                            className={
                              checkParentByIndex(idx) === 'show'
                                ? 'show'
                                : 'hidden'
                            }
                            id="checkbox2"
                            checked={
                              questions[idx].value ===
                              questions[idx].fields[1].name
                            }
                            // required={
                            // checkParentByIndex(idx) === 'show' ? true : false
                            // }
                            onChange={(e) => handleChange(e, idx)}
                          />
                          <span className={FormCss.checkmark}></span>
                        </label>
                        <label
                          htmlFor="checkbox2"
                          className={
                            errors.includes(questions[idx].name)
                              ? `${FormCss.error}`
                              : null
                          }
                        >
                          {questions[idx].fields[1].name}
                        </label>
                      </div>
                    </div>
                    <div className={FormCss.error}>
                      <span
                        style={
                          errors.includes(questions[idx].name)
                            ? { opacity: '1' }
                            : { opacity: '0' }
                        }
                      >
                        This field is required
                      </span>
                    </div>
                  </div>
                )
              case 'list': {
                return (
                  <div
                    className={
                      checkParentByIndex(idx) === 'show' ? null : FormCss.hide
                    }
                  >
                    <div
                      key={idx}
                      className={
                        errors.includes(questions[idx].name)
                          ? FormCss.error
                          : null
                      }
                      // data-hide={checkParentByIndex(idx) === 'show' ? 'hide' : null}
                      // id={checkParentByIndex(idx) === 'show' ? 'hide' : null}
                    >
                      <label>{questions[idx].label}</label>
                      <div
                        className={FormCss.dropdownbox}
                        id={`dropdown${idx}`}
                        onClick={() => {
                          $(`.dd_content${idx}`).toggle()
                        }}
                      >
                        <div className={`${FormCss.dropdown}  `}>
                          <h3>
                            {questions[idx].value
                              ? questions[idx].value
                              : questions[idx].placeholder}
                          </h3>
                          <img alt="" src="images/downarrow.png" />
                        </div>
                        <div
                          className={`${FormCss.dd_content} dd_content${idx}`}
                        >
                          <ul>
                            {stateList.map((country, j) => (
                              <li
                                key={j}
                                onClick={() => {
                                  handleListChange(country, idx)
                                  $(`.dd_content${idx}`).toggle()
                                }}
                                className={
                                  [idx].value === country
                                    ? FormCss.active
                                    : null
                                }
                              >
                                {country}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <br />
                        <span
                          style={
                            errors.includes(questions[idx].name)
                              ? { opacity: '1' }
                              : { opacity: '0' }
                          }
                        >
                          This field is required
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              default:
                return (
                  <div
                    className={
                      checkParentByIndex(idx) === 'show' ? null : FormCss.hide
                    }
                  >
                    <div
                      key={idx}
                      className={
                        errors.includes(questions[idx].name)
                          ? FormCss.error
                          : null
                      }
                    >
                      <label>{questions[idx].label}</label>
                      <input
                        type={questions[idx].type}
                        placeholder={questions[idx].placeholder}
                        name={questions[idx].name}
                        value={questions[idx].value}
                        // required={checkParentByIndex(idx) === 'show' ? true : false}
                        onChange={(e) => handleChange(e, idx)}
                      />
                      <span
                        style={
                          errors.includes(questions[idx].name)
                            ? { opacity: '1' }
                            : { opacity: '0' }
                        }
                      >
                        This field is required
                      </span>
                    </div>
                  </div>
                )
            }
          })}
        </div>
        <div className={FormCss.buttons}>
          {lastPage ? (
            <input
              type="button"
              name="preview"
              onClick={(e) => {
                handleSubmit(e)
              }}
              value="Preview"
            />
          ) : null}
          <div className={FormCss.directions}>
            {currentPage === 0 ? null : (
              <input
                className={FormCss.previous}
                type="button"
                onClick={() => pageHandler(currentPage - 1)}
                value="&#9001;&ensp;Back"
              />
            )}
            {!lastPage ? (
              <input type="submit" value="Continue" />
            ) : (
              <input
                type="button"
                name="submitForm"
                onClick={(e) => {
                  handleSubmit(e)
                }}
                value="Complete"
                title="Please Preview First"
                disabled={previewed === false ? true : false}
              />
            )}
          </div>
          <span>
            <img alt="" src="images/lock.png" />
            Your info is savely secured
          </span>
        </div>
      </form>
    </div>
  )
}

export default NewForm
