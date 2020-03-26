import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const StyledHeader = styled.header`
  border-bottom: 1px solid ${theme.border.light};
  background-color: ${theme.bg.default};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Title = styled.h1`
  position: absolute;
  left: -200rem;
`;

export const Navigation = styled.nav`
  max-width: ${measurements.maxWidth.default};
  margin: auto;

  display: flex;
  align-items: center;
`;

export const NavTitle = styled.h2`
  position: absolute;
  left: -200rem;
`;

export const LogoLink = styled(Link)`
  display: flex;
`;

export const LogoImg = styled.img`
  width: 3rem;
  height: auto;
  padding: .35rem;
  margin-left: -.35rem; // To be aligned with the content
`;

export const StyledSearchForm = styled.form`
  display: flex;
  border: 1px solid ${theme.border.light};
  border-radius: .2rem;
  margin-right: auto;
`;

export const SearchInput = styled.input`
  width: 15rem;
  padding-left: .5rem;
  border: none;
  border-right: 1px solid ${theme.border.light};
`;

export const SearchButton = styled.button`
  display: flex;
  padding: 0;
  padding: .2rem .8rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color .1s;

  &:hover,
  &:focus {
    background-color: ${theme.bg.grey};
  }
`;

export const SearchIcon = styled.img`
  width: 1.5rem;
  height: auto;
  padding: .2rem;
`;

const listStyles = css`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const StyledFeaturesList = styled.ul`
  ${listStyles}
  
  height: 3rem;
  display: flex;
`;

export const Feature = styled.li`
  height: 100%;
  display: flex;

  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 22px;
      background-color: ${theme.border.light};
    }
  }
`;

const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  border: none;
`;

const featureButtonStyles = css`
  font-weight: bold;
  padding: 0 .8rem;
  transition: background-color .1s;

  &:hover,
  &:focus {
    background-color: ${theme.bg.grey};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
`;

export const DropdownToggler = styled.button`
  ${buttonStyles}
  ${featureButtonStyles}

  &[aria-expanded="true"] {
    background-color: ${theme.bg.grey};
  }
`;

export const UserName = styled.span`
  margin: 0 .4rem 0 .3rem;
`;

export const DownArrow = styled.img`
  width: .6rem;
`;

export const DropdownMenu = styled.ul`
  ${listStyles}
  display: ${(props) => props.visible ? 'block' : 'none'};
  background-color: #fff;
  border: 1px solid ${theme.border.light};
  position: absolute;
  top: 3rem;
  right: 0;
  min-width: 100%;
  box-shadow: 0 5px 5px rgba(0,0,0,.2);
`;

export const MenuItemContainer = styled.li``;

const menuItemStyles = css`
  display: block;
  padding: .5rem .8rem;

  &:hover,
  &[tabindex="0"] {
    background-color: ${theme.bg.grey};
  }
`;

export const MenuItemLink = styled(Link)`
  ${menuItemStyles}
  padding: .5rem .8rem;
  text-decoration: none;
  color: ${theme.text.default};
`;

export const MenuItemButton = styled.button`
  ${menuItemStyles}
  width: 100%;
  text-align: left;
  font-size: 1rem;
  font-family: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &[tabindex="0"] {
    background-color: ${theme.bg.grey};
  }
`;

export const FeatureButton = styled.button`
  ${buttonStyles}
  ${featureButtonStyles}
`;

export const StyledCommunicationMediums = styled.ul`
  ${listStyles}

  height: 3rem;
  display: flex;
  margin-left: 2rem;
`;

export const CommunicationMedium = styled.li`
  height: 100%;
  display: flex;
`;

export const CommunicationButton = styled.button`
  ${buttonStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  position: relative;

  &:hover,
  &:focus {
    .communicationSvgPath {
      fill: ${theme.text.default};
    }
  }
`;

export const NotificationsNumber = styled.span`
  position: absolute;

  color: #fff;
  background-color: ${theme.bg.pink};
  padding: .1rem;
  border-radius: .2rem;
  top: .3rem;
  right: .65rem;
`;

export const NotificationsWord = styled.span`
  position: absolute;
  left: -200rem;
`;