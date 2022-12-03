import React from 'react';
import { CardBody, Col } from 'reactstrap';
import ApexCharts from 'react-apexcharts';
import { Currentlysale } from "../../ChartsData/ApexChartsData"
const Charts = () =>{
    return(
      <Col xl="12">
        <CardBody className="p-0">
          <div className="current-sale-container">
            <ApexCharts id="chart-currently" options={Currentlysale.options} series={Currentlysale.series} type='area' height={240} />
          </div>
        </CardBody>
      </Col>
    );
};

export default Charts;