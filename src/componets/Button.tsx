import React from 'react'
import classnames from 'classnames'
import './Button.scss'

// eslint-disable-next-line react-refresh/only-export-components
export enum ButtonTheme {
  light = 'light',
  dark = 'dark',
}

const Button: React.FC<{
  children?: React.ReactNode | undefined
  href: string
  theme?: ButtonTheme
}> = ({
  children,
  href,
  theme = ButtonTheme.light,
}) => {
  return (
    <a className={classnames('Button', theme)} href={href}>
      {children}
    </a>
  )
}

export default Button
