import React from 'react'
import { Col, Card } from 'reactstrap'
import Clock from 'react-clock'
import { kolkata_India } from '../../../../Constant'
import { CloudLightningMoon } from '../../../../Data/svgIcons'
import { P } from '../../../../AbstractElements'

const ColckCalendar = () => {

  const date = new Date();

  const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  var d = new Date()
  let dateshow = month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()

  return (
    <Col xl="3" sm="6" className="xl-50 box-col-6">
      <Card>
        <div className="mobile-clock-widget">
          <div className="bg-svg">
            {CloudLightningMoon}
          </div>
          <div>
            <Clock
              className={'clock'}
              value={date.date}
            />
            <div id="date" className="date f-24 mb-2">
              <span>{dateshow}</span>
            </div>
            <div>
              <P attrPara={{ className: "m-0 f-14 text-light" }}>{kolkata_India}</P>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default ColckCalendar
