import React from 'react';
import hxh from '../../images/hunterxhunter.jpg';

const Movie = () => {
  return (
    <React.Fragment>
      <li className="movie">
        <button className="button movie__imageButton" type="button">
          <img src={hxh} className="image movie__image"/>
        </button>{/* Image */}
        <h4 className="movie__heading">Hunter x Hunter</h4> {/* Title */}
        <span className="movie__genre">Animation, Adventure</span> {/* Genre */}
        <p className="movie__review">Fugit enim veniam mollitia ea illum voluptatem fuga aperiam. Esse dolorem nobis autem fuga non. Dolor illum dolorem autem quisquam magnam dolorem esse necessitatibus.</p> {/* Review */}
        <button className="button movie__likeButton">
          <img src="" alt="Like icon" className="movie__like"/>
        </button> {/* Like */}
        <p className="movie__likeNumber">Mohamed and 5 others</p> {/* Likes Number */}
      </li>
    </React.Fragment>
  );
}

export default Movie;