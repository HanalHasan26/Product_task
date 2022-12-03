import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements'
import TotalSale from './TotalSale';
import TotalVisit from "./TotalVisit";
import SaleValue from "../Ecommerce/SaleValue"
import StockVal from "../Ecommerce/StockValue"
import TotalProfits from "../Ecommerce/TotalProfit"
import NewProducts from '../Ecommerce/NewProduct'
import NewsUpdates from '../Ecommerce/NewsUpdate'
import RiskFactors from '../Ecommerce/RiskFactor'
import OfferProoduct from "../Ecommerce/OfferProduct"
import BestSellers from '../Ecommerce/BestSeller';
import Locations from "../Ecommerce/Location"

const Ecommerce = () => {


    return (
        <Fragment>
            <Breadcrumbs mainTitle="Ecommerce" parent="Dashboard" title="Ecommerce" />
            <Container fluid={true} >
                <Row className="size-column">
                    <Col xl="7 xl-100" className="box-col-12 ">
                        <Row className="dash-chart">
                            <TotalSale />
                            <TotalVisit />
                            <SaleValue />
                            <StockVal />
                        </Row>
                    </Col>
                    <TotalProfits />
                    <NewProducts />
                    <Locations />
                    <NewsUpdates />
                    <RiskFactors />
                    <Col xl="9 xl-100" className="box-col-12">
                        <Row>
                            <OfferProoduct />
                            <BestSellers />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Ecommerce;