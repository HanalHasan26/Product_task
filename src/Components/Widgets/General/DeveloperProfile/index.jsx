import { H3, H5, LI, P, UL, Image } from '../../../../AbstractElements'
import boy from '../../../../assets/images/dashboard/boy-2.png'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CountUp from 'react-countup'

const DeveloperProfile = () => {
    return (
        <Fragment>
            <Col md="6" xl="4 box-col-6 xl-50">
                <Card className="testimonial text-center">
                    <CardBody>
                        <div>
                            <div className="item"><i className="icon-quote-left"></i>
                                <P>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</P><Image attrImage={{ className: 'img-80', src: `${boy}`, alt: '' }} /><a href="user-profile.html">
                                    <H5 attrH5={{ className: 'font-primary' }}>Poio klot</H5></a><span>Developer</span>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="xl-none">
                    <CardBody className="ecommerce-widget">
                        <Row>
                            <Col xs="6"><span>NewOrder</span>
                                <H3 attrH3={{ className: 'total-num counter' }}><CountUp end={25639} /></H3>
                            </Col>
                            <div className="col-6">
                                <div className="text-end">
                                    <UL attrUL={{ as: 'ul', className: 'simple-list ' }}>
                                        <LI>Profit<span className="product-stts font-primary m-l-10">8989<i className="icon-angle-up f-12 m-l-10"></i></span></LI>
                                        <LI>Loss<span className="product-stts font-primary m-l-10">2560<i className="icon-angle-down f-12 m-l-10"></i></span></LI>
                                    </UL>
                                </div>
                            </div>
                        </Row>
                        <div className="progress-showcase">
                            <div className="progress sm-progress-bar">
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default DeveloperProfile