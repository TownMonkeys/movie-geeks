import React, { memo, forwardRef } from 'react';
import { 
  StyledSearchForm,
  SearchInput,
  SearchBtn,
  SearchIcon
} from '../style';
import searchIcon from '../../../images/search.svg';

const SearchForm = forwardRef((props, ref) => {
  return (
    <StyledSearchForm>
      <SearchInput type="search" placeholder="Search" aria-label="search" />

      <SearchBtn type="submit" ref={ref}>
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchBtn>
    </StyledSearchForm>
  );
})

export default memo(SearchForm);