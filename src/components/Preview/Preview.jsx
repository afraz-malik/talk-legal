import React from 'react'
import PreviewCss from './Preview.module.scss'
const Preview = ({ children, position }) => {
  return (
    <div className={PreviewCss.preview} style={{ position: position }}>
      {children}
    </div>
  )
}

export default Preview
