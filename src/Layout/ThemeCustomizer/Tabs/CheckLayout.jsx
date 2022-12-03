import React, { Fragment, useContext, useEffect } from 'react';
import { H6, LI } from '../../../AbstractElements';
import ConfigDB from '../../../Config/ThemeConfig';
import CustomizerContext from '../../../_helper/Customizer';
import { Media } from 'reactstrap';
import one from '../../../assets/images/layouts/1.jpg';
import two from '../../../assets/images/layouts/2.jpg';
import three from '../../../assets/images/layouts/3.jpg';
import four from '../../../assets/images/layouts/4.jpg';
import five from '../../../assets/images/layouts/5.jpg';
import six from '../../../assets/images/layouts/6.jpg';
import seven from '../../../assets/images/layouts/7.jpg';
import eight from '../../../assets/images/layouts/8.jpg';
import nine from '../../../assets/images/layouts/9.jpg';
import ten from '../../../assets/images/layouts/10.jpg';
import eleven from '../../../assets/images/layouts/11.jpg';
import twelve from '../../../assets/images/layouts/12.jpg';
import { classes } from '../../../Data/Layouts';
import { useNavigate } from 'react-router';

const CheckLayout = () => {
  const { addSidebarLayouts } = useContext(CustomizerContext);
  const history = useNavigate();
  const sidebarSettings = ConfigDB.data.sidebar_setting || localStorage.getItem('sidebar_Settings');

  useEffect(() => {
    ConfigDB.data.settings.sidebar_setting = sidebarSettings;
  }, []);

  const handlePageLayputs = (type) => {
    let key = Object.keys(type).pop();
    let val = Object.values(type).pop();
    const url = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/'));
    const modifyURL = url + '/' + Object.keys(type)
    addSidebarLayouts(val);
    localStorage.setItem("layout", key)
    history(modifyURL);
  }

  return (
    <Fragment>
      <ul className="sidebar-type layout-grid layout-types">
        {/* attrUL={{ className: "sidebar-type layout-grid layout-types" }}  */}
        <LI attrLI={{ dataattr: "compact-sidebar", onClick: (e) => handlePageLayputs(classes[0]) }} >

          {/* // onClick={(e) => handlePageLayputs(classes[0])} */}

          <div className="layout-img">
            {' '}
            <Media src={one} className="img-fluid" alt="" />
            <H6>Dubai</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "default-body", className: 'only-body', onClick: (e) => handlePageLayputs(classes[1]) }}
        // 
        >
          <div className="layout-img">
            <Media src={two} className="img-fluid" alt="" />
            <H6>London</H6>
          </div>
        </LI>

        <LI attrLI={{ dataattr: "modern-layout", onClick: (e) => handlePageLayputs(classes[2]) }}
        // onClick={(e) => handlePageLayputs(classes[2])}
        >
          <div className="layout-img">
            <Media src={nine} className="img-fluid" alt="" />
            <H6>Seoul</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "material-layout", onClick: (e) => handlePageLayputs(classes[3]) }}
        // onClick={(e) => handlePageLayputs(classes[3])}
        >
          <div className="layout-img">
            <Media src={ten} className="img-fluid" alt="" />
            <H6>Los Angeles</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "dark-sidebar",  onClick: (e) => handlePageLayputs(classes[4]) }}>
          <div className="layout-img">
            <Media src={three} className="img-fluid" alt="" />
            <H6>Paris</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "compact-wrap",  onClick: (e) => handlePageLayputs(classes[5]) }}>
          <div className="layout-img">
            <Media src={four} className="img-fluid" alt="" />
            <H6>Tokyo</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "color-sidebar", onClick: (e) => handlePageLayputs(classes[6]) }}>
          <div className="layout-img">
            <Media src={five} className="img-fluid" alt="" />
            <H6>Madrid</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "compact-small", onClick: (e) => handlePageLayputs(classes[7]) }} >
          <div className="layout-img">
            <Media src={six} className="img-fluid" alt="" />
            <H6>Moscow</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "compact-small", className: 'box-layout', onClick: (e) => handlePageLayputs(classes[8]) }}>
          <div className="layout-img">
            <Media src={seven} className="img-fluid" alt="" />
            <H6>New York</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "enterprice-type", onClick: (e) => handlePageLayputs(classes[9]) }}>
          <div className="layout-img">
            <Media src={eight} className="img-fluid" alt="" />
            <H6>Singapore</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "material-icon", onClick: (e) => handlePageLayputs(classes[10]) }}>
          <div className="layout-img">
            <Media src={eleven} className="img-fluid" alt="" />
            <H6>Rome</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: "advance-type", onClick: (e) => handlePageLayputs(classes[11]) }}>
          <div className="layout-img">
            <Media src={twelve} className="img-fluid" alt="" />
            <H6>Barcelona</H6>
          </div>
        </LI>
      </ul>
    </Fragment>
  );
};

export default CheckLayout;