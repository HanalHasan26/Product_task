import React, { useContext, useState } from 'react';
import CustomizerContext from '../../../_helper/Customizer';

const MoonLight = () => {
  const { addMixBackgroundLayout } = useContext(CustomizerContext);
  const [moonlight, setMoonlight] = useState(false);

  const MoonlightToggle = (light) => {
    if (light) {
      addMixBackgroundLayout('light-only');
      document.body.className = 'light-only';
      setMoonlight(!light);
    } else {
      addMixBackgroundLayout('dark-only');
      document.body.className = 'dark-only';
      setMoonlight(!light);
    }
  };

  return (
    <li>
      <div className="mode" onClick={() => MoonlightToggle(moonlight)}>
        <i
          className={`fa ${moonlight ? 'fa-lightbulb-o' : 'fa-moon-o'}`}
        ></i>
      </div>
    </li>
  );
};

export default MoonLight;