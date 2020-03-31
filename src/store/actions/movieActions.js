export const addMovie = (user, movie) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('movies').doc().set({
      username: user.name,
      email: user.email,
      movieId: movie.id,
      rating: movie.rating,
      review: movie.review
    }).then(() => {
      dispatch({ type: 'MOVIE_ADDITION_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'MOVIE_ADDITION_ERROR', err });
    });
  }
}