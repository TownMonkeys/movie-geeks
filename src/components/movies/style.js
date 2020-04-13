import styled, { css } from 'styled-components/macro';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';
import { Link } from 'react-router-dom';

export const MoviesSection = styled.section`
  width: 30rem;
`;
export const Container = styled.section`
  position: absolute;
  right: 0;
  top: 0;
`;
export const Title = styled.h3`
  position: absolute;
  left: -200rem;
`;

const listStyles = css`
  list-style: none;
  padding-left: 0;
`;

export const List = styled.ul`
  ${listStyles}
  margin: 0;
`;

export const Item = styled.li``;

export const StyledMovie = styled.article`
  padding: 0 1rem;
  background-color: ${theme.bg.default};
  border: 1px solid ${theme.border.light};
  margin-bottom: 1rem;
  border-radius: ${measurements.borderRadius.default};
`;

export const Header = styled.header`
  padding: 0.6rem 0;
  display: flex;
  align-items: center;
  position: relative;
`;

export const AvatarLink = styled(Link)`
  margin-right: 0.5rem;
`;

export const UserNameLink = styled(Link)`
  text-decoration: none;
  color: ${theme.text.default};
  font-weight: 500;
`;

export const Body = styled.div`
  .ratingStars {
    margin-top: 0.7rem;
  }
`;

const buttonStyles = css`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const MovieCoverButton = styled.button`
  ${buttonStyles}
  // width: 100%;
  padding: 0;
  margin: 0 -1rem 0.8rem -1rem;
`;

export const MovieCover = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const MovieName = styled.h4`
  display: inline;
  line-height: 1.2;
  font-size: 1.7rem;
  margin: 0;
`;

export const Genre = styled.p`
  display: inline;
  color: ${theme.text.grey};
  margin-left: 1rem;
`;

export const Review = styled.p`
  margin-top: 0.7rem;
`;

export const Hr = styled.hr`
  margin: 1.3rem 0 0.7rem;
`;

export const Footer = styled.footer``;

export const LikeButton = styled.button`
  vertical-align: middle;
  width: 3rem;
  padding: 0.407rem 0.5rem;
  margin-left: -0.5rem;
  ${buttonStyles}
`;

export const Likers = styled.a`
  display: inline-block;
  width: calc(100% - 3rem);
  vertical-align: middle;
  color: ${theme.text.grey};
  text-decoration: none;
  padding: 0.25rem 0;
`;

export const PostDate = styled.time`
  display: block;
  color: ${theme.text.grey};
  margin-top: 0.4rem;
  margin-bottom: 1rem;
`;
/* start setting component */
export const Img = styled.img`
  max-width: 40%;
  display: inline-block;
  cursor: pointer;
  margin-left: 5em;
  margin-top: 2em;
`;
export const SettingContainer = styled.ul`
  background: #1c1e21;
  width: 100px;
  height: 100px;
  padding: 0;
  padding-left: 1.7em;
  padding-top: 0.3em;
  display: block;
  border-radius: 4px;
  position: relative;
  visibility: hidden;
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 13px solid #1c1e21;
    position: absolute;
    top: -10px;
    right: 0px;
  }
`;
export const SettingLi = styled.li`
  color: #f1f1f1;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 1.2em;
    cursor: pointer;
`;


/*
const StyledMyPart = styled(SettingContainer).attrs({
  className: "active"
})`
  &.active {
    visibility: visible;
  }
`;*/