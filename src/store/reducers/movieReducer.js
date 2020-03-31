import avatar from '../../images/avatar-fallback.png';
import harryPotterCover from '../../images/harry-potter.jpeg';
import beautifulMindCover from '../../images/beautiful-mind.jpeg';

const initState = {
  movieError: null
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case 'MOVIE_ADDITION_SUCCESS':
      console.log('MOVIE_ADDITION_SUCCESS');
      return {
        ...state,
        movieError: null
      }
    case 'MOVIE_ADDITION_ERROR':
      console.log('MOVIE_ADDITION_SUCCESS');
      return {
        ...state,
        movieError: action.err.message
      }
    default:
      return state;
  }
};

export default movieReducer;