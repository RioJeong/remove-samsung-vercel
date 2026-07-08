import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import Default from './layouts/Default'
import { requiresAuth, guestOnly, fetchMovieDetails } from './loaders'

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
      // {
      //   path: '/movies', // http://localhost:5173/movies
      //   loader: requiresAuth,
      //   element: <Movies />
      // },
      // {
      //   path: '/movies/:movieId', // http://localhost:5173/movies/tt12345678
      //   loader: fetchMovieDetails,
      //   element: <MovieDetails />
      // },
      {
        loader: requiresAuth,
        children: [
          {
            path: '/movies', // http://localhost:5173/movies
            element: <Movies />
          },
          {
            path: '/movies/:movieId', // http://localhost:5173/movies/tt12345678
            loader: fetchMovieDetails,
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/signin',
        loader: guestOnly,
        element: <SignIn />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
