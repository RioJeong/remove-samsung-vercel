// import type { ReactNode } from 'react'

// 타입을 지정하는 행위 => Typing!
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...restProps }: Props) {
  return (
    <button
      {...restProps}
      className="title">
      {children}
    </button>
  )
}
