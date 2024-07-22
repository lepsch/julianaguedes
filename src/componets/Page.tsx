import type { PropsWithChildren } from 'react'
import { Menu } from './Menu'
import { Footer } from './Footer'
import './Page.scss'

export function Page({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <>
      <Menu />
      <main className={className}>
        {children}
      </main>
      <Footer />
    </>
  )
}
