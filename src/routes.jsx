import { createBrowserRouter } from 'react-router-dom';
// Layouts
import MainLayout from './pages/layouts/MainLayout';
// Error Handling
import NotFound from './pages/NotFound';
// Pages
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';
import TVShows from './pages/TVShows';
import TVShowsDetails from './pages/TVShowsDetails';
import WatchList from './pages/WatchList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MovieList />,
      },
      {
        path: 'movies/:movieId',
        element: <MovieDetails />,
      },
      {
        path: 'search/',
        element: <SearchResults />,
      },
      {
        path: 'tv-shows',
        element: <TVShows />,
      },
      {
        path: 'tv-shows/:tvShowId',
        element: <TVShowsDetails />,
      },
      {
        path: 'watch-list',
        element: <WatchList />,
      },
    ],
  },
]);

export default router;
