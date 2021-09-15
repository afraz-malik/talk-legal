import React from 'react'
import FormCss from './Form.module.scss'
import HardCopy from './HardCopy'
import { useHistory } from 'react-router-dom'
const Form4 = () => {
  const history = useHistory()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [state, setstate] = React.useState(false)
  const toggle = () => {
    setstate(!state)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    history.push({
      pathname: '/register',
      form: 'yes', // query string
    })
  }
  return (
    <div className={FormCss.form}>
      <form onSubmit={handleSubmit}>
        <h2>Enter Company 2 Details!</h2>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
        <label>Enter Company 1 Name </label>
        <input type="text" placeholder="Enter Name" />
        <label>Enter Company 1 Name </label>
        <input type="text" placeholder="Enter Name" />
        <button
          type="button"
          className={FormCss.complete}
          onClick={() => toggle()}
        >
          Preview
        </button>
        <input type="submit" value="Complete" className={FormCss.complete} />
        <span>
          {' '}
          <img alt="" src="images/lock.png" />
          Your info is savely secured
        </span>
      </form>
      {state ? (
        <div className={FormCss.preview}>
          <div
            className={FormCss.hc}
            style={{ backgroundImage: 'url(images/TLTM.png)' }}
          >
            <img
              className={FormCss.hcimg}
              alt=""
              src="images/x-circle.png"
              onClick={() => toggle()}
            />
            <HardCopy />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Form4
