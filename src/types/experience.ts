import { LocalizedText } from './localized'

export interface ExperienceItem {
  id: number
  title: LocalizedText
  date: LocalizedText
  company: string
  description: LocalizedText[] | null
}
