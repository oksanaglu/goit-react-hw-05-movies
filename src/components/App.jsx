import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Header from './Header';
import Movies from './Movies';
import Home from './Home';

const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./MovieCast'));
const Reviews = lazy(() => import('./MovieReviews'));
const SearchMovie = lazy(() => import('./MoviesSearch'));

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Movies />}>
          <Route path="/movies" element={<SearchMovie />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
