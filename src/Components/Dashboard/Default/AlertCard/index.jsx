import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { H5, H6 } from '../../../../AbstractElements';

const AlertCard = () =>{
    return(
      <Col xl="12" className="alert-sec">
        <Card className="bg-img">
          <CardHeader>
            <div className="header-top">
              <H5 attrH5={{ className:"m-0"}}>{'Alert'}  </H5>
              <div className="dot-right-icon"><i className="fa fa-ellipsis-h"></i></div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="body-bottom">
              <H6>  {'10% off For drama lights Couslations...'}</H6><span className="font-roboto">{'Lorem Ipsum is simply dummy...It is a long established fact that a reader will be distracted by '} </span>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
};

export default AlertCard;