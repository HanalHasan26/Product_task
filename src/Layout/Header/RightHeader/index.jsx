import React, { Fragment } from 'react';

import Language from './Language';
import Searchbar from './Searchbar';
import Notificationbar from './Notificationbar';
import MoonLight from './MoonLight';
import CartHeader from './CartHeader';
import ChatHeader from './ChatHeader';
import BookmarkHeader from './BookmarkHeader';
import MaxMiniSize from './MaxMiniSize';
import UserHeader from './UserHeader';
import { UL } from '../../../AbstractElements';

const RightHeader = () => {
  return (
    <Fragment>
      <div className='nav-right col-8 pull-right right-header p-0'>
        {/* <Col md="8"> */}
        <UL attrUL={{ className: 'nav-menus flex-row' }}>
          <Language />
          <Searchbar />
          <Notificationbar />
          <BookmarkHeader />
          <MoonLight />
          <CartHeader />
          <ChatHeader />
          <MaxMiniSize />
          <UserHeader />
        </UL>
        {/* </Col> */}
      </div>
    </Fragment>
  );
};

export default RightHeader;
