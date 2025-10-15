import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  text: string
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
}

export default function Button({ text, icon, ...rest }: ButtonProps) {
  return (
    <div className="group flex w-fit">
      <button
        {...rest}
        className={twMerge(
          'px-6 py-4 ml-1.5 mt-1.5 bg-primary-950 text-primary-50 rounded-xl border-2 border-primary-100 w-fit text-sm font-bold cursor-pointer  group-hover:bg-primary-900 group-hover:mt-0 group-hover:ml-0 transition-all duration-300 flex items-center gap-3 absolute z-10',
          rest.className
        )}
      >
        {text} {icon}
      </button>
      <div
        {...rest}
        className="px-6 py-4 bg-primary-100 text-transparent text-sm font-bold rounded-xl border-2 border-primary-100 w-fit absdolute -z-0 group-hover:py-4.5 group-hover:transition-all group-hover:duration-300 flex items-center gap-3"
      >
        {text} {icon}
      </div>
    </div>
  )
}
