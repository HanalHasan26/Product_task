import React, { useState } from 'react';
import {

  Minimize,
  Maximize,
 } from 'react-feather';

const MaxMiniSize = () =>{
    const [isFullScreen, setIsFullScreen] = useState(false);
 /*
  *full screen function
  */
 function goFull() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
        setIsFullScreen(prev => prev =true);
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
        setIsFullScreen(prev => prev =false);
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
    return(
      <li className="maximize">
        <a className="text-dark" href="#javascript" onClick={goFull}>
          {isFullScreen?<Maximize/> :<Minimize />} 
        </a>
      </li>
    );
};

export default MaxMiniSize;