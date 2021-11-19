import React from 'react'
import PreviewCss from './Preview.module.scss'
const Preview = ({ children }) => {
  return <div className={PreviewCss.preview}>{children}</div>
}

export default Preview
