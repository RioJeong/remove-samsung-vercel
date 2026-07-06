import { useState, useMemo } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const double = useMemo(() => {
    return count * 2
  }, [count])

  return (
    <>
      <h1
        onClick={() => {
          setCount(count + 1)
        }}>
        {count} / {double}
      </h1>
    </>
  )
}
