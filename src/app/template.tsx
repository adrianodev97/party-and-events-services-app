import DefaultPageLayout from '@/components/DefaultPageLayout'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return <DefaultPageLayout>template{children}</DefaultPageLayout>
}
