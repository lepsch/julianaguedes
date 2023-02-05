import React from 'react'
import classnames from 'classnames'
import './Button.scss'

export enum ButtonTheme {
  light = 'light',
  dark = 'dark'
}

const Button: React.FC<{
  children?: React.ReactNode | undefined
  theme?: ButtonTheme
}> = ({
  children,
  theme = ButtonTheme.light
}) => {
  return <a className={ classnames('Button', theme) } href='#'>
    { children }
  </a>
}

export default Button
