import { StaticImageData } from 'next/image'
import { LocalizedText } from './localized'

export interface Project {
  id: string | number
  title: string
  description: LocalizedText
  cover: string | StaticImageData
  tags?: string[]
  bgHeaderColor: string
  delay: number
  sections: Array<{
    id: string | number
    title: LocalizedText
    intro: LocalizedText
    images?: StaticImageData[]
  }>
  behanceLink?: string | null
}
