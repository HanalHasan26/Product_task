import React, { Fragment, useState, useLayoutEffect, useContext } from 'react';
import { Col } from 'reactstrap';
import { Sliders } from 'react-feather';
import { Link } from 'react-router-dom';
import BonusUI from './BonusUI';
import LevelMenus from './LevelMenu';
import { Image, UL } from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';

const Leftbar = () => {
  const { layoutURL, toggleSidebar } = useContext(CustomizerContext);
  const [bonusui, setBonusUI] = useState(false);
  const [levelMenu, setLevelMenu] = useState(false);
  const [sidebartoggle, setSidebartoggle] = useState(true);
  const width = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
        if (window.innerWidth <= 991) {
          toggleSidebar(true);
          document.querySelector('.page-wrapper').className = 'page-wrapper compact-wrapper';
        } else {
          toggleSidebar(false);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const responsive_openCloseSidebar = (toggle) => {
    if (width <= 991) {
      setBonusUI(false);
      document.querySelector('.page-header').className = 'page-header';
      document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper ';
    } else {
      if (toggle) {
        setSidebartoggle(!toggle);
        document.querySelector('.page-header').className = 'page-header close_icon';
        document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper close_icon ';
        document.querySelector('.mega-menu-container').classList.remove('d-block');
      } else {
        setSidebartoggle(!toggle);
        document.querySelector('.page-header').className = 'page-header';
        document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper ';
      }
    }
  };

  return (
    <Fragment>
      <Col className='header-logo-wrapper col-auto p-0' id='out_side_click'>
        <div className='logo-wrapper'>
          <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}>
            <Image
              attrImage={{
                className: 'img-fluid for-light',
                src: `${require('../../../assets/images/logo/logo.png')}`,
                alt: '',
              }}
            />
            <Image
              attrImage={{
                className: 'img-fluid for-dark',
                src: `${require('../../../assets/images/logo/logo_dark.png')}`,
                alt: '',
              }}
            />
          </Link>
        </div>
        <div className='toggle-sidebar' onClick={() => responsive_openCloseSidebar(sidebartoggle)} style={window.innerWidth <= 991 ? { display: 'block' } : { display: 'none' }}>
          <Sliders className='status_toggle middle sidebar-toggle' id='sidebar-toggle' />
        </div>
      </Col>
      <div className='left-header horizontal-wrapper ps-0 col'>
        <UL attrUL={{ className: 'horizontal-menu flex-row' }}>
          <BonusUI bonusui={bonusui} setBonusUI={setBonusUI} useWindowSize={useWindowSize} setLevelMenu={setLevelMenu} />
          <LevelMenus setBonusUI={setBonusUI} levelMenu={levelMenu} setLevelMenu={setLevelMenu} />
        </UL>
      </div>
    </Fragment>
  );
};

export default Leftbar;
