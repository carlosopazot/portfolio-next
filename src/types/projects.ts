import { StaticImageData } from 'next/image'

export interface Project {
  id: string | number
  title: string
  description: string
  cover: string | StaticImageData
  tags?: string[]
  bgHeaderColor: string
  delay: number
  sections: Array<{
    id: string | number
    title: string
    intro: string
    images?: StaticImageData[]
  }>
  behanceLink?: string | null
}
