import { ReactNode } from 'react'
import { MUIFooter } from '../MUIFooter'
import { MUIHeader } from '../MUIHeader'

export default function DefaultPageLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <MUIHeader />
      {children}
      <MUIFooter />
    </>
  )
}
