import React, { memo, useState, useCallback } from 'react';
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
  Rating,
  StarItem,
  Review,
  Hr,
  Footer,
  LikeButton,
  Likers,
  PostDate
} from '../style';
import Avatar from '../../avatar';
import StarSvg from '../../../svgs/star';
import LikeSvg from '../../../svgs/like';
import avatar from '../../../images/avatar.svg';

const user = {
  name: 'Yurio',
  avatar
};

const Movie = (props) => {
  // props
  const { movie } = props;

  // state
  const [ liked, setLiked ] = useState(false);

  const like = useCallback(() => {
    setLiked(true);
  }, []);

  const toggleLike = useCallback(() => {
    setLiked(!liked);
  }, [ liked ]);
  
  return (
    <StyledMovie>
      <Header>
        <AvatarLink to={``}>
          <Avatar user={user} size={'medium'} />
        </AvatarLink>
        <UserNameLink to={``}>{movie.user}</UserNameLink>
      </Header>

      <Body>
        <MovieCoverButton 
          aria-label="double click to like"
          onDoubleClick={like}
          onMouseDown={(e) => e.preventDefault()}
        >
          <MovieCover src={movie.cover} alt="" />
        </MovieCoverButton>
        <MovieName>{movie.name}</MovieName>
        <Genre>{movie.genre.join(', ')}</Genre>
        <Rating>
          {
            Array(movie.rating).fill(null).map((e, i) => (
              <StarItem key={i}>
                <StarSvg />
              </StarItem>
            ))
          }
        </Rating>
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
          {movie.lastLiker} and {movie.likes} others
        </Likers>
        <PostDate>25 minutes ago</PostDate>
      </Footer>
    </StyledMovie>
  );
}

export default memo(Movie);