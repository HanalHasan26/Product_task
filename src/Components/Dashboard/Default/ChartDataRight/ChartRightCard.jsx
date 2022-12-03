import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H4 } from '../../../../AbstractElements';

const ChartRightCard = ({ value, heading, desc, chartClass, id }) => (
  <Col xl='3 xl-50' className={`chart_data_right ${chartClass}`}>
    <Card>
      <CardBody>
        <div className='media align-items-center'>
          <div className='media-body right-chart-content'>
            <H4>
              {value}
              <span className='new-box'>{heading}</span>
            </H4>
            <span>{desc}</span>
          </div>
          <div className='knob-block text-center'>
            <div className='knob1' id={id}></div>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);
export default ChartRightCard;
