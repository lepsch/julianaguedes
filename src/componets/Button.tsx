import React from 'react'
import classnames from 'classnames'
import './Button.scss'

enum ButtonTheme {
  light = 'light',
  dark = 'dark',
}

const Button = ({
  children,
  href,
  theme = ButtonTheme.light,
}: {
  children?: React.ReactNode | undefined
  href: string
  theme?: ButtonTheme
}) => {
  return (
    <a className={classnames('Button', theme)} href={href}>
      {children}
    </a>
  )
}

Button.Theme = ButtonTheme

export default Button
