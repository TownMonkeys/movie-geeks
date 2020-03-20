import React, { memo, useState, useCallback, useEffect, useRef, useContext } from 'react';
import { AuthContext } from '../../../auth';
import { 
  DropdownContainer,
  DropdownToggler,
  UserName,
  DownArrow,
  DropdownMenu,
  MenuItem,
  MenuItemLink
} from '../style';
import downArrow from '../../../images/down-arrow.svg';
import Avatar from '../../avatar';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
import { ConditionalWrapper } from '../../../helpers';

const Item = (props) => {
  const { index, activeIndex, itemsRefs, link, handleClick, value } = props;

  return (
    <MenuItem
      role='menuitem'
      id={`item${index+1}`}
      tabIndex={activeIndex === index ? 0 : -1}
      ref={(el) => itemsRefs.current[index] = el}
      onClick={!link ? handleClick : null}
    >
      {value}
    </MenuItem>
  )
}

const AccountDropdown = (props) => {
  /* props --- */
  const { searchButtonRef, signOut, profile } = props;

  /* dom refs --- */
  const containerRef = useRef();
  const togglerRef   = useRef();
  const itemsRefs    = useRef([]);

  /* user --- */
  const { user } = useContext(AuthContext);

  /* dropdown collapse timer --- */
  const dropdownCollapseTimer = useRef();

  /* functionalities --- */
  // Mouse enter / leave
  const [ dropdownHovered, setDropdownHovered ] = useState(false);
  const dropdownHoveredRef = useRef(dropdownHovered); // For its use inside a setTimeOut callback

  const handleMouseEnter = useCallback(() => {
    clearTimeout(dropdownCollapseTimer.current);
    setDropdownHovered(true);
    dropdownHoveredRef.current = true; 
    expandMenu();
  }, []);

  const handleMouseLeave = useCallback(() => {
    setDropdownHovered(false);
    dropdownHoveredRef.current = false;

    dropdownCollapseTimer.current = setTimeout(() => {
      if (!dropdownHoveredRef.current) {
        collapseMenu();
      }
    }, 600);
  }, [dropdownHovered]);

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

  const items = [
    { value: 'Profile',   link: true,   to: `user/${profile.username}` },
    { value: 'Watchlist', link: true,   to: `` },
    { value: 'signout',   link: false,  handleClick: signOut }
  ];

  return (
    <DropdownContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <Avatar email={user.email} size={'2rem'} />
        <UserName>{profile.firstName}</UserName>
        <DownArrow src={downArrow} alt="Down arrow" />
      </DropdownToggler>

      <DropdownMenu 
        id="accountMenu"
        role="menu"
        aria-label="account menu"
        aria-activedescendant={Number.isInteger(activeIndex) ? `item${activeIndex+1}` : null}
        visible={menuExpanded}
        onKeyDown={handleMenuKeyDown}
        onMouseEnter={handleMenuMouseEnter}
      >
        {
          items.map((item, index) => (
            <ConditionalWrapper
              key={index}
              condition={item.link}
              wrapper={children => <MenuItemLink to={item.to}>{children}</MenuItemLink>}
            >
              <Item
                index={index}
                id={`item${index+1}`}
                itemsRefs={itemsRefs}
                type={item.type}
                to={item.to}
                handleClick={item.handleClick}
                value={item.value}
              >{item.value}</Item>
            </ConditionalWrapper>
          ))
        }
      </DropdownMenu>
    </DropdownContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dipatch) => {
  return {
    signOut: () => dipatch(signOut())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AccountDropdown));