import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { NewsUpdate } from '../../../../Constant';
import { NewsUpdateData } from '../../../../Data/MockTable/NewsUpdate';
import CommonHeader2 from '../../../../_helper/Ecommerce/Common/CommonHeader2';
import { P } from '../../../../AbstractElements';

const NewsUpdates = () => {
  return (
    <Col xl="4 xl-50" className="box-col-12">
      <Card>
        <CommonHeader2 heading={NewsUpdate} />
        <CardBody className="new-update pt-0">
          <div className="activity-timeline">
            {NewsUpdateData.map((news, i) =>
              <div className="media" key={i}>
                {news.line && <div className="activity-line"></div>}
                <div className={news.headingClass}></div>
                <div className="media-body"><span>{news.heading} {news.highlight && news.highlight}</span>
                  <P attrPara={{ className: 'font-roboto' }} >{news.desc}</P>
                </div>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewsUpdates;
