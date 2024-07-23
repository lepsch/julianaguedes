import type { PropsWithChildren } from 'react'
import { Menu } from './Menu'
import { Footer } from './Footer'

export function Page({ children, className }: PropsWithChildren<{ className?: string | undefined }>) {
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
