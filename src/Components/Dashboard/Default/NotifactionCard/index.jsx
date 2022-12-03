import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { New, Notification, Today, Tomorrow, Yesterday } from '../../../../Constant';
import CardHeaderCommon from '../../Common/CardHeader';

const NotificationCard = () =>

  <Col xl="4 xl-50" className="notification box-col-6">
    <Card>
      <CardHeaderCommon title={Notification} options={[Today, Tomorrow, Yesterday]} />
      <CardBody className="pt-0">
        <div className="media">
          <div className="media-body">
            <p>{"20-04-2022"} <span>{"10:10"}</span></p>
            <h6>{"Updated Product"}<span className="dot-notification"></span></h6><span>{"Quisque a consequat ante sit amet magna..."}</span>
          </div>
        </div>
        <div className="media">
          <div className="media-body">
            <p>{"20-04-2022"}<span className="ps-1">{Today}</span><span className="badge badge-secondary">{New}</span></p>
            <h6>{"Tello just like your product"}<span className="dot-notification"></span></h6><span>{"Quisque a consequat ante sit amet magna... "}</span>
          </div>
        </div>
        <div className="media">
          <div className="media-body">
            <div className="d-flex mb-3">
              <div className="inner-img"><img className="img-fluid" src={require("../../../../assets/images/notification/1.jpg")} alt="Product-1" /></div>
              <div className="inner-img"><img className="img-fluid" src={require("../../../../assets/images/notification/2.jpg")} alt="Product-2" /></div>
            </div><span className="mt-3">{"Quisque a consequat ante sit amet magna..."}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>;
export default NotificationCard;