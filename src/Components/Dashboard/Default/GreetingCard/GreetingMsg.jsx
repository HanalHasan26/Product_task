import React from 'react';
import { Fragment } from 'react';
import { H4, Image, P } from '../../../../AbstractElements';

const GreetingMsg = ({ daytimes }) => {
  return (
    <Fragment>
      <div className="profile-vector">
        <Image attrImage={{ className: "img-fluid", src: `${require('../../../../assets/images/dashboard/welcome.png')}`, alt: "" }} />
      </div>
      <H4 attrH4={{ className: "f-w-600" }} ><span id="greeting">{daytimes}</span> <span className="right-circle"><i className="fa fa-check-circle f-14 middle"></i></span></H4>
      <P><span> {'Today\'s earrning is $405 & your sales increase rate is 3.7 over the last 24 hours'}</span></P>

    </Fragment>

  );
};

export default GreetingMsg;