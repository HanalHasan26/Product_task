import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ApexCharts from 'react-apexcharts';
import { Day, MarketValue, Month, Year } from '../../../../Constant';
import { Marketvalue } from '../../../Dashboard/ChartsData/ApexChartsData';
import CardHeaderCommon from '../../Common/CardHeader';

const MarketValueCard = () => {
  return (
    <Col xl="4 xl-50" className="appointment box-col-6">
      <Card>
        <CardHeaderCommon title={MarketValue} options={[Year, Month, Day]} />
        <CardBody>
          <div className="radar-chart">
            <ApexCharts id="marketchart" options={Marketvalue.options} series={Marketvalue.series} type='radar' height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarketValueCard;