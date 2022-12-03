import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { H6 } from '../../../../AbstractElements';
import { NewsUpdate, Today, Tomorrow, Yesterday } from '../../../../Constant';
import CardHeaderCommon from '../../Common/CardHeader';

const data = [
  {
    hdealine: '36% off For pixel lights Couslations Types.',
    desc: 'Lorem Ipsum is simply dummy...'
  },
  {
    hdealine: 'We are produce new product this',
    desc: 'Lorem Ipsum is simply dummy...'
  },
  {
    hdealine: '50% off For COVID Couslations Types.',
    desc: 'Lorem Ipsum is simply dummy...'
  },
];

const NewsCard = () => {
  return (
    <Col xl="4 xl-50" className="news box-col-6">
      <Card>
        <CardHeaderCommon title={NewsUpdate} options={[Today, Tomorrow, Yesterday]} />
        <CardBody className="p-0">
          {data.map((item, i) => (
            <div className="news-update" key={i}>
              <H6>{item.hdealine}</H6>
              <span>{item.desc}</span>
            </div>
          ))}
        </CardBody>
        <div className="card-footer">
          <div className="bottom-btn"><a href="#javascript">{"More..."}</a></div>
        </div>
      </Card>
    </Col>
  );
};

export default NewsCard;