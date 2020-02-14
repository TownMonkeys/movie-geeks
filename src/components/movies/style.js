import styled, { css } from 'styled-components';
import theme from '../../shared/theme';

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
  margin: 0;
`;

export const List = styled.ul`
  ${listStyles}
`;

export const Item = styled.li``;

export const StyledMovie = styled.article`
  padding: 0 1rem;
  background-color: ${theme.bg.default};
  border: 1px solid ${theme.border.light};
  margin-bottom: 1rem;
`;

export const Header = styled.header`
  padding: .6rem 0;
  display: flex;
  align-items: center;
`;

export const AvatarLink = styled.a`
  margin-right: .5rem;
`;

export const UserNameLink = styled.a`
  text-decoration: none;
  color: ${theme.text.default};
  font-weight: 500;
`;

export const Body = styled.div``;

export const MovieCoverButton = styled.button`
  border: none;
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
`;

export const StarItem = styled.li``;

export const H2 = styled.h3`
   color:#000;
   margin-left:1em;
   display:inline-block;
`;
export const StyledMovieImg = styled.img`
  width:100%;
  height:300px;
`;

export const P2 = styled.p`
    color:#000;
    padding-left:1em;
    font-size:1.2em;
    font-weight:bold;
`;
export const Tags = styled.span`
   color:#555;
   padding-left:0.5em;
`;

export const Footer = styled.footer``;

export const Time = styled.p`
   color:#555;
   padding-left:1em;
`;
