import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../RegisterForm/RegisterForm'
import ResetPassword from '../ResetPassword/ResetPassword'
import ResetPasswordEmail from '../ResetPasswordEmail/ResetPasswordEmail'
import BoxmodelCss from './Boxmodel.module.scss'
const Boxmodel = () => {
  return (
    <div className={BoxmodelCss.container}>
      <img alt="" className={BoxmodelCss.objects} src="images/OBJECTS.svg" />
      <div
        className={BoxmodelCss.image}
        style={{ backgroundImage: 'url("images/image 27.png")' }}
      >
        <div className={BoxmodelCss.helper}></div>
        <div className={BoxmodelCss.text}>
          <Link to="/">
            <h3>TalkLegal</h3>
          </Link>

          <div>
            <p>
              {' '}
              <img alt="" src="images/vector.png" />
              Top market company
            </p>
            <h2>Focus on the work that matters</h2>
            <p>
              udix is the world’s first smart workspace. We bring all your
              team’s content together while letting you use the tools you love.
            </p>
          </div>
        </div>
      </div>
      <div className={BoxmodelCss.form}>
        <ResetPassword />
        {/* <ResetPasswordEmail /> */}
        {/* <RegisterForm /> */}
      </div>
    </div>
  )
}

export default Boxmodel
