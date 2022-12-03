import React from 'react';
import { Col } from 'reactstrap';
import { H5, P } from '../../../../../AbstractElements';

const LeftTabData =({ heading, desc }) =>{
    return(
      <Col xl="12" className="p-0 left_side_earning">
        <H5>{heading}</H5>
        <P attrPara={{className:"font-roboto"}} >{desc}</P>
      </Col>
    );
};

export default LeftTabData;