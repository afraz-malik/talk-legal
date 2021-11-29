import React, { useEffect } from 'react'
import { useState } from 'react'
import update from 'react-addons-update' // ES6

import './FormGenerator.scss'

const sample = {
  title: 'Pro-Brand Influencer Agreement (Services Only)',
  description: '',
  pages: [
    {
      title: 'Let’s get started! What is the name of your company?',
      description:
        'For the purpose of industry regulation, your details are required.',
      questions: [
        {
          label: '',
          type: 'text',
          name: 'company_name',
          value: '',
          placeholder: 'Enter your company name',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title: 'Great name! What is the address of your company?',
      description:
        'For the purpose of industry regulation, your details are required.',
      questions: [
        {
          label: '',
          type: 'text',
          name: 'company_address',
          value: '',
          placeholder: 'Enter your company address',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title: 'Got it. Enter your influencer details.',
      description:
        'For the purpose of industry regulation, your details are required.',
      questions: [
        {
          label: 'What is the name of the influencer?',
          type: 'text',
          name: 'influencer_name',
          value: '',
          placeholder: 'Enter your company address',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
        {
          label: 'In what state does influencer lives in?',
          type: 'list',
          name: 'influencer_state',
          value: '',
          placeholder: 'Select state',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title:
        'Very cool. What are the names of the Services you will have the Influencer advertise?',
      description:
        'Note: here is where you can type in the name of your Services! You can add upto four Services. If you want the influencer to only advertise one service, then just fill first field.',
      questions: [
        {
          label: '',
          type: 'text',
          name: 'service1',
          value: '',
          placeholder: 'Insert service 1',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
        {
          label: '',
          type: 'text',
          name: 'service2',
          value: '',
          placeholder: 'Insert service 2',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
        {
          label: '',
          type: 'text',
          name: 'service3',
          value: '',
          placeholder: 'Insert service 3',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
        {
          label: '',
          type: 'text',
          name: 'service4',
          value: '',
          placeholder: 'Insert service 4',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title:
        'Great Services! What are the social media platforms that you want the Influencer to promote the Services on?',
      description:
        'Note: here is where you can type in the name of the social media platforms (for example, Instagram or Youtube)! Any entry you leave empty will be removed from the contract, so if there’s only one, just type on the first field.',
      questions: [
        {
          label: '',
          type: 'text',
          name: 'social1',
          value: '',
          placeholder: 'Insert social 1',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
        {
          label: '',
          type: 'text',
          name: 'social2',
          value: '',
          placeholder: 'Insert social 2',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
        {
          label: '',
          type: 'text',
          name: 'social3',
          value: '',
          placeholder: 'Insert social 3',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
        {
          label: '',
          type: 'text',
          name: 'social4',
          value: '',
          placeholder: 'Insert social 4',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title:
        'When would you like the Influencer to publicize her/his first post?',
      description:
        'For the purpose of industry regulation, your details are required.',
      questions: [
        {
          label: 'Select date',
          type: 'date',
          name: 'first_post_date',
          value: '',
          placeholder: 'Select date',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title: 'Expiration date of this contract.',
      description:
        'Note: this doesn’t affect how long the posts are required to be on the social media platforms. This only addresses the length of the contract, but does not void the Influencer of its obligations for the length of the social media posts.',
      questions: [
        {
          label:
            'What would you like the expiration date (end date) of this contract to be?',
          type: 'date',
          name: 'expire_date',
          value: '',
          placeholder: 'Select date',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title:
        'Would you rather pay the Influencer a flat fee (one time payment) or pay the Influencer in installments, such as weekly, bi-weekly, or monthly?',
      description:
        'For the purpose of industry regulation, your details are required.',
      questions: [
        {
          label: '',
          type: 'radio',
          name: 'flat_installments',
          value: '',
          placeholder: '',
          fields: ['Flat', 'Installments'],
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title:
        'Great choice! What is the flat fee that you’ll pay the Influencer?',
      description:
        'For the purpose of industry regulation, your details are required.',
      questions: [
        {
          label: 'Insert in dollar value $ ',
          type: 'text',
          name: 'flat_fees',
          value: '',
          placeholder: '',
          fields: '',
          parent_name: 'flat_installments',
          parent_value: 'Flat',
        },
      ],
    },
    {
      title: 'Great choice! How often would you like to pay the Influencer?',
      description:
        'For the purpose of industry regulation, your details are required.',
      questions: [
        {
          label: 'Weekly,bi-weekly, monthly? Insert here:',
          type: 'text',
          name: 'installment_type',
          value: '',
          placeholder: '',
          fields: '',
          parent_name: 'flat_installments',
          parent_value: 'Installments',
        },
      ],
    },
    {
      title:
        'Great choice! How much will you pay the Influencer in each of these payments? ',
      description:
        'For the purpose of industry regulation, your details are required.',
      questions: [
        {
          label: 'Insert dollar value',
          type: 'text',
          name: 'installment_fees',
          value: '',
          placeholder: '',
          fields: '',
          parent_name: 'flat_installments',
          parent_value: 'Installments',
        },
      ],
    },
    {
      title: 'Would you like the relationship to be exclusive?',
      description:
        'Note: answering yes will insert a clause called “exclusivity clause.” This means that the Influencer shall only advertise and promote these types of Services, and those similar, for your company only. They are unable to advertise and promote for another company or individual.<br/>Pros: they would be unable to promote your competitor’s Services.<br/>Cons: the influencer may less likely agree to this Agreement since they might feel hamstringed',
      questions: [
        {
          label: '',
          type: 'radio',
          name: 'exclusivity',
          value: '',
          placeholder: '',
          fields: ['Yes', 'No'],
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title: "In what state you'd like to form...",
      description:
        'Helpful tip – parties often decide based on where one of the parties do business',
      questions: [
        {
          label:
            'Which state’s laws do you want the contract to be governed by?',
          type: 'list',
          name: 'governed_state',
          value: '',
          placeholder: 'Select state',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
        {
          label: 'What state should handle a potential lawsuit?',
          type: 'list',
          name: 'lawsuit_state',
          value: '',
          placeholder: 'Select state',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title: 'Are you lost?',
      description: '',
      questions: [
        {
          label: '',
          type: 'text',
          name: 'text',
          value: '',
          placeholder: 'Select state',
          fields: '',
          parent_name: '',
          parent_value: '',
        },
      ],
    },
    {
      title:
        'Would you like to attach an appendix for specific brand guidelines? ',
      description:
        'Schedule B will talk about brand guidelines including desired colors, fonts, or other creative direction. Schedule B will also tell influencers what not to do, like use profane language or show too much skin.You can also describe items to avoid in influencer posts, such as not mentioning specific competitors, which you’ll state by name. Also mention that all blog posts, social media statuses, tweets, and/or comments should be in good taste and free of inappropriate language and/or any content promoting bigotry, racism or discrimination based on race, gender, religion, nationality, disability, sexual orientation, or age.',
      questions: [
        {
          label: '',
          type: 'radio',
          name: 'guidlines',
          value: '',
          placeholder: 'Select state',
          fields: ['Yes', 'No'],
          parent_name: '',
          parent_value: '',
        },
        {
          label:
            'Do you have your own standard guideline you’d like to attach? If no, then we will, on the next page, provide text box for you to type in specific guidelines.',
          type: 'radio',
          name: 'our_guidlines',
          value: '',
          placeholder: 'Select state',
          fields: ['Yes', 'No'],
          parent_name: '',
          parent_value: '',
        },
      ],
    },
  ],
}

const newQuestion = {
  label: '',
  type: '',
  name: '',
  value: '',
  placeholder: '',
  fields: '',
  parent_name: '',
  parent_value: '',
}
const newPage = {
  title: '',
  description: '',
  questions: [],
}
const initialState = {
  title: '',
  description: '',
  pages: [],
}
const FormGenerator = () => {
  const [state, setstate] = useState(initialState)
  useEffect(() => {
    setstate(JSON.parse(localStorage.getItem('FormGenerator')))
  }, [])
  useEffect(() => {
    localStorage.setItem('FormGenerator', JSON.stringify(state))
  }, [state])

  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }
  const handlePage = (e, idx) => {
    setstate(
      update(state, {
        pages: {
          [idx]: {
            $set: {
              ...state.pages[idx],
              [e.target.name]: e.target.value,
            },
          },
        },
      })
    )
  }
  const handleQuestion = (e, idx, idxx) => {
    setstate(
      update(state, {
        pages: {
          [idx]: {
            questions: {
              [idxx]: {
                $set: {
                  ...state.pages[idx].questions[idxx],
                  [e.target.name]: e.target.value,
                },
              },
            },
          },
        },
      })
    )
  }
  const addQuestion = (idx) => {
    setstate(
      update(state, {
        pages: {
          [idx]: {
            questions: {
              $set: [...state.pages[idx].questions, newQuestion],
            },
          },
        },
      })
    )
  }
  const addPage = () => {
    setstate(
      update(state, {
        pages: {
          $set: [...state.pages, newPage],
        },
      })
    )
  }
  const deletePage = (idx) => {
    const confirm = window.confirm('Are you sure you wanna delete this page?')
    if (confirm) {
      const pages = state.pages.filter((page, index) => index !== idx)
      setstate({ ...state, pages })
    }
  }
  const deleteQuestion = (idx, idxx) => {
    const confirm = window.confirm(
      'Are you sure you wanna delete this Question?'
    )

    if (confirm) {
      const questions = state.pages[idx].questions.filter(
        (qs, qsindex) => qsindex !== idxx
      )
      setstate(
        update(state, {
          pages: {
            [idx]: {
              $set: {
                questions,
              },
            },
          },
        })
      )
    }
  }
  const download = () => {
    var dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(state))
    var dlAnchorElem = document.getElementById('downloadAnchorElem')
    dlAnchorElem.setAttribute('href', dataStr)
    dlAnchorElem.setAttribute('download', 'scene.json')
    dlAnchorElem.click()
  }
  return (
    <>
      {console.log(state)}
      <button onClick={() => download()}>Download JSon</button>
      <a id="downloadAnchorElem"> </a>

      <form className="form_generator">
        <div className="row">
          <label>Enter form title</label>
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <label>Enter form description</label>
          <input
            type="text"
            name="description"
            value={state.description}
            onChange={handleChange}
            disabled
          />
        </div>
        {state.pages.map((page, idx) => (
          <div className="page_generator">
            <div className="row">
              <label>Enter Page title</label>
              <input
                type="text"
                name="title"
                value={state.pages[idx].title}
                onChange={(e) => handlePage(e, idx)}
              />
            </div>
            <div className="row">
              <label>Enter Page description</label>
              <input
                type="text"
                name="description"
                value={state.pages[idx].description}
                onChange={(e) => handlePage(e, idx)}
              />
            </div>
            {page.questions.map((question, idxx) => (
              <div className="question_generator">
                <div className="row">
                  <label>Enter Question label</label>
                  <input
                    type="text"
                    name="label"
                    value={state.pages[idx].questions[idxx].label}
                    onChange={(e) => handleQuestion(e, idx, idxx)}
                  />
                </div>
                <div className="row">
                  <label>Enter Question type</label>
                  <input
                    type="text"
                    name="type"
                    value={state.pages[idx].questions[idxx].type}
                    onChange={(e) => handleQuestion(e, idx, idxx)}
                  />
                </div>
                <div className="row">
                  <label>Enter Question name</label>
                  <input
                    type="text"
                    name="name"
                    value={state.pages[idx].questions[idxx].name}
                    onChange={(e) => handleQuestion(e, idx, idxx)}
                  />
                </div>
                <div className="row">
                  <label>Enter Question value</label>
                  <input
                    type="text"
                    name="value"
                    value={state.pages[idx].questions[idxx].value}
                    onChange={(e) => handleQuestion(e, idx, idxx)}
                    disabled
                  />
                </div>
                <div className="row">
                  <label>Enter Question placeholder</label>
                  <input
                    type="text"
                    name="placeholder"
                    value={state.pages[idx].questions[idxx].placeholder}
                    onChange={(e) => handleQuestion(e, idx, idxx)}
                  />
                </div>
                <div className="row">
                  <label>
                    Enter Question fields(for radio, seperated with comma)
                  </label>
                  <input
                    type="text"
                    name="fields"
                    value={state.pages[idx].questions[idxx].fields}
                    onChange={(e) => handleQuestion(e, idx, idxx)}
                  />
                </div>
                <div className="row">
                  <label>Enter Question Parent Name (if any) </label>
                  <input
                    type="text"
                    name="parent_name"
                    value={state.pages[idx].questions[idxx].parent_name}
                    onChange={(e) => handleQuestion(e, idx, idxx)}
                  />
                </div>
                <div className="row">
                  <label>Enter Question Parent Value (if any) </label>
                  <input
                    type="text"
                    name="parent_value"
                    value={state.pages[idx].questions[idxx].parent_value}
                    onChange={(e) => handleQuestion(e, idx, idxx)}
                  />
                </div>
                <div className="add_button">
                  <button
                    type="button"
                    onClick={() => deleteQuestion(idx, idxx)}
                  >
                    Delete This Question
                  </button>
                </div>
              </div>
            ))}
            <div className="add_button">
              {/* <hr /> */}
              <button type="button" onClick={() => deletePage(idx)}>
                Delete This Page
              </button>
              <button type="button" onClick={() => addQuestion(idx)}>
                Add
              </button>
            </div>
          </div>
        ))}
        <div className="add_button">
          {/* <hr /> */}
          <button type="button" onClick={() => addPage()}>
            Add One Page More
          </button>
        </div>
      </form>
    </>
  )
}

export default FormGenerator
