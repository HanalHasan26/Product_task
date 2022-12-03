import React, { useEffect, useState } from 'react';
import welcomeImg from '../../../../assets/images/dashboard/welcome.png';
import { Card, CardBody, Col } from 'reactstrap';
import { H4, Image, P } from '../../../../AbstractElements';
import ClockIcon from './ClockIcon';

const GreetingCard = () => {
  const [daytimes, setDayTimes] = useState('');
  const today = new Date();
  const curHr = today.getHours();
  const curMi = today.getMinutes();
  const [meridiem, setMeridiem] = useState('AM');

  useEffect(() => {
    if (curHr < 12) {
      setDayTimes('Good Morning');
    } else if (curHr < 18) {
      setDayTimes('Good Afternoon');
    } else {
      setDayTimes('Good Evening');
    }

    if (curHr >= 12) {
      setMeridiem('PM');
    } else {
      setMeridiem('AM');
    }
  }, []);
  return (
    <Col xl="4 xl-50" lg="12" className="morning-sec box-col-12">
      <Card className="o-hidden profile-greeting">
        <CardBody>
          <div className="media">
            <div className="badge-groups w-100">
              <div className="badge f-12">
                <ClockIcon style={{ width: "16px", height: "16px" }} className="me-1" />
                <span id="txt">{curHr}:{curMi < 10 ? "0" + curMi : curMi} {meridiem}</span>
              </div>
              <div className="badge f-12"><i className="fa fa-spin fa-cog f-14"></i></div>
            </div>
          </div>
          <div className="greeting-user text-center">
            <div className="profile-vector">
              <Image attrImage={{ className: "img-fluid m-auto", src: `${welcomeImg}`, alt: "" }} />
            </div>
            <H4 attrH4={{ className: "f-w-600" }} ><span id="greeting">{daytimes}</span> <span className="right-circle"><i className="fa fa-check-circle f-14 middle"></i></span></H4>
            <P><span> {"Today's earrning is $405 & your sales increase rate is 3.7 over the last 24 hours"}</span></P>
            <div className="whatsnew-btn"><a className="btn btn-primary" href="#javascript">{"Whats New !"}</a></div>
            <div className="left-icon"><i className="fa fa-bell"> </i></div>
          </div>
        </CardBody>
      </Card>
    </Col>

  );
};

export default GreetingCard;