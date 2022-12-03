import React from 'react';
import { Fragment } from 'react';
import { Purchase, PurchaseRet, Sales, SalesReturn } from '../../../../Constant';
import ChartMainData from './ChartMainData';

const ChartMain = () => {

  return (
    <Fragment>
      <ChartMainData value={'1001'} heading={Purchase} chartClass={'small-chart'} />
      <ChartMainData value={'1005'} heading={Sales} chartClass={'small-chart1'} />
      <ChartMainData value={'100'} heading={SalesReturn} chartClass={'small-chart2'} />
      <ChartMainData value={'101'} heading={PurchaseRet} chartClass={'small-chart3'} />
    </Fragment>
  );

};

export default ChartMain;