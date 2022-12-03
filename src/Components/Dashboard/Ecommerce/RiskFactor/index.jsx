import React from 'react'
import { Col, Card, CardBody } from 'reactstrap'
import ApexCharts from 'react-apexcharts'
import { DownloadDetails, Duration, GoalArchive, RiskFactor, TotalGoal } from '../../../../Constant'
import CommonHeader2 from '../../../../_helper/Ecommerce/Common/CommonHeader2'
import { Riskfactorchart } from "../../ChartsData/ApexChartsData"
import { H5, H6 } from '../../../../AbstractElements'

const RiskFactors = () => {
  return (
    <Col xl="3 " className="risk-col xl-100 box-col-12">
      <Card className="total-users">
        <CommonHeader2 heading={RiskFactor} />
        <CardBody className="pt-0">
          <div className="apex-chart-container goal-status text-center row">
            <div className="rate-card">
              <Col xl="12">
                <div className="goal-chart">
                  <ApexCharts id="riskfactorchart" options={Riskfactorchart.options} series={Riskfactorchart.series} type='radialBar' height={350} />
                </div>
                <div className="goal-end-point">
                  <ul>
                    <li className="mt-0 pt-0">
                      <H6 attrH6={{ className: 'font-primary' }} >{'As From'}</H6>
                      <H6 attrH6={{ className: 'f-w-400' }} >{'24 March 2021'}</H6>
                    </li>
                    <li>
                      <H6 attrH6={{ className: 'mb-2 f-w-400' }} >{TotalGoal}</H6>
                      <H5 attrH5={{ className: 'mb-0' }} >{'$94,000.20'}</H5>
                    </li>
                  </ul>
                </div>
              </Col>
            </div>
            <ul>
              <Col xl="12">
                <li>
                  <div className="goal-detail">
                    <H6> <span className="font-primary">{GoalArchive} : </span>{'$91,000.000'}</H6>
                    <div className="progress sm-progress-bar progress-animate">
                      <div className="progress-gradient-primary" role="progressbar" style={{ width: '60%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="goal-detail mb-0">
                    <H6><span className="font-primary">{Duration}: </span>{'9 Month'}</H6>
                    <div className="progress sm-progress-bar progress-animate">
                      <div className="progress-gradient-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="btn-download btn btn-gradient f-w-500">{DownloadDetails}</div>
                </li>
              </Col>
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RiskFactors
