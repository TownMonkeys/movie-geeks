import React from 'react';
import hxh from '../../images/hunterxhunter.jpg';
import './Movie.scss';
import LikeSvg from './LikeSvg';
import user from '../../images/user.svg';
import star from '../../images/star.svg';
import StarSvg from './StarSvg';

const Movie = () => {
  return (
    <article className="movie">
      <header className="movie__header">
        <a href="#" className="movie__userAvatarLink">
          <img src={user} alt="Hajar's avatar" className="image avatar avatar_size_med"/>
        </a>
        <a href="#" className="movie__userNameLink">Hajar Bhnas</a>
      </header> {/* Header */}

      <button className="button movie__imageButton" type="button">
        <img src={hxh} className="image movie__image"/>
      </button> {/* Image */}
      <h4 className="movie__name">Hunter x Hunter</h4> {/* Name */}
      <span className="movie__genre">Animation, Adventure</span> {/* Genre */}
      <ul className="list movie__starList">
      {
        Array(5).fill(null).map(e => (
          <li className="movie__starItem">
            <StarSvg />
          </li>
        ))
      }
      </ul>
      <p className="movie__review">
        Fugit enim veniam mollitia ea illum voluptatem fuga aperiam. Esse dolorem nobis autem fuga non.
      </p> {/* Review */}
      <button className="button movie__likeButton">
        <LikeSvg />
      </button> {/* Like */}
      <p className="movie__likeNumber">
        <a className="movie__liker" href="#">Mohamed</a> and <a className="movie__otherLikers" href="#">5 others</a> liked your post
      </p> {/* Likes Number */}

      <footer className="movie__footer">
        <time className="movie__time">28 minutes ago</time>
      </footer>
    </article>
  );
}

export default Movie;