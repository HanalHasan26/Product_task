import React, { Fragment } from 'react';
import { BrowserUses } from '../../Common/Data/ApexChart';
import Chart from 'react-apexcharts';
import { Col, Row, Card,  CardBody } from 'reactstrap';
import HeaderCard from '../../Common/Component/HeaderCard';

const BrowserChartWidgets = () => {
    return (
        <Fragment>
            <Row>
                {/* <!-- browser uses widget chart Start--> */}
                <Col sm="12" className="box-col-12">
                    <div className="donut-chart-widget">
                        <Card>
                            <HeaderCard title={"Browser Uses"} />
                            <CardBody>
                                <div id="chart-widget13">
                                    <Chart options={BrowserUses.options} series={BrowserUses.series} height="500" type="candlestick" />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
                {/* <!-- browser uses widget chart Endss--> */}
            </Row>
        </Fragment>
    );
};

export default BrowserChartWidgets;