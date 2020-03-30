import React, { memo, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import MoviesResults from './components/moviesResults';
import ReactStars from 'react-rating-stars-component';
import Star from '../../svgs/star';

import { 
  Form,
  Title,
  MovieNameInputContainer,
  MovieNameInput,
  FormBody,
  Overlay
} from './style';

const ReviewForm = () => {
  const [ formFocused, setFormFocused ] = useState(false);
  const [ movieName, setMovieName ] = useState('');
  const [ movies, setMovies ] = useState([]);

  useEffect(function fetchMovies() {
    if (movieName === '') return;
    
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    axios.get(`https://api.themoviedb.org/3/search/multi?query=${movieName}&api_key=${apiKey}`)
    .then(response => {
      setMovies(response.data.results)
    });
  }, [ movieName ]);
   
  return (
    <>
      <Overlay 
        data-form-focused={formFocused} 
        role="presentation" 
        onClick={() => setFormFocused(false)}
      />

      <Form data-focused={formFocused}>
        <Title>Review Movie</Title>

        <FormBody>
          <MovieNameInputContainer>
            <MovieNameInput 
              aria-label="movie name"
              placeholder="Type the movie name .."
              value={movieName}
              onChange={event => setMovieName(event.target.value)}
              onFocus={() => setFormFocused(true)}
              list="reviewForm__moviesResults"
            />

            <MoviesResults movies={movies.slice(0, 10)} />
          </MovieNameInputContainer>

          <ReactStars
            size={32}
            count={5}
            half={true}
            emptyIcon={<Star fullness="empty" width="2rem" />}
            halfIcon={<Star fullness="half" width="2rem" />}
            filledIcon={<Star fullness="filled" width="2rem" />}
          />
        </FormBody>
      </Form>
    </>
  );
}

export default memo(ReviewForm);