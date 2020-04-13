import React, { memo, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import Setting from './setting.js';
import {
  StyledMovie,
  Header,
  AvatarLink,
  UserNameLink,
  Body,
  MovieCoverButton,
  MovieCover,
  MovieName,
  Genre,
  Review,
  Hr,
  Footer,
  LikeButton,
  Likers,
  PostDate,
} from '../style';
import Avatar from '../../avatar';
import Star from '../../../svgs/star';
import LikeSvg from '../../../svgs/like';
import ReactStars from '../../reactStars';
import { deleteMovie } from '../../../store/actions/movieActions';
import { connect } from 'react-redux';

const Movie = (props) => {
  // props
  const { movie: [ movieFirebaseId, movieFirebaseData ], deleteMovie } = props;

  // state
  const [ movieApiData, setMovieApiData ] = useState(null);
  const [ liked, setLiked ] = useState(false);

  useEffect(function loadMovieData() {
    const { movieId } = movieFirebaseData;
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      )
      .then((response) => {
        const movieApiData = response.data;
        setMovieApiData(movieApiData);
      });
  }, []);

  const like = useCallback(() => {
    setLiked(true);
  }, []);

  const toggleLike = useCallback(() => {
    setLiked(!liked);
  }, [liked]);

  return (
    <>
      {movieApiData && (
        <StyledMovie>
          <Header>
            <AvatarLink to={`/user/${movieFirebaseData.username}`}>
              <Avatar email={movieFirebaseData.email} size={'3rem'} />
            </AvatarLink>
            <UserNameLink to={`/user/${movieFirebaseData.username}`}>
              {movieFirebaseData.username}
            </UserNameLink>
            <Setting deleteMovie={() => deleteMovie(movieFirebaseId)} />
          </Header>

          <Body>
            <MovieCoverButton
              aria-label="double click to like"
              onDoubleClick={like}
              onMouseDown={(e) => e.preventDefault()}
            >
              <MovieCover
                className="movie__cover"
                src={`http://image.tmdb.org/t/p/w500/${movieApiData.poster_path}`}
                alt=""
              />
            </MovieCoverButton>
            <MovieName>{movieApiData.title || movieApiData.name}</MovieName>
            <Genre>
              {movieApiData.genres.map((genre) => genre.name).join(', ')}
            </Genre>
            <ReactStars
              edit={false}
              value={movieFirebaseData.rating}
              size={16}
              count={5}
              half={true}
              emptyIcon={<Star fullness="empty" width="1rem" />}
              halfIcon={<Star fullness="half" width="1rem" />}
              filledIcon={<Star fullness="filled" width="1rem" />}
              className="ratingStars"
            />
            <Review>{movieFirebaseData.review}</Review>
          </Body>

          <Hr />

          <Footer>
            <LikeButton
              aria-label="like"
              onClick={toggleLike}
              onMouseDown={(e) => e.preventDefault()}
            >
              <LikeSvg filled={liked} />
            </LikeButton>
            <Likers href="#">
              {/* {movie.lastLiker} and {movie.likes} others */}
            </Likers>
            <PostDate>25 minutes ago</PostDate>
          </Footer>
        </StyledMovie>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: id => dispatch(deleteMovie(id))
  }
}

export default connect(null, mapDispatchToProps)(memo(Movie));
