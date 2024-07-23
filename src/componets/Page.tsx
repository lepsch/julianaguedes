import type { PropsWithChildren } from 'react'
import { Menu } from './Menu'
import { Footer } from './Footer'

export function Page({
  children,
  className,
  hideSocial = false,
  hideSchedule = false,
}: PropsWithChildren<{
  className?: string | undefined
  hideSocial?: boolean
  hideSchedule?: boolean
}>) {
  return (
    <>
      <Menu />
      <main className={className}>{children}</main>
      <Footer hideSocial={hideSocial} hideSchedule={hideSchedule} />
    </>
  )
}
