import styled, { css } from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';
import { Link } from 'react-router-dom';

export const MoviesSection = styled.section`
  width: 30rem;
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
  padding: .6rem 0;
  display: flex;
  align-items: center;
`;

export const AvatarLink = styled(Link)`
  margin-right: .5rem;
`;

export const UserNameLink = styled(Link)`
  text-decoration: none;
  color: ${theme.text.default};
  font-weight: 500;
`;

export const Body = styled.div``;

const buttonStyles = css`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const MovieCoverButton = styled.button`
  ${buttonStyles}
  padding: 0;
  margin: 0 -1rem .8rem -1rem;
`;

export const MovieCover = styled.img`
  display: block;
  max-width: 100%;
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

export const Rating = styled.ul`
  ${listStyles}

  display: flex;
  margin: .7rem 0 0;
`;

export const StarItem = styled.li`
  width: 1rem;
  margin-right: .1rem;
`;

export const Review = styled.p`
  margin-top: .7rem;
`;

export const Hr = styled.hr`
  margin: 1.3rem 0 .7rem;
`;

export const Footer = styled.footer``;

export const LikeButton = styled.button`
  vertical-align: middle;
  width: 3rem;
  padding: .407rem .5rem;
  margin-left: -.5rem;
  ${buttonStyles}
`;

export const Likers = styled.a`
  display: inline-block;
  width: calc(100% - 3rem);
  vertical-align: middle;
  color: ${theme.text.grey};
  text-decoration: none;
  padding: .25rem 0;
`;

export const PostDate = styled.time`
  display: block;
  color: ${theme.text.grey};
  margin-top: .4rem;
  margin-bottom: 1rem;
`;
