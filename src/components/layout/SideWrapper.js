import React from 'react';
import user from '../../images/user.jpg';

const SideWrapper = React.forwardRef((props, sideFirstTabTarget) => {
  const {sideWrapperOpened, closeSideWrapper} = props;
  const sideLastTabTarget = React.createRef();

  const handleKeyDown = (e) => {
    const esc = e.keyCode === 27;
    const tab = e.keyCode === 9;
    if (esc) { 
      closeSideWrapper();
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
      className="sideWrapper" 
      id="sideWrapper"
      onKeyDown={handleKeyDown}
    >
      <nav className="sideNav" role="navigation">
        <h2 className="sideNav__heading">Side Navigaion</h2>
        <ul className="list sideNavMenu">
          <li className="sideNavMenu__item">
            <a 
              href="#" 
              className="link sideNavMenu__link" 
              tabIndex={sideWrapperOpened ? '0' : '-1'}
              ref={sideFirstTabTarget}
            >
            <img className="avatar sideNavMenu__avatar" src={user} alt="User Photo"/>
              <span>Moaaz</span>
            </a>
          </li>
          <li className="sideNavMenu__item">
            <a 
              href="#" 
              className="link sideNavMenu__link" 
              tabIndex={sideWrapperOpened ? '0' : '-1'}
            >Add Movie</a>
          </li>
        </ul>
      </nav>

      <button 
        className="button authButton mobile__signOut" 
        type="button" 
        tabIndex={sideWrapperOpened ? '0' : '-1'}
        ref={sideLastTabTarget}
      >
        Sign Out
      </button>
    </div>
  );
})

export default SideWrapper;