import React from 'react';
import hxh from '../../images/hunterxhunter.jpg';
import './Movie.scss';
import LikeSvg from './LikeSvg';

const Movie = () => {
  return (
    <React.Fragment>
      <li className="movie">
        <article>
          <button className="button movie__imageButton" type="button">
            <img src={hxh} className="image movie__image"/>
          </button>{/* Image */}
          <h4 className="movie__heading">Hunter x Hunter</h4> {/* Title */}
          <span className="movie__genre">Animation, Adventure</span> {/* Genre */}
          <p className="movie__review">Fugit enim veniam mollitia ea illum voluptatem fuga aperiam. Esse dolorem nobis autem fuga non.</p> {/* Review */}
          <button className="button movie__likeButton">
            <LikeSvg />
          </button> {/* Like */}
          <p className="movie__likeNumber">Mohamed and 5 others liked your post</p> {/* Likes Number */}
        </article>
      </li>
    </React.Fragment>
  );
}

export default Movie;