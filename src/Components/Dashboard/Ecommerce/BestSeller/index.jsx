import React from 'react';
import { Col, Card, CardBody, Table } from 'reactstrap';
import { P, Image } from '../../../../AbstractElements';
import { BestSeller } from '../../../../Constant';
import { BestSellerData } from '../../../../Data/MockTable/BestSeller';

const BestSellers = () => {
  return (
    <Col xl="12">
      <Card>
        <CardBody>
          <div className="best-seller-table responsive-tbl">
            <div className="item">
              <div className="table-responsive product-list">
                <Table borderless>
                  <thead>
                    <tr>
                      <th className="f-22">{BestSeller}</th>
                      <th>{'Date'}</th>
                      <th>{'Product'}</th>
                      <th>{'Country'}</th>
                      <th>{'Total'}</th>
                      <th className="text-end">{'Status'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BestSellerData.map((seller, i) =>
                      <tr key={i}>
                        <td>
                          <div className="d-inline-block align-middle">
                            <Image attrImage={{ className: 'img-40 m-r-15 rounded-circle align-top', src: require(`../../../../assets/images/${seller.avtar}`), alt: '' }} />
                            <div className="status-circle bg-primary"></div>
                            <div className="d-inline-block"><span>{seller.name}</span>
                              <P attrPara={{ className: 'font-roboto' }} >{seller.year}</P>
                            </div>
                          </div>
                        </td>
                        <td>{seller.date}</td>
                        <td>{seller.product}</td>
                        <td><i className={`flag-icon ${seller.countryIcon}`}></i></td>
                        <td> <span className="label">{seller.total}</span></td>
                        <td className="text-end"><i className="fa fa-check-circle"></i>{seller.status}</td>
                      </tr>

                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BestSellers;
