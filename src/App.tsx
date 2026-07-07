import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function App() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  return (
    <>
      <form>
        <TextField
          label="ID"
          placeholder="ID를 입력해주세요."
          type="text"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <TextField
          label="PW"
          placeholder="PW를 입력해주세요."
          type="password"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <Button>로그인</Button>
      </form>
    </>
  )
}
