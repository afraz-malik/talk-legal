import React from 'react'
import Form1 from '../../components/QuestionairesForm/Form1'
import Form2 from '../../components/QuestionairesForm/Form2'
import Form3 from '../../components/QuestionairesForm/Form3'
import Form4 from '../../components/QuestionairesForm/Form4'
import HardCopy from '../../components/QuestionairesForm/HardCopy'
import QCss from './Questionaires.module.scss'
import { Link } from 'react-router-dom'
const Questionaires = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [state, setstate] = React.useState({ value: 25 })
  const handleForm = () => {
    setstate({ value: state.value + 25 })
  }
  return (
    <div className={QCss.container}>
      <div className={QCss.container2}>
        <div className={QCss.logo}>
          <Link to="/">
            <img alt="" src="images/Full-Trans 1.png" />
          </Link>
        </div>
        <div className={QCss.progress_bar}>
          <div
            className={QCss.progress_complete}
            style={{ width: `${state.value}%` }}
          ></div>
        </div>
        <div className={QCss.progress_percent}> {state.value}% Complete</div>
        <div className={QCss.body}>
          <div className={QCss.form}>
            {state.value === 25 ? <Form1 handleForm={handleForm} /> : null}
            {state.value === 50 ? <Form2 handleForm={handleForm} /> : null}
            {state.value === 75 ? <Form3 handleForm={handleForm} /> : null}
            {state.value === 100 ? <Form4 handleForm={handleForm} /> : null}
          </div>
          <div
            className={QCss.hardCopy}
            style={{ backgroundImage: 'url(images/TLTM.png)' }}
          >
            <div className={QCss.content}>
              <HardCopy />
            </div>
          </div>
        </div>
      </div>
      <img alt="" className={QCss.jellyimg} src="images/jelly.png" />
    </div>
  )
}

export default Questionaires
