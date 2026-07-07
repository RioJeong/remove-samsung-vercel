import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useState } from 'react'

export default function Movies() {
  const [searchText, setSearchText] = useState('')

  async function fetchMovies(event) {
    event.preventDefault()
  }

  return (
    <>
      <h1>Movies Page!!</h1>
      <form onSubmit={fetchMovies}>
        <TextField
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <Button type="submit">검색</Button>
      </form>
    </>
  )
}
