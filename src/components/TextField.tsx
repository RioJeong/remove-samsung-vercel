// import type { InputHTMLAttributes } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: 타입
  label?: string
}

export default function TextField({ ref, label, ...restProps }: Props) {
  return (
    <label>
      {label && <span>{label}</span>}
      <input
        {...restProps}
        className="h-[36px] rounded-md border border-gray-400 px-2 outline-none focus:border-blue-500"
      />
    </label>
  )
}
