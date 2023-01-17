import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../ApiThemoviedb/ApiThemoviedb';
import { CastContainer, CastList, CastItem, CastName, CastText1, CastText2 } from './MovieCast.styled';
/* eslint-disable react-hooks/exhaustive-deps */

export const Cast = () => {
  const [castMovie, setCastMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchCastMovie();
  }, []);

  function fetchCastMovie() {
    fetch(
      `${API.BASE_URL}/movie/${params.movieId}/credits?api_key=${API.API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response => {
        setCastMovie(response.cast);
      })
      .catch(console.error());
  }
  if (!castMovie) return null;

  return (
    <CastContainer>
      <CastList>
        {castMovie.map(({ name, profile_path, character, id }) => {
          return (
            <CastItem key={id}>
              {profile_path && (
                <img
                  src={`${API.BASE_URL_IMAGE}${profile_path}`}
                  alt={name}
                  width="100"
                />
              )}
              {/* <CastTextB>name</CastTextB> */}
              <CastName>{name}</CastName>
              {character && <CastText1>Character:</CastText1>}
              {character && <CastText2>{character}</CastText2>}
            </CastItem>
          );
        })}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
