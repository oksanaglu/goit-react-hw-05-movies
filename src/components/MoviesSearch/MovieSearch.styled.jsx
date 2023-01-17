import styled from 'styled-components';

export const SearchContainer = styled.div`

`;

export const SearchList = styled.ul`
  margin: 0;
  padding: 0;
`;
export const SearchItem = styled.li`
  margin: 0;
  padding: 4px; 
  list-style-type: none;
  > a {
    text-decoration: none;
  }
  :hover,
  :focus {
    > a {
      color: #ff255f;
    }
  }
`;

export const SearchItemText = styled.p`
  margin: 0;
  padding-left: 10px
`;
