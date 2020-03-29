import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const GenreContext = createContext();

export const GenreProvider = (props) => {
  // props
  const { children } = props;

  // state
  const [ genres, setGenres ] = useState([]);
  
  // Add auth listener
  useEffect(() => {
    (async function requestAndSetGenres() {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const genresResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
      setGenres(genresResponse.data.genres);
    })();
  }, []);

  return (
    <GenreContext.Provider value={{ genres }} >
      {genres.length && 
        children
      }
    </GenreContext.Provider>
  )
}