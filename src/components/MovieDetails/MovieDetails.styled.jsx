import styled from 'styled-components';

export const MovieContainer = styled.div`
  // width: 650px;
  // margin-left: 10px;

`;

export const NavLinkBtn = styled.button`  
    grid-gap: 5px;
    gap: 5px;
    font-size: 14px;
    border: none;
    background-color: inherit;
    color: #2e2e2e;
    text-decoration: none;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, 
  rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, 
  rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  list-style-type: none;

  > a {
    
    text-decoration: none;
    color: black; 
  }

  :hover,
  :focus {
    > a {
      text-decoration: none;
      color: #ff255f;

    }
  }

}
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
