import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(1)

  function renderCountState() {
    if (count < 3) {
      return <p>Count가 3 미만입니다..</p>
    } else if (count > 3) {
      return <p>Count가 3 초과입니다!</p>
    } else {
      return <p>Count가 3입니다!</p>
    }
  }

  return (
    <>
      <h1
        id="title"
        className={count > 3 ? 'active' : ''}
        style={{ fontSize: `${20 + count}px` }}
        onClick={() => {
          setCount(count + 1)
          console.log(count)
        }}>
        Count: {count}
      </h1>
      {count > 3 && <p>Count가 3보다 큽니다!</p>}
      {count > 3 ? <p>Count가 3 초과입니다!</p> : <p>Count가 3 이하입니다..</p>}
      {renderCountState()}
    </>
  )
}

// 거짓(Falsy)
// 0, '', false, null, undefined, NaN, 0n
