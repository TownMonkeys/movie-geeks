import React, { memo, useState, useRef, useEffect } from 'react';
import axios from 'axios';
import MoviesResults from './components/moviesResults';

import { 
  Container,
  Form,
  Title,
  MovieNameInput,
  FormBody
} from './style';

const ReviewForm = () => {
  const [movies, setMovies] = useState([]);
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
    setMovies([]);
  }

  function focusInput(){
    axios.get(`https://api.themoviedb.org/3/search/multi?query=${inputElMovie.current.value}&api_key=400225a1886f38d9cf3c934d6a756c4d`)
      .then(res => {
        let newMovies = res.data.results;
        setMovies(newMovies);
    })
  }

  useEffect(() => {
   

  }, [movies.inputElMovie]);
   
  return (
    <Container> 
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
    </Container>
  );
}

export default memo(ReviewForm);