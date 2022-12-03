import React, { useEffect, useState } from 'react';
import { Layers } from 'react-feather';
import { H5, LI } from '../../../AbstractElements';
import { Container, Row } from 'reactstrap';
import { errorPages, authPages, usefullPages, comingsoonPages } from '../Pages';
import BonusMenuItems from './BonusMenuItems';
import { Authentication, BonusUi, ComingSoon, ErrorPage, UsefullPages } from '../../../Constant';

const BonusUI = ({ bonusui, setBonusUI, useWindowSize, setLevelMenu }) => {
  const [megaboxtoggle1, setMegaboxtoggle1] = useState(true);
  const [megaboxtoggle2, setMegaboxtoggle2] = useState(true);
  const [megaboxtoggle3, setMegaboxtoggle3] = useState(true);
  const [megaboxtoggle4, setMegaboxtoggle4] = useState(true);
  const width = useWindowSize();

  useEffect(() => {
    if (width <= 1199) {
      setMegaboxtoggle1(true);
      setMegaboxtoggle2(true);
      setMegaboxtoggle3(true);
      setMegaboxtoggle4(true);
    } else {
      setMegaboxtoggle1(false);
      setMegaboxtoggle2(false);
      setMegaboxtoggle3(false);
      setMegaboxtoggle4(false);
    }
  }, [width]);
  const ToggleBonusUI = (value) => {
    setLevelMenu(false);
    if (value) {
      setBonusUI(!value);
      document.querySelector('.mega-menu-container').classList.remove('d-block');
    } else {
      setBonusUI(!value);
      if (width <= 991) {
        document.querySelector('.page-header').className = 'page-header close_icon';
        document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper close_icon ';
        document.querySelector('.mega-menu-container').classList.add('d-block');
      } else {
        document.querySelector('.mega-menu-container').classList.add('d-block');
      }
    }
  };

  const responsiveMegaBox1 = (megabox) => {
    if (width <= 1199) {
      if (megabox) {
        setMegaboxtoggle1(!megabox);
      } else {
        setMegaboxtoggle1(!megabox);
      }
    }
  };
  const responsiveMegaBox2 = (megabox) => {
    if (width <= 1199) {
      if (megabox) {
        setMegaboxtoggle2(!megabox);
      } else {
        setMegaboxtoggle2(!megabox);
      }
    }
  };
  const responsiveMegaBox3 = (megabox) => {
    if (width <= 1199) {
      if (megabox) {
        setMegaboxtoggle3(!megabox);
      } else {
        setMegaboxtoggle3(!megabox);
      }
    }
  };
  const responsiveMegaBox4 = (megabox) => {
    if (width <= 1199) {
      if (megabox) {
        setMegaboxtoggle4(!megabox);
      } else {
        setMegaboxtoggle4(!megabox);
      }
    }
  };
  return (
    <>
      <LI attrLI={{ className: 'mega-menu outside' }}>
        <a className={`nav-link ${bonusui ? 'active' : ''}`} href='#javascript' onClick={() => ToggleBonusUI(bonusui)}>
          <Layers />
          <span>{BonusUi}</span>
        </a>
        <div className='mega-menu-container nav-submenu menu-to-be-close' style={bonusui ? { display: '' } : { display: 'none' }}>
          <Container fluid={true}>
            <Row>
              <div className='mobile-title d-none' onClick={() => ToggleBonusUI(bonusui)}>
                <H5>Mega menu</H5>
                <i className='icon-close'></i>
              </div>
              <BonusMenuItems megaMenuFunction={responsiveMegaBox1} megaBoxToggler={megaboxtoggle1} itemClass='icon' menuHeader={ErrorPage} menuItems={errorPages} />
              <BonusMenuItems megaMenuFunction={responsiveMegaBox2} megaBoxToggler={megaboxtoggle2} itemClass='doted' menuHeader={Authentication} menuItems={authPages} />
              <BonusMenuItems megaMenuFunction={responsiveMegaBox3} megaBoxToggler={megaboxtoggle3} itemClass='dashed-links' menuHeader={UsefullPages} menuItems={usefullPages} />
              <BonusMenuItems megaMenuFunction={responsiveMegaBox4} megaBoxToggler={megaboxtoggle4} itemClass='dashed-links' menuHeader={ComingSoon} menuItems={comingsoonPages} />
            </Row>
          </Container>
        </div>
      </LI>
    </>
  );
};

export default BonusUI;
