import styled from 'styled-components';

export const MoviesSection = styled.section`
  height:100%;
  width:100%;
`;

export const Title = styled.h3`
  position: absolute;
  left: -200rem;
`;

export const StyledMoviesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  padding-top:2em;
  padding-bottom:2em;

`;

export const StyledMovie = styled.li`
 background-color:#fff;
 height:auto;
 box-shadow: -1px 0px 7px -2px rgba(0,0,0,0.75);
 width:500px;
 margin-bottom:2em;
 padding-bottom:0.5em;
`;
export const StyledMovieHead =styled.div`
   width:100%;
   height:80px;
   position:relative;
   padding:0.5em 1em;
`;
export const StyledMovieHeadImg = styled.img`
    width:60px;
    height:60px;
    border-radius:100%;
    box-shadow:0px 0px 7px 0px rgba(23, 50, 50, 0.75);
`;
export const P = styled.p`
    color:#000;
    display:inline-block;
    position:absolute;
    padding-left:0.5em;
    font-size:1.2em;
    font-weight:bold;
`;
export const StyledMovieBody = styled.div`
   width:100%;
   height:calc(100% - 80px);
   
`;
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
export const Time = styled.p`
   color:#555;
   padding-left:1em;
`;