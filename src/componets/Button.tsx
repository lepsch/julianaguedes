import React from 'react'

import './Button.scss'

const Button: React.FC<{ children?: React.ReactNode | undefined }> = (props) => {
  return <a className='Button' href='#'>
    { props.children }
  </a>
}

export default Button
