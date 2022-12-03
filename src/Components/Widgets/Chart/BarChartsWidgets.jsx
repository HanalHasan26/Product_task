import { MarketChart, TotalEarningChart } from '../../Common/Data/ApexChart';
import React, { Fragment } from 'react';
import Charts from 'react-apexcharts';
import { Row, Col, Card, CardBody } from 'reactstrap';
import CountUp from 'react-countup';
import HeaderCard from '../../Common/Component/HeaderCard';
import { H4 } from '../../../AbstractElements';

const BarChartsWidgets = () => {
    return (
        <Fragment>
            <Row>
                <Col xl="7">
                    <Card className="o-hidden">
                        <HeaderCard title={'Marketing Expenses'} />
                        <div className="bar-chart-widget">
                            <CardBody className="bottom-content">
                                <Row>
                                    <Col>
                                        <div id="chart-widget4">
                                            <Charts options={MarketChart.options} series={MarketChart.series} type="bar" height={360} />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </div>
                    </Card>
                </Col>
                <Col xl="5">
                    <Card className="o-hidden">
                        <HeaderCard title={"Total Earning"} />
                        <div className="bar-chart-widget">
                            <div className="top-content bg-primary"></div>
                            <CardBody className="bottom-content pt-0">
                                <Row>
                                    <Col>
                                        <div id="chart-widget5">
                                            <Charts options={TotalEarningChart.options} series={TotalEarningChart.series} type="radialBar" height={350} />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col className="col-4 b-r-light">
                                        <div><span className="font-primary">12%<i className="icon-angle-up f-12 ms-1"></i></span><span className="text-muted block-bottom mt-2 mb-2">Year</span>
                                            <H4 attrH4={{ className: "num m-0" }} ><CountUp className="counter color-bottom" end={3659} duration={5} />M</H4>
                                        </div>
                                    </Col>
                                    <Col className="col-4 b-r-light">
                                        <div><span className="font-primary">15%<i className="icon-angle-up f-12 ms-1"></i></span><span className="text-muted block-bottom mt-2 mb-2">Month</span>
                                            <H4 attrH4={{ className: "num m-0" }} ><CountUp className="counter color-bottom" end={698} duration={5} />M</H4>
                                        </div>
                                    </Col>
                                    <Col className="col-4">
                                        <div><span className="font-primary">34%<i className="icon-angle-up f-12 ms-1"></i></span><span className="text-muted block-bottom mt-2 mb-2">Today</span>
                                            <H4 attrH4={{ className: "num m-0" }}><CountUp className="counter color-bottom" end={9361} duration={5} />M</H4>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default BarChartsWidgets;