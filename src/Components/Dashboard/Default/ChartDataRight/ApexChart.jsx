import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { H4 } from '../../../../AbstractElements';
import ConfigDB from '../../../../Config/ThemeConfig';

const SmallApexChart = () => {
  const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
  const option = {
    series: ['60'],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      grid: {
        padding: {
          top: -13,
          right: -8,
          bottom: -18,
          left: -8,
        },
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
      },
      colors: [primary],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: '#000',
              fontSize: '12px',
              fontWeight: 'bold',
              offsetY: 5,
              formatter: function (val) {
                return val= 60
              }
            },
          },
          hollow: {
            size: '35',
          },
        },
      },
    },
  };
  return (
    <>
      <Col xl='3 xl-50' className={`chart_data_right `}>
        <Card>
          <CardBody>
            <Media className='align-items-center'>
              <Media body className='right-chart-content'>
                <H4>
                  {'$95,900'}
                  <span className='new-box'>{'Hot'}</span>
                </H4>
                <span>{'Purchase Order Value'}</span>
              </Media>
              <div className=''>
                <ReactApexChart options={option.options} series={option.series} type='radialBar' height={80} width={90} />
              </div>
            </Media>
          </CardBody>
        </Card>
      </Col>
      <Col xl='3 xl-50' className={`chart_data_right second d-none`}>
        <Card>
          <CardBody>
            <Media className='align-items-center'>
              <Media body className='right-chart-content'>
                <H4>
                  {'$95,900'}
                  <span className='new-box'>{'Hot'}</span>
                </H4>
                <span>{'Purchase Order Value'}</span>
              </Media>
              <div className=''>
                <ReactApexChart options={option.options} series={option.series} type='radialBar' height={80} width={90} />
              </div>
            </Media>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default SmallApexChart;
