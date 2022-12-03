import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import DatePicker from 'react-datepicker';

const CalendarCard = () =>{
    // eslint-disable-next-line
  const [date, setDate] = useState({ date: new Date() });
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());  

  const handleChange = date => {
    setDate(date);
  };

    return(
      <Col xl="4 xl-50" lg="12" className="calendar-sec box-col-6">
        <Card className="gradient-primary o-hidden">
          <CardBody>
            <div className="default-datepicker">
              <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    inline
                  />
            </div><span className="default-dots-stay overview-dots full-width-dots"><span className="dots-group"><span className="dots dots1"></span><span className="dots dots2 dot-small"></span><span className="dots dots3 dot-small"></span><span className="dots dots4 dot-medium"></span><span className="dots dots5 dot-small"></span><span className="dots dots6 dot-small"></span><span className="dots dots7 dot-small-semi"></span><span className="dots dots8 dot-small-semi"></span><span className="dots dots9 dot-small">                </span></span></span>
          </CardBody>
        </Card>
      </Col>
    );
};

export default CalendarCard;