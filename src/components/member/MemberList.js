import React from 'react';
import './MemberList.scss';
import Member from './Member';

const MemberList = () => {
  return (
    <section className="memberSection dashboard__memberSection" role="region" aria-labelledby="memberSection__heading">
      <h3 className="memberSection__heading">Members</h3>

      <ul className="list memberSection__list">
        {
          Array(20).fill(null).map((e, i) => (
            <Member key={i} />
          ))
        }
      </ul>
    </section>
  );
}

export default MemberList;