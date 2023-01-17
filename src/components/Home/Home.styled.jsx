import styled from 'styled-components';

export const ContainerHome = styled.div`
  gap: 20px;
  max-width: 800px;
`;

export const TitleHome = styled.h2`
  margin: 30px 0 30px 15px;
  font-size: 24px;
  font-weight: 700;
  
`;

export const ListHome = styled.ul`

`;

export const ItemHome = styled.li`
  margin: 0;
  padding: 3px; 

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

export const TextHome = styled.p`
  margin: 0;
  padding: 0;
`;
