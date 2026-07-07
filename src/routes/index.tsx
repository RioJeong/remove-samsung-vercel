import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Default from './layouts/Default'

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      {
        path: '/', // http://localhost:5173
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5173/about
        element: <About />
      },
      {
        path: '/movies', // http://localhost:5173/movies
        element: <Movies />
      },
      {
        path: '/movies/:movieId', // http://localhost:5173/movies/tt12345678
        element: <MovieDetails />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
