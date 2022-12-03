import React from 'react';

const BottomTabData = ({ heading, amount, iconName, bgSecondary }) =>{
    return(
      <div className="media p-0">
        <div className={`media-left ${bgSecondary}`}><i className={`icofont ${iconName}`}></i></div>
        <div className="media-body">
          <h6>{heading}</h6>
          <p>{amount}</p>
        </div>
      </div>
    );
};

export default BottomTabData;