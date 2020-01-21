import React, { memo } from 'react';
import { 
  StyledFeaturesList,
  Feature,
  FeatureButton
} from '../style';
import AccountDropdown from './accountDropdown';

const FeaturesList = (props) => {
  const { searchBtnRef } = props;

  return (
    <StyledFeaturesList>
      <Feature>
        <AccountDropdown searchBtnRef={searchBtnRef} />
      </Feature>
      {/* <Feature>

      </Feature> */}
    </StyledFeaturesList>
  );
}

export default memo(FeaturesList);