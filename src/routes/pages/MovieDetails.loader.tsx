import { useParams, useLoaderData } from 'react-router'

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

export default function MovieDetails() {
  const { movieId } = useParams()
  const movie = useLoaderData<Movie>()

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
