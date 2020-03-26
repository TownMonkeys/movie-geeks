import React, { memo, useState, useRef, useEffect } from 'react';
import axios from 'axios';
import MoviesResults from './components/moviesResults';

import { 
  Form,
  Title,
  MovieNameInput,
  FormBody,
  Overlay
} from './style';

const ReviewForm = () => {
  const [ formFocused, setFormFocused ] = useState(false);
  const [ movies, setMovies ] = useState([]);
  const inputElMovie = useRef(null);
  
  function moviesFetch(e){
    e.preventDefault();

    if (inputElMovie.current.value) {
      console.log(inputElMovie.current.value);
      axios.get(`https://api.themoviedb.org/3/search/multi?query=${inputElMovie.current.value}&api_key=400225a1886f38d9cf3c934d6a756c4d`)
      .then(res => {
        let newMovies = res.data.results;
        console.log(newMovies);
        setMovies(newMovies);
      })
    } else {
      setMovies([]);
    }
  }

  function blurInput(){
    setFormFocused(false);

    setMovies([]);
  }

  function focusInput(){
    setFormFocused(true);

    axios.get(`https://api.themoviedb.org/3/search/multi?query=${inputElMovie.current.value}&api_key=400225a1886f38d9cf3c934d6a756c4d`)
      .then(res => {
        let newMovies = res.data.results;
        setMovies(newMovies);
    })
  }

  useEffect(() => {
   

  }, [movies.inputElMovie]);
   
  return (
    <>
      <Overlay data-focused={formFocused} role="presentation" />
      <Form>
        <Title>Review Movie</Title>

        <FormBody>
          <MovieNameInput 
            type="search"
            aria-label="movie name"
            placeholder="Type the movie name .."
            ref={inputElMovie}
            onChange={moviesFetch}
            onFocus={focusInput} 
            onBlur={blurInput}
          />

          <MoviesResults movies={movies} />
        </FormBody>
      </Form>
    </>
  );
}

export default memo(ReviewForm);