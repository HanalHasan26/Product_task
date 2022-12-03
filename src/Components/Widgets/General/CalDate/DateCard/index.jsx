import React from 'react'
import { Col } from 'reactstrap'
import { H2, P } from '../../../../../AbstractElements'

const DateCard = () => {
  return (
    <Col xl="6" xs="12" md="6" sm="6">
      <div className="cal-info text-center">
        <H2>{'24'}</H2>
        <div className="d-inline-block mt-2"><span className="b-r-dark pe-3">{'March'}</span><span className="ps-3">{'2022'}</span></div>
        <P attrPara={{ className: "mt-4 f-16 text-muted" }} >{'There is no minimum donation, any sum is appreciated'}</P>
      </div>
    </Col>
  )
}

export default DateCard
