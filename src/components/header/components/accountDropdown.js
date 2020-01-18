import React, { memo, useState, useCallback, useEffect } from 'react';
import { 
  DropdownContainer,
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
  // Account menu expanded / collapsed
  const [ menuExpanded, setMenuExpanded ] = useState(false);

  const expandMenu = useCallback(
    () => {
      setMenuExpanded(true);
    },
    []
  )

  const collapseMenu = useCallback(
    () => {
      setMenuExpanded(false);
    },
    []
  )

  // active menu item
  const [ activeIndex, setActiveIndex ] = useState(0);

  // useEffect();

  return (
    <DropdownContainer
      onMouseEnter={expandMenu}
      onMouseLeave={collapseMenu}
    >
      <DropdownToggler
        aria-label="toggle account menu" 
        aria-haspopup="true" 
        aria-expanded={menuExpanded} 
        aria-controls="accountMenu"
        onFocus={expandMenu}
      >
        <Avatar user={user} size={'small'} />
        <UserName>{user.name}</UserName>
        <DownArrow src={downArrow} alt="Down arrow" />
      </DropdownToggler>

      <DropdownMenu 
        id="accountMenu"
        role="menu"
        aria-label="account menu"
        aria-activedescendant={`item${activeIndex+1}`}
        visible={menuExpanded}
      >
        <MenuItem role="menuitem" id="item1" tabIndex={activeIndex === 0 ? 0 : -1}>Profile</MenuItem>
        <MenuItem role="menuitem" id="item2" tabIndex={activeIndex === 1 ? 0 : -1}>Watchlist</MenuItem>
        <MenuItem role="menuitem" id="item3" tabIndex={activeIndex === 2 ? 0 : -1}>Sign Out</MenuItem>
      </DropdownMenu>
    </DropdownContainer>
  );
}

export default memo(AccountDropdown);