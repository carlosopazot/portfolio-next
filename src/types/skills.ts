import { ReactNode } from 'react'

export interface Skill {
  id: string | number
  title: string
  icon: ReactNode
  color: string
  description: string
  items?: string[]
}
