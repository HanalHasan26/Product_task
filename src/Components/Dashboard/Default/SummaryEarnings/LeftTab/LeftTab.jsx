import React from 'react';
import { Col, Row } from 'reactstrap';
import { Dashboard, Summary } from '../../../../../Constant';
import LeftTabData from './LeftTabData';

const LeftTab = () => {

  return (
    <Col xl="3" className="earning-content p-0">
      <Row className="m-0 chart-left">
        <LeftTabData heading={Dashboard} desc={'Overview of last month'} />
        <LeftTabData heading={'$4055.56'} desc={'This Month Earning'} />
        <LeftTabData heading={'$1004.11'} desc={'This Month Profit'} />
        <LeftTabData heading={'90%'} desc={'This Month Sale'} />
        <Col xl="12" className="p-0 left-btn"><a className="btn btn-gradient" href="#javascript">{Summary}</a></Col>
      </Row>
    </Col>

  );
};

export default LeftTab;