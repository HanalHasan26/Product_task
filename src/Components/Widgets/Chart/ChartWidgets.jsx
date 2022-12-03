import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Charts from 'react-apexcharts';
import { lineChart1, lineChart2, lineChart3 } from '../../Common/Data/ApexChart';
import CountUp from 'react-countup';
import { H4, H6 } from '../../../AbstractElements';


const ChartWidgets = () => {
    return (
        <Fragment>
            <Row>
                <Col xl="4">
                    <Card className="o-hidden">
                        <div className="chart-widget-top">
                            <CardBody>
                                <Row>
                                    <Col className="col-5">
                                        <H6 attrH6={{ className: "f-w-600 font-primary" }} >SALE</H6><span className="num">
                                            <span className="counter">90</span>%<i className="icon-angle-up f-12 ms-1"></i></span>
                                    </Col>
                                    <Col className="col-7 text-end">
                                        <H4 attrH4={{ className: "num total-value" }} >$<span className="counter">
                                            <CountUp end={3654} duration={5} /></span>.00</H4>
                                    </Col>
                                </Row>
                            </CardBody>
                            <div>
                                <div id="chart-widget1">
                                    <Charts options={lineChart1.options} series={lineChart1.series} height="170" type="area" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl="4">
                    <Card className="card o-hidden">
                        <div className="chart-widget-top">
                            <CardBody>
                                <div className="row">
                                    <Col className="col-7">
                                        <h6 className="f-w-600 font-secondary">PROJECTS</h6><span className="num"><span className="counter">30</span>%<i className="icon-angle-up f-12 ms-1"></i></span>
                                    </Col>
                                    <Col className="col-5 text-end">
                                        <h4 className="num total-value counter"><CountUp end={12568} duration={5} /></h4>
                                    </Col>
                                </div>
                            </CardBody>
                            <div id="chart-widget2">
                                <Charts className="flot-chart-placeholder" options={lineChart2.options} series={lineChart2.series} height="170" type="area" />
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xl="4">
                    <Card className="o-hidden">
                        <div className="chart-widget-top">
                            <CardBody>
                                <div className="row">
                                    <Col className="col-8">
                                        <h6 className="f-w-600 font-success">PRODUCTS</h6><span className="num"><span className="counter">68</span>%<i className="icon-angle-up f-12 ms-1"></i></span>
                                    </Col>
                                    <Col className="col-4 text-end">
                                        <h4 className="num total-value"><span className="counter"><CountUp end={93} duration={5} /></span>M</h4>
                                    </Col>
                                </div>
                            </CardBody>
                            <div id="chart-widget3">
                                <Charts className="flot-chart-placeholder" options={lineChart3.options} series={lineChart3.series} height="170" type="area" />
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ChartWidgets;