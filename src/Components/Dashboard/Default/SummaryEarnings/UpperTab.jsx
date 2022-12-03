import React from 'react'
import { Fragment } from 'react'
import { Col } from 'reactstrap'
import { LI, UL } from '../../../../AbstractElements'
import { Daily, Monthly, Online, Store, Weekly, Yearly } from '../../../../Constant'

const UpperTab = () => {
  return (
    <Fragment>
      <Col xl="8" md="8" sm="8" className="p-0">
        <div className="inner-top-left">
          <UL attrUL={{ as: 'ul', className: 'simple-list d-flex list-unstyled flex-row' }} >
            <LI attrLI={{ className: 'border-0' }}>{Daily}</LI>
            <LI attrLI={{ className: "active border-0", color: 'transprent' }} >{Weekly}</LI>
            <LI attrLI={{ className: 'border-0' }}>{Monthly}</LI>
            <LI attrLI={{ className: 'border-0' }}>{Yearly}</LI>
          </UL>
        </div>
      </Col>

      <Col sm="4" className="p-0 justify-content-end">
        <div className="inner-top-right">
          <UL attrUL={{ className: "d-flex list-unstyled justify-content-end flex-row" }} >
            <LI attrLI={{ className: 'border-0' }} >{Online}</LI>
            <LI attrLI={{ className: 'border-0' }}>{Store}</LI>
          </UL>
        </div>
      </Col>
    </Fragment>
  )
}

export default UpperTab