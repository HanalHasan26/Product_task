import React from 'react';
import { Col, Row } from 'reactstrap';
import { CashBalance, ReferralEarning, SalesForcasting } from '../../../../../Constant';
import BottomTabData from './BottomTabData';

const BottomTab = () => {
  return (
    <Row className="border-top m-0">
      <Col xl="4" md="6" sm="6" className="ps-0">
        <BottomTabData heading={ReferralEarning} amount={'$5,000.20'} iconName={'icofont-crown'} />
      </Col>
      <Col xl="4" md="6" sm="6">
        <BottomTabData heading={CashBalance} amount={'$2,657.21'} iconName={'icofont-heart-alt'} bgSecondary={'bg-secondary'} />
      </Col>
      <Col xl="4" md="12" className="pe-0">
        <BottomTabData heading={SalesForcasting} amount={'$9,478.50'} iconName={'icofont-cur-dollar'} />
      </Col>
    </Row>

  );
};
export default BottomTab;