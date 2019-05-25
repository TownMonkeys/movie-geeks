import React, { Component } from 'react';
import Notification from './Notification';
import './NotificationPanel.scss';
import PropTypes from 'prop-types';

class NotificationPanel extends Component {
  notificationPanel = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (e) => {
    const clickIsOnNotificationPanel = this.notificationPanel.current.contains(e.target);
    const clickIsOnNotificationIcon = this.props.notificationIcon.current.contains(e.target);
    if (!(clickIsOnNotificationPanel || clickIsOnNotificationIcon)) {
      this.props.closeNotificationPanel();
    }
  }

  render() {
    return (
      <div 
        className="notificationPanel header__notificationPanel" 
        id="notificationPanel"
        ref={this.notificationPanel}
      >
        <span aria-label="Up Arrow" className="notificationPanel__arrow"></span>

        <ul className="list notificationList">
          {
            Array(7).fill(null).map((e, index) => (
              <Notification key={index} />
            ))
          }
        </ul>
      </div>
    );
  }
}

NotificationPanel.propTypes = {
  notificationIcon: PropTypes.object
}

export default NotificationPanel;