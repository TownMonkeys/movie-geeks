import React, { Component } from 'react';
import './MemberList.scss';
import Member from './Member';

class MemberList extends Component {
  state = { 
    positioningMethod: null
  }

  memberList = React.createRef();

  determinePositioningMethod = () => {
    const bottomPosition = this.memberList.current.getBoundingClientRect().bottom;
    const positioningMethod = (bottomPosition > window.innerHeight) ? 'absolute' : 'fixed';
    this.setState({
      positioningMethod
    });
  }

  calculateRightPositioning = () => {
    const scrollbarWidth = 17;
    const screenWidth = window.innerWidth - scrollbarWidth;
    const containerElementWidth = 960;
    const rightPositioningValue = (screenWidth-containerElementWidth) / 2;
    return rightPositioningValue;
  }

  componentDidMount() {
    this.determinePositioningMethod();
    window.onresize = () => {
      this.determinePositioningMethod();
    };
  }

  render() {
    const {positioningMethod} = this.state;
    const rightPositioningValue = this.calculateRightPositioning();

    return (
      <section 
        className={`memberSection dashboard__memberSection ${(positioningMethod === 'fixed') ? 'dashboard__memberSection_position_fixed' : 'dashboard__memberSection_position_absolute'}`} 
        role="region" 
        aria-labelledby="memberSection__heading"
        style={{
          right: (positioningMethod === 'fixed') ? `${rightPositioningValue / 16}rem` : 0
        }}
        ref={this.memberList}
      >
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
}

export default MemberList;