import type { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function TextField({ label, ...restProps }: Props) {
  return (
    <label>
      {label && <span>{label}</span>}
      <input {...restProps} />
    </label>
  )
}
