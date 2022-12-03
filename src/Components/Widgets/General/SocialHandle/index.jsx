import { H4, H5 } from '../../../../AbstractElements'
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CountUp from 'react-countup'
import { SocialHandleData } from '../../../../Data/MockTable/SocialHandle'

const SocialHandle = () => {
    return (
        <Fragment>
            {SocialHandleData.map((data, i) =>
                <Col sm="6" key={i} xl="3" lg="6" className="xl-50 box-col-6">
                    <Card className="social-widget-card">
                        <CardBody>
                            <div className="redial-social-widget radial-bar-70" data-label="50%">
                                <i className={`fa ${data.logo} font-primary`}></i></div>
                            <H5 attrH5={{className:"b-b-light"}} >{data.title}</H5>
                            <Row>
                                <Col className="text-center b-r-light"><span>{data.count1}</span>
                                    <H4 attrH4={{ className: 'counter mb-0' }}>
                                        <CountUp end={data.end1} /></H4>
                                </Col>
                                <Col className="text-center"><span>{data.count2}</span>
                                    <H4 attrH4={{ className: 'counter mb-0' }}>
                                        <CountUp end={data.end2} /></H4>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    )
}
export default SocialHandle