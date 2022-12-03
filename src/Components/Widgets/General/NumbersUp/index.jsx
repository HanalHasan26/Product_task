import React, { Fragment } from 'react'
import CountUp from 'react-countup'
import { Card, CardBody, Col } from 'reactstrap'
import { H4 } from '../../../../AbstractElements'
import { NumbersUpData } from '../../../../Data/MockTable/NumbersUp'

const NumbersUp = () => {
  return (
    <Fragment>
      {NumbersUpData.map((data, i) =>
        <Col sm="6" xl="3" lg="6" key={i}>
          <Card className="o-hidden">
            <CardBody className={data.color}>
              <div className="media static-top-widget">
                <div className="align-self-center text-center">
                  {data.icon}
                </div>
                <div className="media-body"><span className="m-0">{data.heading}</span>
                  <H4 attrH4={{className:"mb-0 counter"}} ><CountUp end={data.amount} /></H4><span>  {data.icon} </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      )}

    </Fragment>
  )
}

export default NumbersUp
