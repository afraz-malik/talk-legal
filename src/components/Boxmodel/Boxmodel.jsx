import React from 'react'
import { Link } from 'react-router-dom'

import BoxmodelCss from './Boxmodel.module.scss'
const Boxmodel = ({ children }) => {
  return (
    <div className={BoxmodelCss.container}>
      <img alt="" className={BoxmodelCss.objects} src="images/OBJECTS.svg" />
      <div className={BoxmodelCss.left}>
        <div
          className={BoxmodelCss.image}
          style={{ backgroundImage: 'url("images/image 27.png")' }}
        >
          <div className={BoxmodelCss.helper}></div>
          <div className={BoxmodelCss.text}>
            <h3>
              <Link to="/">TalkLegal</Link>
            </h3>

            <div>
              <p>
                {' '}
                <img alt="" src="images/vector.png" />
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
      <div className={BoxmodelCss.form}>{children}</div>
    </div>
  )
}

export default Boxmodel
