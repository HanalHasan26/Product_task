import React from 'react'
import CountUp from 'react-countup'
import { Row, Col, Card } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { WidgetJoinsData } from '../../../../Data/MockTable/WidgetJoins'

const Widgetjoins = () => {
  return (
    <Col xl="6" className="xl-100 box-col-12">
      <Card className="widget-joins">
        <Row>
          {WidgetJoinsData.map((data, i) =>
            <Col sm="6" className="pe-0" key={i}>
              <div className="media border-after-xs">
                <div className="align-self-center me-3">{data.rate}<i className={`fa ${data.arrow} ms-2`}></i></div>
                <div className="media-body details ps-3"><span className="mb-1">{data.heading}</span>
                  <H4 attrH4={{ className: "mb-0 counter digits" }} ><CountUp end={data.value} /></H4>
                </div>
                <div className="media-body align-self-center">{data.icon}</div>
              </div>
            </Col>
          )}
        </Row>
      </Card>
    </Col>
  )
}

export default Widgetjoins
