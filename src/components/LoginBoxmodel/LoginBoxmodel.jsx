import React from 'react'
import { Link } from 'react-router-dom'

import LoginBoxmodelCss from './LoginBoxmodel.module.scss'
const LoginBoxmodel = ({ children }) => {
  return (
    <div className={LoginBoxmodelCss.container}>
      <img
        alt=""
        className={LoginBoxmodelCss.objects}
        src="images/OBJECTS.svg"
      />
      <div className={LoginBoxmodelCss.left}>
        <div
          className={LoginBoxmodelCss.image}
          style={{ backgroundImage: 'url("images/image 27.png")' }}
        >
          <div className={LoginBoxmodelCss.helper}></div>
          <div className={LoginBoxmodelCss.text}>
            <h3>
              <Link to="/">TalkLegal</Link>
            </h3>

            <div>
              <p>
                {' '}
                <img alt="" src="images/Vector.png" />
                Top market company
              </p>
              <h2>Focus on the work that matters</h2>
              <p>
                udix is the world’s first smart workspace. We bring all your
                team’s content together while letting you use the tools you
                love.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={LoginBoxmodelCss.form}>{children}</div>
    </div>
  )
}

export default LoginBoxmodel
