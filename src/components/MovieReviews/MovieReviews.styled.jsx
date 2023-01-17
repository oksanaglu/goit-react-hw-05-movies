import styled from 'styled-components';

export const ReviewsList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ReviewsItem = styled.li`
  margin: 0;
  padding: 10px;
  list-style-type: none;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ReviewAutor = styled.h3`
  margin-botom: 20px;
  padding: 0;
`;

export const ReviewText = styled.p`
  margin: 0;
  padding: 0;
`;
