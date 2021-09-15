import React from 'react'
import FormCss from './Form.module.scss'
const Form3 = ({ handleForm }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    handleForm()
  }
  return (
    <div className={FormCss.form}>
      <form onSubmit={handleSubmit}>
        <h2>Enter Company 1 Details!</h2>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>Enter Company 1 Name </label>
        <input type="text" placeholder="Enter Name" />
        <label>Enter Company 1 Name </label>
        <input type="text" placeholder="Enter Name" />
        <input type="submit" value="Complete" />
        <span>
          {' '}
          <img alt="" src="images/lock.png" />
          Your info is savely secured
        </span>
      </form>
    </div>
  )
}

export default Form3
