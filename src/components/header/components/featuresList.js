import React, { memo } from 'react';
import { 
  StyledFeaturesList,
  Feature
} from '../style';
import AccountDropdown from './accountDropdown';

const FeaturesList = () => {
  return (
    <StyledFeaturesList>
      <Feature>
        <AccountDropdown />
      </Feature>
    </StyledFeaturesList>
  );
}

export default memo(FeaturesList);