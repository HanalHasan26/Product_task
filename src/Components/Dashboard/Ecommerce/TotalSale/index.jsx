import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ApexCharts from 'react-apexcharts';
import { TodayTotalSale } from '../../../../Constant';
import { Monthlysales } from '../../../Dashboard/ChartsData/ApexChartsData';
import HeaderWithCountUp from '../../Common/HeaderWithCounter';

const TotalSale = () => {
  return (
    <Col xl="6" className="box-col-6" md="6">
      <Card className="o-hidden">
        <HeaderWithCountUp title={TodayTotalSale} val={"89.21%"} countUp={300056} />
        <CardBody className="p-0">
          <div className="media">
            <div className="media-body">
              <div className="profit-card">
                <ApexCharts id="spaline-chart" options={Monthlysales.options} series={Monthlysales.series} type='area' height={150} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalSale;
