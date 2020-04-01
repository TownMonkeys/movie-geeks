import React, { memo, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
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
  PostDate
} from '../style';
import Avatar from '../../avatar';
import Star from '../../../svgs/star';
import LikeSvg from '../../../svgs/like';
import avatar from '../../../images/avatar-fallback.png';
import ReactStars from 'react-rating-stars-component';

const user = {
  name: 'Yurio',
  avatar
};

const Movie = (props) => {
  // props
  const { movie } = props;

  // state
  const [ movieData, setMovieData ] = useState(null);
  const [ liked, setLiked ] = useState(false);

  useEffect(function loadMovieData() {
    const { movieId } = movie;
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(response => {
      const movieData = response.data;
      setMovieData(movieData);
    })
  }, []);

  const like = useCallback(() => {
    setLiked(true);
  }, []);

  const toggleLike = useCallback(() => {
    setLiked(!liked);
  }, [ liked ]);
  
  return (
    <>
      {movieData && <StyledMovie>
        <Header>
          <AvatarLink to={`/user/${movie.username}`}>
            <Avatar email={movie.email} size={'3rem'} />
          </AvatarLink>
          <UserNameLink to={`/user/${movie.username}`}>{movie.username}</UserNameLink>
        </Header>

        <Body>
          <MovieCoverButton 
            aria-label="double click to like"
            onDoubleClick={like}
            onMouseDown={(e) => e.preventDefault()}
          >
            <MovieCover className="movie__cover" src={`http://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt="" />
          </MovieCoverButton>
          <MovieName>{movieData.title || movieData.name}</MovieName>
          <Genre>{movieData.genres.map(genre => genre.name).join(', ')}</Genre>
          <ReactStars
            edit={false} 
            value={movie.rating}
            size={16}
            count={5}
            half={true}
            emptyIcon={<Star fullness="empty" width="1rem" />}
            halfIcon={<Star fullness="half" width="1rem" />}
            filledIcon={<Star fullness="filled" width="1rem" />}
            className="ratingStars"
          />
          <Review>{movie.review}</Review>
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
      </StyledMovie>}
    </>
  );
}

export default memo(Movie);