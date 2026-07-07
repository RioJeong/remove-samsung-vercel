import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useState } from 'react'
import axios from 'axios'

// interface ResponseData {
//   Response: 'True' | 'False' // 'True' or 'False'
//   Search?: Movie[]
//   totalResults?: string
//   Error?: string
// }
interface ResponseSuccessData {
  Response: 'True'
  Search: Movie[]
  totalResults: string
}
interface ResponseFailureData {
  Response: 'False'
  Error: string
}
type ResponseData = ResponseSuccessData | ResponseFailureData

interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function Movies() {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])

  async function fetchMovies(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const { data } = await axios.get<ResponseData>(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    if (data.Response === 'True') {
      const { Search } = data
      setMovies(Search)
    }
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
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <img
                src={movie.Poster}
                alt={movie.Title}
                width={200}
                height={300}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
