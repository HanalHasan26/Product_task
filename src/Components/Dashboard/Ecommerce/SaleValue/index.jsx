import React from 'react';
import CountUp from 'react-countup';
import { Card, CardHeader, Col } from 'reactstrap';
import { Badges } from '../../../../AbstractElements';
import { New, OurSaleValue } from '../../../../Constant';
import { P, H4 } from '../../../../AbstractElements';

const SaleValue = () => {
  return (
    <Col xl="6" lg="12" md="6" className="box-col-6">
      <Card className="o-hidden">
        <CardHeader>
          <div className="ecommerce-widgets media">
            <div className="media-body">
              <P attrPara={{ className: 'f-w-500 font-roboto' }} >{OurSaleValue}
                <Badges attrBadge={{ className: 'badge pill-badge-primary ms-3', color: 'primary' }}>{New}</Badges>
              </P>
              <H4 attrH4={{ className: 'f-w-500 mb-0 f-26' }} >{'$'}<span className="counter"><CountUp end={745425} /></span></H4>
            </div>
            <div className="ecommerce-box light-bg-primary"><i className="fa fa-heart" aria-hidden="true"></i></div>
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
};

export default SaleValue;
