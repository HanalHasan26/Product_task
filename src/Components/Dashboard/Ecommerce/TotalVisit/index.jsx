import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ApexCharts from 'react-apexcharts';
import { TodayTotalVisits } from '../../../../Constant';
import { columnCharts } from '../../../Dashboard/ChartsData/ApexChartsData';
import HeaderWithCountUp from '../../Common/HeaderWithCounter';

const TotalVisit = () => {
  return (
    <Col xl="6" className="box-col-6" md="6">
      <Card className="o-hidden">
        <HeaderWithCountUp title={TodayTotalVisits} val={"335.00%"} countUp={9050} />
        <CardBody className="pt-0">
          <div className="monthly-visit">
            <ApexCharts id="column-chart" options={columnCharts.options} series={columnCharts.series} type='bar' height={105} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalVisit;
