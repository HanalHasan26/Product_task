import React from 'react';
import { Image, P } from '../../../../AbstractElements';


const AppointmentCardData = ({ imgClass, imgPath, name, btnClass, btnName, time, date }) => {
  return (
    <tr>
      <td>
        <Image attrImage={{ className: `img-fluid img-40 rounded-circle ${imgClass}`, src: `${imgPath}`, alt: "" }} />
        <div className="status-circle bg-primary"></div>
      </td>
      <td className="img-content-box"><span className="d-block">{name}</span><span className="font-roboto">{time}</span></td>
      <td>
        <P className="m-0 font-primary">{date}</P>
      </td>
      <td className="text-end">
        <div className={`button btn ${btnClass}`}>{btnName}<i className="fa fa-check-circle ms-2"></i></div>
      </td>
    </tr>
  );
};

export default AppointmentCardData;