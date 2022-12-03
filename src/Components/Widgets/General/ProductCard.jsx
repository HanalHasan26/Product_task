import React, { Fragment, useContext } from 'react';
import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { WidgetsProductData } from '../../Common/Data/Widgets';
import CustomizerContext from '../../../_helper/Customizer';

const ProductCard = () => {
    const { layoutURL } = useContext(CustomizerContext);
    return (
        <Fragment>
            <Col xl="6" className="xl-100 box-col-12">
                <Card>
                    <CardHeader className="d-flex justify-content-between align-items-center">
                        <H5>PRODUCTS CART</H5>
                    </CardHeader>
                    <CardBody>
                        <div className="user-status table-responsive">
                            <Table className="table table-bordernone">
                                <thead>
                                    <tr>
                                        <th scope="col">Details</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {WidgetsProductData.map((item) =>
                                        <tr key={item.id}>
                                            <td><Link to={`${process.env.PUBLIC_URL}/app/ecommerce/product/${layoutURL}`}>{item.details}</Link></td>
                                            <td>{item.quantity}</td>
                                            <td className={item.colorClass}>{item.status}</td>
                                            <td>
                                                {item.badge}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default ProductCard;