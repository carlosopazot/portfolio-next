import { StaticImageData } from 'next/image'

export interface Project {
  id: string | number,
  title: string,
  description: string,
  cover: string | StaticImageData,
  tags?: string[],
  bgHeaderColor: string,
  sections: [
    {
      id: string | number,
      title: string,
      intro: string,
      images: StaticImageData
    }
  ]
}
