import SearchForm from 'components/MovieSearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import * as API from '../ApiThemoviedb/ApiThemoviedb';
import { SearchContainer, SearchList, SearchItem, SearchItemText } from './MovieSearch.styled';
/* eslint-disable react-hooks/exhaustive-deps */

export const SearchMovie = () => {
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [serchParams, setSearchParams] = useSearchParams();
  const filter = serchParams.get('filter') ?? '';

  useEffect(() => {
    filter && fetchSelectedMovie();
  }, [filter]);

  const handleFormSubmit = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  function fetchSelectedMovie() {
    fetch(`${API.BASE_URL}/search/movie?api_key=${API.API_KEY}&query=${filter}`)
      .then(response => response.json())
      .then(response => {
        setSelectedMovie(response.results);
      })
      .catch(console.error());
  }
  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {selectedMovie.length > 0 && (
        <SearchContainer>
          <SearchList>
            {selectedMovie.map(({ id, name, title }) => {
              return (
                <SearchItem key={id}>
                  <NavLink to={`../../movies/${id}`} state={{ from: location }}>
                    {name ? ( <SearchItemText>{name}</SearchItemText> ) : ( <SearchItemText>{title}</SearchItemText> )}
                  </NavLink>
                </SearchItem>
              );
            })}
          </SearchList>
        </SearchContainer>
      )}
    </>
  );
}

export default SearchMovie;
