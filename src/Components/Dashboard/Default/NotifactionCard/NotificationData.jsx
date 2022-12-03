import React from 'react';
import { New } from '../../../../Constant';

const NotificationData = ({ date, time, title, desc, badge }) => {

  return (
    <div className="media">
      <div className="media-body">
        <p>{date} <span>{time}</span>{badge ? <span className="badge badge-secondary">{New}</span> : ''}</p>
        <h6>{title}<span className="dot-notification"></span></h6><span>{desc}</span>
      </div>
    </div>
  );

};

export default NotificationData;