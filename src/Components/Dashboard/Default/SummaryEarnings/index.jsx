import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import LeftTab from './LeftTab/LeftTab';
import BottomTab from './BottomTab/BottomTab';
import UpperTab from './UpperTab';
import Charts from './Charts';

const SummaryEarnings =  () =>{
return(
  <Col xl="8 xl-100" className="dashboard-sec box-col-12">
    <Card className="earning-card">
      <CardBody className="p-0">
        <Row className="m-0">
          <LeftTab />
          <Col xl="9" className="p-0">
            <div className="chart-right">
              <Row className="m-0 p-tb">
                <UpperTab />               
              </Row>
              <Row>
                <Charts />
              </Row>
            </div>
            <BottomTab />
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
          
);

};

export default SummaryEarnings;