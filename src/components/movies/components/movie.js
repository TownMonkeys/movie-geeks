import React, { memo } from 'react';
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
  const { movie } = props;
  
  return (
    <StyledMovie>
      <Header>
        <AvatarLink href="#">
          <Avatar user={user} size={'medium'} />
        </AvatarLink>
        <UserNameLink href="#">{movie.user}</UserNameLink>
      </Header>

      <Body>
        <MovieCoverButton 
          aria-label="double click to like"
          onMouseDown={(e) => e.preventDefault()}
        >
          <MovieCover src={movie.cover} alt="" />
        </MovieCoverButton>
        <MovieName>{movie.name}</MovieName>
        <Genre>{movie.genre.join(', ')}</Genre>
        <Rating>
          {
            Array(movie.rating).fill(null).map((e, i) => (
              <StarItem>
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
          onMouseDown={(e) => e.preventDefault()} 
        >
          <LikeSvg filled={false} />
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