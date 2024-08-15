import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface ProjectSectionProps {
  id: string | number
  title: string
  intro: string
  images: StaticImageData[]
}

const ProjectSection = ({ title, intro, images, id }: ProjectSectionProps) => {
  return (
    <section
      className='flex flex-col gap-3 py-5 scroll-mt-20'
      id={id.toString()}
    >
      <h3 className='text-xl font-semibold'>{title} </h3>
      <p>{intro}</p>
      {images && images.length > 0 && (
        <>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt='Project Image'
              className='rounded-xl w-full'
            />
          ))}
        </>
      )}
    </section>
  )
}

export default ProjectSection
