import styled from 'styled-components';

export const MovieContainer = styled.div`
  width: 650px;
  margin-left: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const OverviewContainer = styled.div`
  width: 300px;
  margin-left: 30px;
`;

export const ButtonContainer = styled.div`
  margin: 20px 20px 20px 0;
      font-weight: 600;
  > a {
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    // text-transform: uppercase;
  }
  .active {
    color: #ff255f;
  }
`;
