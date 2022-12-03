import React from 'react';
import CountUp from 'react-countup';
import { Card, CardBody, Col } from 'reactstrap';
import { Hot, TodayStockValue } from '../../../../Constant';
import { P, H4 } from '../../../../AbstractElements';

const StockVal = () => {
  return (
    <Col xl="6" lg="12" md="6" className="box-col-6">
      <Card className="o-hidden">
        <CardBody>
          <div className="media">
            <div className="media-body">
              <P attrPara={{ className: 'f-w-500 font-roboto' }} >{TodayStockValue}<span className="badge pill-badge-primary ms-3">{Hot}</span></P>
              <div className="progress-box">
                <H4 attrH4={{ className: 'f-w-500 mb-0 f-26' }} >{'$'}<span className="counter"><CountUp end={900004} /></span></H4>
                <div className="progress sm-progress-bar progress-animate app-right d-flex justify-content-end">
                  <div className="progress-gradient-primary" role="progressbar" style={{ width: '35%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span className="font-primary">{'88%'}</span><span className="animate-circle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockVal;
