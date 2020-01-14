import React, { memo } from 'react';
import { 
  StyledSearchForm,
  SearchInput,
  SearchBtn,
  SearchIcon
} from '../style';
import searchIcon from '../../images/search.svg';

const SearchForm = () => {
  return (
    <StyledSearchForm>
      <SearchInput type="search" placeholder="Search" aria-label="search" />

      <SearchBtn type="submit">
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchBtn>
    </StyledSearchForm>
  );
}

export default memo(SearchForm);