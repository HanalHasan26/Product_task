import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ApexCharts from 'react-apexcharts';
import { TotalProfit } from '../../../../Constant';
import { totalearning } from '../../../Dashboard/ChartsData/ApexChartsData';
import HeaderWithCountUp from '../../Common/HeaderWithCounter';

const TotalProfits = () => {
  return (
    <Col xl="5 xl-50" className="box-col-12">
      <Card className="o-hidden dash-chart">
        <HeaderWithCountUp heading={TotalProfit} val='99.00%' countUp={300056} />
        <CardBody className="pt-0">
          <div className="negative-container">
            <ApexCharts id="negative-chart" options={totalearning.options} series={totalearning.series} type='bar' height={320} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalProfits;
