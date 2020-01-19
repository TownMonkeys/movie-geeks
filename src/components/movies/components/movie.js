import React, { memo } from 'react';
import { 
  StyledMovie,
  StyledMovieHead,
  StyledMovieHeadImg,
  P,
  P2,
  H2,
  Tags,
  StyledMovieBody,
  StyledMovieImg,
  Time
} from '../style';

const Movie = (props) => {
  const { movie } = props;
  
  return (
    <StyledMovie>
     <StyledMovieHead>
      <StyledMovieHeadImg  src={movie.avatar}/>
        <P>{movie.user}</P>
      </StyledMovieHead>
      <StyledMovieBody>
         <StyledMovieImg  src={movie.cover}/>
         <H2>{movie.name}</H2>
         {
        movie['genre'].map((tag) => (
          <Tags>{tag}</Tags>
        ))
      }
         <P2>{movie.review}</P2>
         <Time>25 minutes ago</Time>
      </StyledMovieBody>
    </StyledMovie>
  );
}

export default memo(Movie);