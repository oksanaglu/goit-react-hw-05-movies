import styled from 'styled-components';

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  margin-bottom: 16px;
  // border-bottom: 1px solid #2a363b; 
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, 
  rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, 
  rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  list-style-type: none;
  
`;

export const HeaderNavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const HeaderNavItem = styled.li`
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  color: #2e2e2e;
  list-style-type: none;

  :not(:last-child) {
    margin-left: 20px;
    margin-right: 20px;
  }
  > a {
    text-decoration: none;
    text-transform: uppercase;
  }
  .active {
  composes: link;
  color: #ff255f;
}
`;
