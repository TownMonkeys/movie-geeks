import React, { Component } from 'react';
import Notification from './Notification';
import './NotificationPanel.scss';

class NotificationsPanel extends Component {
  componentDidUpdate() {
    this.props.refs.firstNotification.current.focus();
  }

  render() {
    const {firstNotification, lastNotification} = this.props.refs;
    const {notificationPanelOpened, trapFocus} = this.props;

    return (
      <div 
        className="notificationPanel header__notificationPanel" 
        id="notificationPanel"
        // ref={this.notificationsPanel}
        onKeyDown={trapFocus}
      >
        <span aria-label="Up Arrow" className="notificationPanel__arrow"></span>

        <ul className="list notificationList" role="menu">
          {
            Array(7).fill(null).map((e, index, array) => (
              <Notification 
                key={index} 
                notificationPanelOpened={notificationPanelOpened}
                ref={
                  (index === 0)              ? firstNotification 
                : (index === array.length-1) ? lastNotification 
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

export default React.forwardRef(
  (props, refs) => <NotificationsPanel refs={refs} {...props} />
);