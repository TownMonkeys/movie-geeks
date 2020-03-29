import React, { memo, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import MoviesResults from './components/moviesResults';

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

            <MoviesResults movies={movies.slice(0, 8)} expanded={moviesListExpanded} />
          </MovieNameInputContainer>
        </FormBody>
      </Form>
    </>
  );
}

export default memo(ReviewForm);