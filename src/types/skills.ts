import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export interface Skill {
  id: string | number
  title: string
  icon: string | ReactNode | StaticImageData
  color: string
  description: string
  items?: string[]
}
