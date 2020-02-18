import React, { memo } from 'react';
import { 
  StyledFeaturesList,
  Feature,
  FeatureButton
} from '../style';
import AccountDropdown from './accountDropdown';

const FeaturesList = (props) => {
  const { searchButtonRef } = props;

  return (
    <StyledFeaturesList>
      <Feature>
        <AccountDropdown searchButtonRef={searchButtonRef} />
      </Feature>
      <Feature>
        <FeatureButton>Find Movie</FeatureButton>
      </Feature>
    </StyledFeaturesList>
  );
}

export default memo(FeaturesList);