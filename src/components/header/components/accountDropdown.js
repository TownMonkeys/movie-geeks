import React, { memo } from 'react';
import { 
  DropdownToggler,
  UserName,
  DownArrow,
  DropdownMenu,
  MenuItem
} from '../style';
import avatar from '../../../images/avatar.svg';
import downArrow from '../../../images/down-arrow.svg';
import Avatar from '../../avatar';

const user = {
  name: 'Yurio',
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

      {/* <DropdownMenu 
        id="accountMenu"
        role="menu"
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Watchlist</MenuItem>
        <MenuItem>Logout</MenuItem>
      </DropdownMenu> */}
    </React.Fragment>
  );
}

export default memo(AccountDropdown);