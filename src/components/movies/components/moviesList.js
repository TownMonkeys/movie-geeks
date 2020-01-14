import React, { memo } from 'react';
import { 
  StyledMoviesList
} from '../style';
import Movie from './movie';
import avatar from '../../images/avatar.svg';
import harryPotterCover from '../../images/harry-potter.jpeg';
import beautifulMindCover from '../../images/beautiful-mind.jpeg';

const movies = [
  {
    id: 1,
    user: 'Mohammed Shahawy',
    avatar,
    cover: harryPotterCover,
    name: 'Harry Potter and the Sorcerer\'s Stone',
    genre: ['Adventure', 'Family'],
    rating: 5,
    review: 'As good an adaption as could ever be expected',
    Likes: 24
  },
  {
    id: 2,
    user: 'Saher Elgendy',
    avatar,
    cover: beautifulMindCover,
    name: 'A Beautiful Mind',
    genre: ['Biography', 'Drama'],
    rating: 4,
    review: 'A beautifully written, acted, and crafted movie.',
    Likes: 13
  }
];

const MoviesList = () => {
  return (
    <StyledMoviesList>
      {
        movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))
      }
    </StyledMoviesList>
  );
}

export default memo(MoviesList);