import React, { memo, useState, useCallback, useEffect, useRef } from 'react';
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

// Custom hook to get old values
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const AccountDropdown = () => {
  // Refs
  const itemsRefs = [useRef(), useRef(), useRef()];

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

  const prevMenuExpanded = usePrevious(menuExpanded);
  useEffect(() => {
    if (menuExpanded && !prevMenuExpanded) {
      itemsRefs[activeIndex].current.focus();
    }
  }, [menuExpanded]);

  // active menu item
  const [ activeIndex, setActiveIndex ] = useState(0);
  
  const handleKeyDown = useCallback((event) => {
    const keys = {
      up   : 38,
      down : 40,
      tab  : 9,
      shift: 16,
      esc  : 27
    };
    const { keyCode } = event;

    const moveToIndex = (newActiveIndex) => {
      event.preventDefault();
      setActiveIndex(newActiveIndex);
      itemsRefs[newActiveIndex].current.focus();
    };
    
    if (keyCode === keys.up) {
      const isFirstIndex = activeIndex === 0;
      if (isFirstIndex) {
        moveToIndex(2);
      } else {
        moveToIndex(activeIndex - 1);
      }
    } else if (keyCode === keys.down) {
      const isLastIndex = activeIndex === 2;
      if (isLastIndex) {
        moveToIndex(0);
      } else {
        moveToIndex(activeIndex + 1);
      }
    } else if (keyCode === keys.esc || keyCode === keys.tab) {
      collapseMenu();
      if (event.shiftKey) {
        console.log('test');
      }
    } 
  }, [ activeIndex ]);

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
        onKeyDown={handleKeyDown}
      >
        <MenuItem role="menuitem" id="item1" tabIndex={activeIndex === 0 ? 0 : -1} ref={itemsRefs[0]}>Profile</MenuItem>
        <MenuItem role="menuitem" id="item2" tabIndex={activeIndex === 1 ? 0 : -1} ref={itemsRefs[1]}>Watchlist</MenuItem>
        <MenuItem role="menuitem" id="item3" tabIndex={activeIndex === 2 ? 0 : -1} ref={itemsRefs[2]}>Sign Out</MenuItem>
      </DropdownMenu>
    </DropdownContainer>
  );
}

export default memo(AccountDropdown);