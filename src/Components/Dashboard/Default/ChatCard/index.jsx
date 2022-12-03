import React from 'react';
import { Send } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap';
import { Chat, RightNow } from '../../../../Constant';
import { H5, Image } from '../../../../AbstractElements';
import Message from './Message';
import Time from './Time';

const ChatCard = () => {
  return (
    <Col xl='4 xl-100' className='chat-sec box-col-6'>
      <Card className='chat-default'>
        <CardHeader className='card-no-border'>
          <div className='media media-dashboard'>
            <div className='media-body'>
              <H5 attrH5={{ className: 'mb-0' }}>{Chat}</H5>
            </div>
            <div className='icon-box'>
              <i className='fa fa-ellipsis-h'></i>
            </div>
          </div>
        </CardHeader>
        <CardBody className='chat-box'>
          <div className='chat'>
            <div className='media left-side-chat'>
              <div className='media-body d-flex'>
                <div className='img-profile'>
                  <Image attrImage={{ className: 'img-fluid', src: `${require('../../../../assets/images/User.jpg')}`, alt: 'Profile' }} />
                </div>
                <div className='main-chat'>
                  <Message msg={'Hi deo, Please send me link.'} />
                  <Message divClass={'sub-message'} msg={RightNow} />
                </div>
              </div>
              <Time time={'7:28 PM'} />
            </div>
            <div className='media right-side-chat'>
              <Time time={'7:28 PM'} />
              <div className='media-body text-end'>
                <Message divClass={'pull-right'} spanClass={'text-start'} msg={'How can do for you'} />
              </div>
            </div>
            <div className='media left-side-chat'>
              <div className='media-body d-flex'>
                <div className='img-profile'>
                  <Image attrImage={{ className: 'img-fluid', src: `${require('../../../../assets/images/User.jpg')}`, alt: 'Profile' }} />
                </div>
                <div className='main-chat'>
                  <Message divClass={'sub-message mt-0'} msg={`It's urgent`} />
                </div>
              </div>
              <Time time={'7:28 PM'} />
            </div>
            <div className='media right-side-chat'>
              <div className='media-body text-end'>
                <div className='message-main pull-right'>
                  <span className='loader-span mb-0 text-start' id='wave'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                  </span>
                </div>
              </div>
            </div>
            <div className='input-group'>
              <Input className='form-control' id='mail' type='text' placeholder='Type Your Message...' name='text' />
              <div className='send-msg'>
                <Send />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChatCard;
