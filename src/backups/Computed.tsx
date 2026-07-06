import { useState } from 'react'

function getDouble(count: number) {
  console.log('double')
  return count * 2
}

export default function App() {
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)
  const double = getDouble(count)

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {text}
      <h1
        onClick={() => {
          setCount(count + 1)
        }}>
        {count} / {double}
      </h1>
    </>
  )
}
