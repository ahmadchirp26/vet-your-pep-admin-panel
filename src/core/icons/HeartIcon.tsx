import React from 'react'
import { Heart } from 'lucide-react'

interface HeartIconProps {
  isLiked: boolean
  onClick: () => void // Add the onClick prop
}

export default function HeartIcon({ isLiked, onClick }: HeartIconProps) {
  return (
    <Heart
      size={25}
      color={isLiked ? '#FF0000' : '#003A6D'}
      fill={isLiked ? '#FF0000' : 'transparent'}
      onClick={onClick} // Pass the onClick handler to the Heart SVG
    />
  )
}
