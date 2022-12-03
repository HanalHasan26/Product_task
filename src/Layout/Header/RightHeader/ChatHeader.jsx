import React, { useState } from 'react';
import { MessageSquare } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { AinChavez, EricaHughes, KoriThomas, MessageBox, ViewAll } from '../../../Constant';

const ChatHeader = () => {
  const id = window.location.pathname.split('/').pop();
  const layout = id;
  const history = useNavigate('');
  const [chatDropDown, setChatDropDown] = useState(false);
  const RedirectToChats = () => {
    history(`${process.env.PUBLIC_URL}/app/chat-app/chats/${layout}`);
  };

  return (
    <li className='onhover-dropdown' onClick={() => setChatDropDown(!chatDropDown)}>
      <MessageSquare />
      <div className={`chat-dropdown onhover-show-div ${chatDropDown ? 'active' : ''}`}>
        <h6 className='f-18 mb-0 dropdown-title'>{MessageBox}</h6>
        <ul className='py-0'>
          <li onClick={RedirectToChats}>
            <div className='media'>
              <img className='img-fluid rounded-circle me-3' src={require('../../../assets/images/user/1.jpg')} alt='' />
              <div className='status-circle online'></div>
              <div className='media-body'>
                <span>{EricaHughes}</span>
                <p>{'Lorem Ipsum is simply dummy...'}</p>
              </div>
              <p className='f-12 font-success'>{'58 mins ago'}</p>
            </div>
          </li>
          <li onClick={RedirectToChats}>
            <div className='media'>
              <img className='img-fluid rounded-circle me-3' src={require('../../../assets/images/user/2.jpg')} alt='' />
              <div className='status-circle online'></div>
              <div className='media-body'>
                <span>{KoriThomas}</span>
                <p>{'Lorem Ipsum is simply dummy...'}</p>
              </div>
              <p className='f-12 font-success'>{'1 hr ago'}</p>
            </div>
          </li>
          <li onClick={RedirectToChats}>
            <div className='media'>
              <img className='img-fluid rounded-circle me-3' src={require('../../../assets/images/user/4.jpg')} alt='' />
              <div className='status-circle offline'></div>
              <div className='media-body'>
                <span>{AinChavez}</span>
                <p>{'Lorem Ipsum is simply dummy...'}</p>
              </div>
              <p className='f-12 font-danger'>{'32 mins ago'}</p>
            </div>
          </li>
          <li className='text-center' onClick={RedirectToChats}>
            <a className='f-w-700' href='#javascript'>
              {ViewAll}
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ChatHeader;
