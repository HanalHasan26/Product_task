import React from 'react';
import { Col } from 'reactstrap';
import ChartistChart from 'react-chartist';
import { smallchart1data, smallchart1option } from '../../ChartsData/ChatistChartData';
import { H4 } from '../../../../AbstractElements';

const ChartMainData = ({ value, heading, chartClass }) =>{
    return(
      <Col xl="3" md="6" sm="6" className="p-0 box-col-6">
        <div className="media align-items-center">
          <div className="hospital-small-chart">
            <div className="small-bar">
              <ChartistChart
                            className={`${chartClass} flot-chart-container`}
                            data={smallchart1data}
                            options={smallchart1option}
                            type={'Bar'}
                            listener={{
                              'draw': function (data) {
                                if (data.type === 'bar') {
                                  data.element.attr({
                                    style: 'stroke-width: 3px'
                                  });
                                }
                              }
                            }}
                          />
            </div>
          </div>
          <div className="media-body">
            <div className="right-chart-content">
              <H4>{value}</H4><span>{heading} </span>
            </div>
          </div>
        </div>
      </Col>
    );
};

export default ChartMainData;