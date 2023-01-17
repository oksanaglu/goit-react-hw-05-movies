import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { SearchFormContainer, SearchFormInput, SearchButton, SearchFormSubmit } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = e => {
    setSearchValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      alert('input search request');
    }
    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <SearchFormContainer>
      <SearchFormSubmit onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          placeholder="Search movie"
          onChange={handleSearchValueChange}
          value={searchValue}
        />
        <SearchButton type="submit" className="button">
          <MdSearch style={{ width: 15, height: 15 }} /> Search
        </SearchButton>
      </SearchFormSubmit>
    </SearchFormContainer>
  );
}

export default SearchForm;




