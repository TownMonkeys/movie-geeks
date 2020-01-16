import React, { memo } from 'react';
import { 
  StyledFeaturesList,
  Feature,
  FeatureButton
} from '../style';
import AccountDropdown from './accountDropdown';

const FeaturesList = () => {
  return (
    <StyledFeaturesList>
      <Feature>
        <AccountDropdown />
      </Feature>
      <Feature>

      </Feature>
    </StyledFeaturesList>
  );
}

export default memo(FeaturesList);