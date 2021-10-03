import React from 'react'
import FormCss from './Form.module.scss'
import Calendar from 'react-calendar'

const Form2 = ({ handleForm }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [value, onChange] = React.useState()
  console.log(value)
  const [toggle, settoggle] = React.useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    handleForm()
  }
  const handleChange = (e) => {
    onChange(e)
    settoggle(false)
  }
  return (
    <div className={FormCss.form}>
      <form onSubmit={handleSubmit}>
        <h2>When do you want to start your business?</h2>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>Enter Your State </label>
        {/* <div className={FormCss.select}>
          <img alt="" src="images/downarrow.png" />
          <select>
            <option> Enter Your Date</option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div> */}
        <div className={FormCss.dropdownbox}>
          <div className={FormCss.dropdown} onClick={() => settoggle(!toggle)}>
            <h3>{value ? value.toLocaleDateString('en-US') : 'Select Date'}</h3>
            <img alt="" src="images/downarrow.png" />
          </div>
          <div
            className={FormCss.date}
            style={toggle ? { display: 'block' } : { display: 'none' }}
          >
            <Calendar onChange={handleChange} value={value} />
          </div>
        </div>
        <input type="submit" value="Continue" />
        <span>
          {' '}
          <img alt="" src="images/lock.png" />
          Most customers form their LLC in their local state.
        </span>
      </form>
    </div>
  )
}

export default Form2
