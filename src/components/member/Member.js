import React, { memo } from 'react';
import user from '../../images/avatar.svg';
import './Member.scss';

const Member = () => {
  return (
    <li className="member">
      <a href="#" className="member__link">
        <img src={user} alt="Yurio's avatar" className="image avatar member__avater avatar_size_med"/>
        <span className="member_name">Yurio</span>
      </a>
    </li>
  );
}

export default memo(Member);