import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as API from '../ApiThemoviedb/ApiThemoviedb';
import { ContainerHome, TitleHome, ListHome, ItemHome, TextHome } from './Home.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  function fetchTrendingMovies() {
    fetch(`${API.BASE_URL}/trending/all/day?api_key=${API.API_KEY}`)
      .then(response => response.json())
      .then(response => {
        setTrendingMovies(response.results);
      })
      .catch(console.error());
  };

  if (!trendingMovies) return null;

  return (
    <ContainerHome>
      <TitleHome>Trending today</TitleHome>
      <ListHome>
        {trendingMovies.map(({ id, name, title }) => {
          return (
            <ItemHome key={id}>
              <NavLink to={`movies/${id}`} state={{ from: location }}>
                {name ? (<TextHome>{name}</TextHome>) : (<TextHome>{title}</TextHome>)}
              </NavLink>
            </ItemHome>
          );
        })}
      </ListHome>
    </ContainerHome>
  );
};

export default Home;