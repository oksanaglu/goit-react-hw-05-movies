import styled from 'styled-components';

export const SearchFormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #2e2e2e;
  
`;
export const SearchFormSubmit = styled.form`
  display: inline-flex;
  align-items: center;
`;
export const SearchFormInput = styled.input`
  width: 500px;
  border: none; 
  padding-left: 5px;
  
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, 
  rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, 
  rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

`;
export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  margin-left: 15px;
  border: none;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, 
  rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, 
  rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  &:hover,
  &:focus {
  color: #ff255f;
}
`;

