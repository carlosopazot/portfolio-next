import React from 'react'

interface BadgeProps {
  text: string
  bgColor: string
}

const Badge = ({ text, bgColor }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1.5 rounded-md text-sm font-medium text-black ${bgColor} `}
    >
      {text}
    </span>
  )
}

export default Badge
