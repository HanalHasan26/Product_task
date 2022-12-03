import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import CountUp from 'react-countup'
import { H4, H5, H6 } from '../../../../AbstractElements'
import { ArrowCardData } from '../../../../Data/MockTable/ArrowCard'

const ArrowCard = () => {
    return (
        <Col xl="6" className="xl-100 box-col-12">
            <Card className="widget-joins widget-arrow">
                <Row>
                    {ArrowCardData.map((data, i) =>
                        <Col sm="6" className="pe-0" key={i}>
                            <div className="media border-after-xs">
                                <div className="align-self-center me-3 text-start">
                                    <H6 attrH6={{ className: "mb-1" }} >{data.heading}</H6>
                                    <H4 attrH4={{ className: "mb-0" }} >{data.time}</H4>
                                </div>
                                <div className="media-body align-self-center">{data.arrow}</div>
                                <div className="media-body">
                                    <H5 attrH5={{ className: "mb-0" }} >{'$'}<span className="counter"><CountUp end={data.val} /></span></H5><span className="mb-1">{data.difference}</span>
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
            </Card>
        </Col>
    )

}

export default ArrowCard