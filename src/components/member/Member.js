import React from 'react';
import user from '../../images/user.svg';

const Member = () => {
  return (
    <li className="member">
      <a href="#" className="member__link">
        <img src={user} alt="Hajar's avatar" className="image avatar member__avater avatar_size_med"/>
        <span className="member_name">Hajar Bhnas</span>
      </a>
    </li>
  );
}

export default Member;