// import type { ReactNode } from 'react'
import Loader from '@/components/Loader'

// 타입을 지정하는 행위 => Typing!
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
}

export default function Button({ loading, children, ...restProps }: Props) {
  return (
    <button
      {...restProps}
      className="relative flex h-[36px] min-w-[70px] items-center justify-center rounded-md bg-blue-500 text-white">
      {loading ? <Loader color="white" /> : children}
    </button>
  )
}
