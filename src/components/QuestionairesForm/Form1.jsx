import React from 'react'
import FormCss from './Form.module.scss'
const Form1 = ({ handleForm }) => {
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
        <h2>In what State would you like to form ________?</h2>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>Enter Your State </label>
        <div className={FormCss.select}>
          <img alt="" src="images/downarrow.png" />
          <select>
            <option> Select your state</option>
            <option>Albama</option>
            <option>Alaska</option>
            <option></option>
          </select>
        </div>
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

export default Form1
