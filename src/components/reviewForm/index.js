import React, { memo, useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { 
  Container,
  Form,
  Title,
  MovieNameInput,
  FormBody,
  ResultNameInput,
  Movie,
  MovieConatiner,
  MovieTitle,
  Thumbnail,
  MovieInfo,
  MovieReleaseDate
} from './style';

const ReviewForm = () => {
  const [movies, setMovies] = useState([]);
  const inputElMovie = useRef(null);
  
  function moviesFetch(e){
    console.log('test');
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
        </FormBody>
      </Form>

      <ResultNameInput>
        { 
          movies.map((movie,i) => 
            <Movie key={i}>
              <Thumbnail 
                src={
                    movie.poster_path ?   `https://image.tmdb.org/t/p/original/${movie.poster_path}` :
                    movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` :
                                          "https://media.falsoo.com/large/2019/12/16/201912160311591159.jpg"
                } 
                alt="Movie Poster" 
              />     
              <MovieConatiner>
                <MovieTitle>{movie.title || movie.name}</MovieTitle>
                <MovieReleaseDate>{movie.release_date || movie.first_air_date}</MovieReleaseDate>
              </MovieConatiner> 
            </Movie>
          )
        }
      </ResultNameInput>
    </Container>
  );
}

export default memo(ReviewForm);