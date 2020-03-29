import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
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
  // refs
  const MovieNameInputContainerRef = useRef(null);

  // state
  /* form */
  const [ formFocused, setFormFocused ] = useState(false);
  
  /* movie name input */
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
  
  /* movies list */
  const [ moviesListExpanded, setMoviesListExpanded ] = useState(false);
  const handleMoviesListClickOutside = useCallback((event) => {
    const { target } = event;

    if (!MovieNameInputContainerRef.current.contains(target) && moviesListExpanded) {
      setMoviesListExpanded(false);
    }
  }, [ moviesListExpanded ]);
  useEffect(() => {
    document.addEventListener('click', handleMoviesListClickOutside);
    return () => {
      document.removeEventListener('click', handleMoviesListClickOutside);
    }
  }, [ moviesListExpanded ]);

  const handleMovieNameInputFocus = useCallback(() => {
    setFormFocused(true);
    setMoviesListExpanded(true);
  }, []);
   
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
          <MovieNameInputContainer ref={MovieNameInputContainerRef} >
            <MovieNameInput 
              type="search"
              aria-label="movie name"
              placeholder="Type the movie name .."
              value={movieName}
              onChange={event => setMovieName(event.target.value)}
              onFocus={handleMovieNameInputFocus} 
            />

            <MoviesResults movies={movies} expanded={moviesListExpanded} />
          </MovieNameInputContainer>
        </FormBody>
      </Form>
    </>
  );
}

export default memo(ReviewForm);