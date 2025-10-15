import { twMerge } from 'tailwind-merge'

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg'
  src: string
  alt: string
  className?: string
}

export default function Avatar({ size = 'md', src, alt, ...rest }: AvatarProps) {
  const sizeClass = {
    sm: 'w-13 h-13',
    md: 'w-15 h-15',
    lg: 'w-28 h-28',
  }[size]

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      className={twMerge(`${sizeClass} rounded-full object-cover`, rest.className)}
    />
  )
}
