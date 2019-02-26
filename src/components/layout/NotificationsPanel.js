import React, { Component } from 'react';
import Notification from './Notification';

class NotificationsPanel extends Component {
  firstNotification = React.createRef();
  lastNotification = React.createRef();

  handleKeyDown = (e) => {
    const esc = e.keyCode === 27;
    const tab = e.keyCode === 9;
    if (esc) { 
      this.props.closeNotificationsPanel();
    } else if (tab && e.shiftKey && e.target === this.firstNotification.current) {
      e.preventDefault();
      this.lastNotification.current.focus();
    } else if (tab && !e.shiftKey && e.target === this.lastNotification.current) {
      e.preventDefault();
      this.firstNotification.current.focus();
    }
  }

  componentDidUpdate() {
    this.firstNotification.current.focus();
  }

  render() {
    const {NotificationsPanelOpened} = this.props;

    return (
      <div 
        onKeyDown={this.handleKeyDown}
        className="notificationsPanel header__notificationsPanel" 
        id="notificationsPanel"
        ref={this.notificationsPanel}
      >
        <span aria-label="Up Arrow" className="notificationsPanel__arrow"></span>

        <ul className="list notificationsList" role="menu">
          {
            Array(7).fill(null).map((e, index, array) => (
              <Notification 
                key={index} 
                NotificationsPanelOpened={NotificationsPanelOpened}
                ref={
                  (index === 0)              ? this.firstNotification 
                : (index === array.length-1) ? this.lastNotification 
                : null
                }
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default NotificationsPanel;