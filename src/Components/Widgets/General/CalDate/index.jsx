import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import DateCard from './DateCard'
import CalCard from './CalCard'

const CalDate = () => {

  return (
    <Col xl="6" className="xl-100 box-col-12">
      <Card>
        <CardBody className="cal-date-widget">
          <Row>
            <DateCard />
            <CalCard />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CalDate
