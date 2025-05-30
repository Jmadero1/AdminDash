import type { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={twMerge(
        'border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300',
        className
      )}
      {...props}
    />
  )
}
