import { ReactNode } from 'react'
import { LocalizedText } from './localized'

export interface Skill {
  id: string | number
  title: string
  icon: ReactNode
  color: string
  delay: number
  description: LocalizedText
  items?: LocalizedText[]
}
