import type { PropsWithChildren, ReactNode } from 'react'
import { Menu } from './Menu'
import { Footer } from './Footer'

export function Page({
  children,
  className,
  header,
  hideSocial = false,
  hideSchedule = false,
}: PropsWithChildren<{
  className?: string | undefined
  header: ReactNode
  hideSocial?: boolean
  hideSchedule?: boolean
}>) {
  return (
    <>
      <Menu />
      {header}
      <main className={className}>{children}</main>
      <Footer hideSocial={hideSocial} hideSchedule={hideSchedule} />
    </>
  )
}
