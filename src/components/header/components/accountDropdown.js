import React, { memo } from 'react';
import { 
  DropdownToggler,
  UserName,
  DownArrow
} from '../style';
import avatar from '../../../images/avatar.svg';
import downArrow from '../../../images/down-arrow.svg';
import Avatar from '../../avatar';

const user = {
  name: 'Yuri',
  avatar
};

const AccountDropdown = () => {
  return (
    <React.Fragment>
      <DropdownToggler
        aria-label="toggle account menu" 
        aria-haspopup="true" 
        aria-expanded={false} 
        aria-controls="accountMenu"
      >
        <Avatar user={user} size={'small'} />

        <UserName>{user.name}</UserName>

        <DownArrow src={downArrow} alt="Down arrow" />
      </DropdownToggler>
    </React.Fragment>
  );
}

export default memo(AccountDropdown);