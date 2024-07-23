import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

enum ButtonTheme {
  light = 'light',
  dark = 'dark',
}

export const Button = ({
  children,
  href,
  theme = ButtonTheme.light,
}: {
  children?: React.ReactNode | undefined
  href: string
  theme?: ButtonTheme
}) => {
  return (
    <a className={classnames(styles['Button'], theme)} href={href}>
      {children}
    </a>
  )
}

Button.Theme = ButtonTheme
