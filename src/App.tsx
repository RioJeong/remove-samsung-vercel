import { useState } from 'react'
import TextField from '@/components/TextField'

export default function App() {
  const [text, setText] = useState('Hello, Props!')
  return (
    <>
      <main>
        <section>
          <TextField
            label="메시지"
            value={text}
            onChange={event => {
              setText(event.target.value)
            }}
          />
          <h1>{text}</h1>
        </section>
      </main>
    </>
  )
}
