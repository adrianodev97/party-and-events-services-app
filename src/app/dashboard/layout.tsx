import { ReactNode } from 'react'

export const metadata = {
  title: 'PartYou',
  description: 'Find works for you',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
