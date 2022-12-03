import React from 'react';
import { Card, CardBody,  Col } from 'reactstrap';
import { Appointment, Done, JohnLoren, Pending, Today, Tomorrow, VenterLoren, Yesterday } from '../../../../Constant';
import CardHeaderCommon from '../../Common/CardHeader';
import img1 from '../../../../assets/images/appointment/app-ent.jpg';
import img2 from '../../../../assets/images/appointment/app-ent.jpg'
import { Image, P } from '../../../../AbstractElements';

const AppointmentCard = () => {
  
  return (
    <Col xl="12" className="appointment">
      <Card>
        <CardHeaderCommon title={Appointment} options={[Today, Tomorrow, Yesterday]} />
        <CardBody className="pt-0">
          <div className="appointment-table table-responsive">
            <table className="table table-bordernone">
              <tbody>
                <tr>
                  <td>
                    <Image attrImage={{ className: "img-fluid img-40 rounded-circle mb-3", src: `${img1}`, alt: "" }} />
                    <div className="status-circle bg-primary"></div>
                  </td>
                  <td className="img-content-box"><span className="d-block">{VenterLoren}</span><span className="font-roboto">Now</span></td>
                  <td>
                    <P attrPara={{ className: "m-0 font-primary" }} >{"28 Sept"}</P>
                  </td>
                  <td className="text-end">
                    <div className="button btn btn-primary">{Done}<i className="fa fa-check-circle ms-2"></i></div>
                  </td>
                </tr>
                <tr>
                  <td><Image attrImage={{ className: "img-fluid img-40 rounded-circle", src: `${img2}`, alt: "" }} />
                    <div className="status-circle bg-primary"></div>
                  </td>
                  <td className="img-content-box"><span className="d-block">{JohnLoren}</span><span className="font-roboto">{"11:00"}</span></td>
                  <td>
                    <P attrPara={{ className: "m-0 font-primary" }} >{"22 Sept"}</P>
                  </td>
                  <td className="text-end">
                    <div className="button btn btn-danger">{Pending}<i className="fa fa-check-circle ms-2"></i></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AppointmentCard;