import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../ApiThemoviedb/ApiThemoviedb';
import { ReviewsList, ReviewsItem, ReviewAutor, ReviewText } from './MovieReviews.styled';
/* eslint-disable react-hooks/exhaustive-deps */

export const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchReviewsMovie();
  }, []);

  function fetchReviewsMovie() {
    fetch(
      `${API.BASE_URL}/movie/${params.movieId}/reviews?api_key=${API.API_KEY}&language=en-US`
    )
      .then(response => response.json())
      .then(response => {
        setReviewsMovie(response.results);
      })
      .catch(console.error());
  }
  if (reviewsMovie.length > 0) {
    return (
      <>
        <ReviewsList>
          {reviewsMovie.map(({ id, author, content }) => {
            return (
              <ReviewsItem key={id}>
                <ReviewAutor>{author}</ReviewAutor>
                <ReviewText>{content}</ReviewText>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      </>
    );
  } else {
    return <div>We don`t have any reviews for this movie</div>;
  }
};

export default Reviews;
