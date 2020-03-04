import React, { memo,useState,useRef  } from 'react';
import axios from 'axios';

import { 
  Form,
  Title,
  MovieNameInput,
  FormBody
} from './style';

const ReviewForm = () => {
    const [movies, setMovies] = useState(0);
    const inputElMovie = useRef(null);

    function moviesFetch(e){
      e.preventDefault();
      
      axios.get(`https://api.themoviedb.org/3/search/multi?query=${inputElMovie.current.value}&api_key=400225a1886f38d9cf3c934d6a756c4d`)
      .then(res => {
        const newMovies = res.data;
        setMovies({ newMovies });
        console.log(newMovies);
      })
    }
   
  return (
    <Form>
      <Title>Review Movie</Title>

      <FormBody>
        <MovieNameInput 
          type="search"
          aria-label="movie name"
          placeholder="Type the movie name .."
          ref={inputElMovie}
          onKeyUp={moviesFetch}
        />
 
      </FormBody>
    </Form>
  );
}

export default memo(ReviewForm);