interface Props {
  label: string
  value: string
  onChange: (value: string) => void
}

export default function TextField({ label, value, onChange }: Props) {
  // const abc = props.abc
  // const xyz = props.xyz
  // const { abc, xyz } = props
  return (
    <label>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}
