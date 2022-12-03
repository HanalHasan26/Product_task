import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { OrderStatus } from '../../../Constant';
import { ShoppingBag } from 'react-feather';
import { H5 } from '../../../AbstractElements';
import ConfigDB from '../../../Config/ThemeConfig';
const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;

const OrderStatusChart = () => {
  const boxMullerRandom = () => {
    let phase = false,
      x1,
      x2,
      w;

    return (function () {
      if (phase !== !phase) {
        do {
          x1 = 2.0 * Math.random() - 1.0;
          x2 = 2.0 * Math.random() - 1.0;
          w = x1 * x1 + x2 * x2;
        } while (w >= 1.0);

        w = Math.sqrt((-2.0 * Math.log(w)) / w);
        return x1 * w;
      } else {
        return x2 * w;
      }
    })();
  };

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setChartData(chartData.concat([boxMullerRandom()]));
    }, 1000);
    return () => clearInterval(interval);
  }, [chartData]);

  return (
    <Fragment>
      <Col xl='7' lg='12' className='box-col-12'>
        <Card>
          <CardHeader>
            <Row>
              <Col xs='9'>
                <H5>{OrderStatus}</H5>
              </Col>
              <Col xs='3' className='text-end'>
                <ShoppingBag className='text-muted' />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <div className='chart-container'>
              <div id='linechart'>
                <Sparklines data={chartData} limit={20} height={100}>
                  <SparklinesLine color={primary} style={{ strokeWidth: 0.4 }} />
                  <SparklinesSpots />
                </Sparklines>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default OrderStatusChart;
