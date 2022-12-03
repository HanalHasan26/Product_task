import { H4, P, Image } from '../../../../AbstractElements'
import CountUp from 'react-countup'
import { Card, CardBody, Col } from 'reactstrap'
import React, { Fragment } from 'react'
import { BrowserWidgetCardData } from '../../../../Data/MockTable/BrowserWidgetsCard'

const BrowserWidgetsCard = () => {
    return (
        <Fragment>
            {BrowserWidgetCardData.map((data, i) =>
                <Col md="4" sm="12" key={i}>
                    <Card className="browser-widget">
                        <CardBody className="media">
                            <div className="media-img"><Image attrImage={{ src: `${data.img}`, alt: '' }} /></div>
                            <div className="media-body align-self-center">
                                <div>
                                    <P>{data.time1} </P>
                                    <H4><span className="counter">
                                        <CountUp end={data.count1} /></span>%</H4>
                                </div>
                                <div>
                                    <P>{data.time2} </P>
                                    <H4><span className="counter">
                                        <CountUp end={data.count2} /></span>%</H4>
                                </div>
                                <div>
                                    <P>{data.time3} </P>
                                    <H4><span className="counter">
                                        <CountUp end={data.count3} /></span>%</H4>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Fragment>
    )
}
export default BrowserWidgetsCard