import { ReactNode } from 'react'

export interface Skill {
  id: string | number
  title: string
  icon: ReactNode
  color: string
  delay: number
  description: string
  items?: string[]
}
