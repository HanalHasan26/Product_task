import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { H6, LI, UL } from '../../../AbstractElements';

const BonusMenuItems = ({ megaMenuFunction, megaBoxToggler, itemClass, isIcon, menuHeader, menuItems }) => {
  return (
    <Col className="mega-box" onClick={() => megaMenuFunction(megaBoxToggler)}>
      <div className={`link-section ${itemClass}`}>
        <div className={`${megaBoxToggler ? 'active' : ''}`}>
          <H6>{menuHeader}</H6>
        </div>
        <UL attrUL={{ className: `${isIcon ? 'svg-icon' : ''}${megaBoxToggler ? 'd-none' : ''}` }} >
          {menuItems.map((pagesItem, i) => (
            <LI attrLI={{ className: 'border-0' }} key={i}>
              <Link to={pagesItem.path}>
                {isIcon ? <pagesItem.icon /> : ''}
                {pagesItem.title}
              </Link>
            </LI>
          ))}
        </UL>
      </div>
    </Col>);
};

export default BonusMenuItems;