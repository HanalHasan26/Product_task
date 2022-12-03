import WeatheData from './WeatherData'
import React, { Fragment } from 'react'
import { CloudDrizzle } from 'react-feather'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { CloudHailFillAlt } from '../../../../Data/svgIcons'

const WeatherWidgets = () => {
    return (
        <Fragment>
            <Col xl="3" className="xl-50 col-sm-6 box-col-6">
                <Card>
                    <div className="weather-widget-two">
                        <CardBody>
                            <WeatheData />
                            <div className="top-bg-whether">
                                {CloudHailFillAlt}
                            </div>
                            <div className="bottom-whetherinfo">
                                <Row>
                                    <Col>
                                        <CloudDrizzle />
                                    </Col>
                                    <Col>
                                        <div className="whether-content"><span>India, Surat</span>
                                            <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{'36°F'}</H4>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </div>
                </Card>
            </Col>
        </Fragment>
    )
}
export default WeatherWidgets
