import React from 'react';
import { Card, CardBody, Col, Table } from 'reactstrap';
import { CouponCode, NewProduct } from '../../../../Constant';
import { NewProductData } from '../../../../Data/MockTable/NewProduct';
import CommonHeader2 from '../../../../_helper/Ecommerce/Common/CommonHeader2';
import { Image, P } from '../../../../AbstractElements';

const NewProducts = () => {
  return (
    <Col xl="4 xl-50" className="box-col-12">
      <Card>
        <CommonHeader2 heading={NewProduct} />
        <CardBody className="pt-0">
          <div className="our-product">
            <div className="table-responsive">
              <Table borderless>
                <tbody className="f-w-500">
                  {NewProductData.map((product, i) =>
                    <tr key={i}>
                      <td>
                        <div className="media">
                          <Image attrImage={{ className: "img-fluid m-r-15 rounded-circle", src: `${require(`../../../../assets/images/${product.img}`)}`, alt: "" }} />
                          <div className="media-body"><span>{product.prodName}</span>
                            <P attrPara={{ className: 'font-roboto' }} >{product.qty}</P>
                          </div>
                        </div>
                      </td>
                      <td>
                        <P>{CouponCode}</P><span>{product.coponCode}</span>
                      </td>
                      <td>
                        <P>{product.discRate}</P><span>{product.price}</span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewProducts;
