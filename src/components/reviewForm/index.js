import React, { memo,useState,useRef ,Fragment  } from 'react';
import axios from 'axios';

import { 
  Container,
  Form,
  Title,
  MovieNameInput,
  FormBody,
  ResultNameInput,
  ResultNameInputLi,
  SpanConatiner,
  Ptitle,
  Img
} from './style';

const ReviewForm = () => {
    const [movies, setMovies] = useState([]);
    const inputElMovie = useRef(null);

    function moviesFetch(e){
      e.preventDefault();
      
      axios.get(`https://api.themoviedb.org/3/search/multi?query=${inputElMovie.current.value}&api_key=400225a1886f38d9cf3c934d6a756c4d`)
      .then(res => {
        const newMovies = res.data.results;
        setMovies(newMovies);
        console.log(newMovies);
      })
    }
   
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
          onKeyUp={moviesFetch}
        />
       
      </FormBody>
    </Form>
        <ResultNameInput>
        { 
          movies.map((movie,i) => 
          <ResultNameInputLi key={i}>{
            <Fragment> 
             <Img 
               src={"https://image.tmdb.org/t/p/original/"+ movie.poster_path || "https://image.tmdb.org/t/p/original/"+movie.backdrop_path || "https://media.falsoo.com/large/2019/12/16/201912160311591159.jpg" } 
               alt="Movie Poster" />     
             <SpanConatiner>
             <Ptitle>{movie.title || movie.name}</Ptitle>
             <p>{movie.media_type}</p>
             <p>{movie.release_date || movie.first_air_date}</p>
             </SpanConatiner> 
           </Fragment>
        }
        </ResultNameInputLi>
        )}
      </ResultNameInput>
    </Container>
  );
}

export default memo(ReviewForm);