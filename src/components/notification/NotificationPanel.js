import React, { Component } from 'react';
import Notification from './Notification';
import './NotificationPanel.scss';

class NotificationPanel extends Component {
  notificationPanel = React.createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (e) => {
    if (!this.notificationPanel.current.contains(e.target)) {
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

        <ul className="list notificationList" role="menu">
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

export default NotificationPanel;