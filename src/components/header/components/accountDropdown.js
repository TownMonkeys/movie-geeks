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

const AccountDropdown = (props) => {
  /* props --- */
  const { searchButtonRef } = props;

  /* refs --- */
  const containerRef = useRef();
  const togglerRef   = useRef();
  const itemsRefs    = useRef([]);

  /* functionalities --- */
  // Menu toggling
  const [ menuExpanded, setMenuExpanded ] = useState(false);

  const expandMenu = useCallback(() => {
    setMenuExpanded(true);
  }, []);

  const collapseMenu = useCallback(() => {
    setMenuExpanded(false);
  }, []);

  useEffect(() => {
    const togglerIsFocused = togglerRef.current === document.activeElement;
    const thereIsActiveIndex = Number.isInteger(activeIndex);
    if (togglerIsFocused) {
      if (thereIsActiveIndex) {
        itemsRefs.current[activeIndex].focus();
      } else {
        setActiveIndex(0);
        itemsRefs.current[0].focus();
      }
    }
  }, [menuExpanded]);

  // active menu item 
  const [ activeIndex, setActiveIndex ] = useState(null);
  
  const handleMenuKeyDown = useCallback((event) => {
    const keys = {
      up   : 38,
      down : 40,
      tab  : 9,
      esc  : 27
    };
    const { keyCode } = event;
    const lastIndex = itemsRefs.current.length - 1;

    const moveToIndex = (newActiveIndex) => {
      event.preventDefault();
      setActiveIndex(newActiveIndex);
      itemsRefs.current[newActiveIndex].focus();
    };
    
    if (keyCode === keys.up) { // up
      const isFirstIndex = activeIndex === 0;
      if (isFirstIndex) {
        moveToIndex(lastIndex);
      } else {
        moveToIndex(activeIndex - 1);
      }
    } else if (keyCode === keys.down) { // down
      const isLastIndex = activeIndex === lastIndex;
      if (isLastIndex) {
        moveToIndex(0);
      } else {
        moveToIndex(activeIndex + 1);
      }
    } else if (keyCode === keys.esc || (keyCode === keys.tab && event.shiftKey)) { // esc || tab+shift
      event.preventDefault();
      collapseMenu();
      searchButtonRef.current.focus();
    } else if (keyCode === keys.tab) { // tab
      collapseMenu();
    } 
  }, [ activeIndex ]);

  const handleMenuMouseEnter = useCallback(() => {
    const thereIsFocusedItem = Number.isInteger(activeIndex);
    if (thereIsFocusedItem) {
      setActiveIndex(null);
      itemsRefs.current[activeIndex].blur();
    }
  }, [activeIndex]);

  const handleTogglerMouseEnter = useCallback(() => {
    setActiveIndex(null);
    expandMenu();
  }, []);

  // handle click outside
  const handleClickOutside = useCallback((event) => {
    const { target } = event;
    if (!containerRef.current.contains(target) && menuExpanded) {
      collapseMenu();
    }
  }, [ menuExpanded ])
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuExpanded])

  return (
    <DropdownContainer
      onMouseEnter={expandMenu}
      onMouseLeave={collapseMenu}
      ref={containerRef}
    >
      <DropdownToggler
        aria-label="toggle account menu" 
        aria-haspopup="true" 
        aria-expanded={menuExpanded} 
        aria-controls="accountMenu"
        onFocus={expandMenu}
        onMouseEnter={handleTogglerMouseEnter}
        ref={togglerRef}
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
        onKeyDown={handleMenuKeyDown}
        onMouseEnter={handleMenuMouseEnter}
      >
        {
          ['Profile', 'Watchlist', 'Sign Out'].map((item, index) => (
            <MenuItem
              key={index}
              role="menuitem"
              id={`item${index+1}`}
              tabIndex={activeIndex === index ? 0 : -1}
              ref={(el) => itemsRefs.current[index] = el}
            >{item}</MenuItem>
          ))
        }
      </DropdownMenu>
    </DropdownContainer>
  );
}

export default memo(AccountDropdown);