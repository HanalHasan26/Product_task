import React from 'react';
import { P } from '../../../../AbstractElements';

const Time = ({ time }) => {

  return (
    <P attrPara={{ className: "f-w-400" }} >{time}</P>
  );
};

export default Time;