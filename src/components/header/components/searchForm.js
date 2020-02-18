import React, { memo, forwardRef } from 'react';
import { 
  StyledSearchForm,
  SearchInput,
  SearchButton,
  SearchIcon
} from '../style';
import searchIcon from '../../../images/search.svg';

const SearchForm = forwardRef((props, ref) => {
  return (
    <StyledSearchForm>
      <SearchInput type="search" placeholder="Search" aria-label="search" />

      <SearchButton type="submit" ref={ref}>
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchButton>
    </StyledSearchForm>
  );
})

export default memo(SearchForm);