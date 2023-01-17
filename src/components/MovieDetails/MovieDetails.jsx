import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import * as API from '../ApiThemoviedb/ApiThemoviedb';
import { RxChevronLeft } from 'react-icons/rx';
import { MovieContainer, DetailsContainer, OverviewContainer, ButtonContainer, NavLinkBtn } from './MovieDetails.styled';
/* eslint-disable react-hooks/exhaustive-deps */
 

export const MovieDetails = () => {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovies();
  }, []);

  function fetchMovies() {
    fetch(`${API.BASE_URL}/movie/${params.movieId}?api_key=${API.API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setMovies(response);
      })
      .catch(console.error());
  }
  if (movies.success === false)
    return (
      <MovieContainer>
        <NavLinkBtn type="submit" className="button">
          <NavLink to="/"><RxChevronLeft style={{ width: 12, height: 12 }} /> Go back</NavLink>
        </NavLinkBtn>
        <DetailsContainer>
          <div>We don`t have any details for this movie</div>
        </DetailsContainer>
      </MovieContainer>
    );

  const { original_title, poster_path, overview, vote_average, genres } =
    movies;

  const backLinkHref = location.state?.from ?? '/';

  return (
    <MovieContainer>
      <NavLinkBtn type="submit" className="button">
        <NavLink to={backLinkHref}><RxChevronLeft style={{ width: 12, height: 12 }} /> Go back</NavLink>
      </NavLinkBtn>
      <DetailsContainer>
        <img
          src={`${API.BASE_URL_IMAGE}${poster_path}`}
          alt={original_title}
          width="300"
        />
        <OverviewContainer>
          <h2>{original_title}</h2>
          <p>User score {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres &&
            genres.map(({ name }) => {
              return name + ' ';
            })}
        </OverviewContainer>
      </DetailsContainer>
      <h3>Additional information</h3>
      <ButtonContainer>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </ButtonContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieContainer>
  );
};

export default MovieDetails;


