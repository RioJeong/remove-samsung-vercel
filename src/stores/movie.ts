import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      movies: [] as Movie[],
      isLoading: false
    },
    () => {
      return {}
    }
  )
)
