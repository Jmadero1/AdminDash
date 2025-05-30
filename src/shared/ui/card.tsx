import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={twMerge('bg-white p-4 rounded shadow', className)}>
      {children}
    </div>
  )
}
