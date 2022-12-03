import React, { useState } from 'react'
import { Col } from 'reactstrap'
import DatePicker from "react-datepicker"

const CalCard = () => {
  const [startDate, setStartDate] = useState(new Date())
  const handleChange = date => {
    setStartDate(date)
  }
  return (
    <Col xl="6" xs="12" md="6" sm="6">
      <div className="cal-datepicker">
        <div className="datepicker-here float-sm-end" data-language="en">
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            inline
          />
        </div>
      </div>
    </Col>
  )
}

export default CalCard;
