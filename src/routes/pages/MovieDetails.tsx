import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string // 영화 평가 사이트 이름
  Value: string // 영화 평가 점수
}

// http://localhost:5173/movies/tt12345678
export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    async function fetchMovieDetails() {
      const { data } = await axios.get<Movie>(
        `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
      )
      setMovie(data)
    }
    fetchMovieDetails()
  }, [])

  return (
    <>
      {movie && (
        <>
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <ul>
            {movie.Ratings.map(rating => {
              return (
                <li key={rating.Source}>
                  {rating.Source}: {rating.Value}
                </li>
              )
            })}
          </ul>
          <img
            src={`https://img.omdbapi.com?apikey=7035c60c&i=${movieId}&h=2000`}
            alt={movie.Title}
          />
        </>
      )}
    </>
  )
}
