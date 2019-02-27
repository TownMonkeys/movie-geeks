import React from 'react';
import user from '../../images/user.jpg';
import './MobileSidebar.scss';

const MobileSidebar = React.forwardRef((props, sideFirstTabTarget) => {
  const {mobileSidebarOpened, closeMobileSidebar} = props;

  const sideLastTabTarget = React.createRef();

  const handleKeyDown = (e) => {
    const esc = e.keyCode === 27;
    const tab = e.keyCode === 9;
    if (esc) { 
      closeMobileSidebar();
    } else if (tab && e.shiftKey && e.target === sideFirstTabTarget.current) {
      e.preventDefault();
      sideLastTabTarget.current.focus();
    } else if (tab && !e.shiftKey && e.target === sideLastTabTarget.current) {
      e.preventDefault();
      sideFirstTabTarget.current.focus();
    }
  }

  return (
    <div 
      className="mobileSideBar header__mobileSideBar" 
      id="mobileSideBar"
      onKeyDown={handleKeyDown}
    >
      <nav className="mobileNavigation" role="navigation">
        <h2 className="mobileNavigation__heading">Side Navigaion</h2>
        <ul className="list mobileNavigationMenu">
          <li className="mobileNavigationMenu__item">
            <a 
              href="#" 
              className="link mobileNavigationMenu__link" 
              tabIndex={mobileSidebarOpened ? '0' : '-1'}
              ref={sideFirstTabTarget}
            >
            <img className="avatar mobileNavigationMenu__avatar avatar_size_small" src={user} alt="User Photo"/>
              <span>Moaaz</span>
            </a>
          </li>
          <li className="mobileNavigationMenu__item">
            <a 
              href="#" 
              className="link mobileNavigationMenu__link" 
              tabIndex={mobileSidebarOpened ? '0' : '-1'}
            >Add Movie</a>
          </li>
        </ul>
      </nav>

      <button 
        className="button authButton mobileSideBar__signOut" 
        type="button" 
        tabIndex={mobileSidebarOpened ? '0' : '-1'}
        ref={sideLastTabTarget}
      >
        Sign Out
      </button>
    </div>
  );
})

export default MobileSidebar;