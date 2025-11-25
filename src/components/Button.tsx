import { HTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  text: string
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
}

export default function Button({ text, icon, onClick, ...rest }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div
      className="group relative w-fit"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <button
        {...rest}
        onClick={onClick}
        className={twMerge(
          'relative px-6 py-3 bg-primary-950 text-primary-50 rounded-xl border-2 transition-all duration-200 ease-in-out flex items-center gap-2 text-base font-semibold cursor-pointer font-sans',
          'border-primary-100',
          isPressed && 'border-blue-400',
          'group-hover:translate-y-1 active:translate-y-1',
          rest.className
        )}
      >
        {text} {icon}
      </button>

      <div
        className={twMerge(
          'absolute inset-0 px-6 py-3 translate-y-2 text-transparent rounded-xl border-2 flex items-center gap-2 text-base font-semibold font-sans -z-10 transition-transform duration-200 ease-in-out group-hover:shadow-lg',
          isPressed ? 'border-blue-400 bg-blue-400' : 'border-primary-100 bg-primary-100'
        )}
      >
        {text} {icon}
      </div>
    </div>
  )
}
