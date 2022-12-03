// Remaining to change path
import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import { Card, CardFooter, CardHeader, Col } from 'reactstrap';
import avtar from '../../../../assets/images/avtar/3.jpg';
import usercard from '../../../../assets/images/user-card/3.jpg';
import { H3, H4, H6, LI, UL, Image } from '../../../../AbstractElements';

const ManagerProfile = () => {
    return (
        <Fragment>
            <Col xl="4 xl-50" md="6" className="box-col-6">
                <Card className="custom-card">
                    <CardHeader className="p-0"><Image attrImage={{ className: 'img-fluid', src: `${usercard}`, alt: '' }} /></CardHeader>
                    <div className="card-profile"><Image attrImage={{ className: 'rounded-circle', src: `${avtar}`, alt: '' }} /></div>
                    <UL attrUL={{ className: 'simple-list card-social justify-content-center d-flex flex-row border-0' }}>
                        <LI attrLI={{ className: 'border-0' }}><a href="#javascript"><i className="fa fa-facebook"></i></a></LI>
                        <LI attrLI={{ className: 'border-0' }}><a href="#javascript"><i className="fa fa-google-plus"></i></a></LI>
                        <LI attrLI={{ className: 'border-0' }}><a href="#javascript"><i className="fa fa-twitter"></i></a></LI>
                        <LI attrLI={{ className: 'border-0' }}><a href="#javascript"><i className="fa fa-instagram"></i></a></LI>
                        <LI attrLI={{ className: 'border-0' }}><a href="#javascript"><i className="fa fa-rss"></i></a></LI>
                    </UL>
                    <div className="text-center profile-details">
                        <H4>Scarlett john</H4>
                        <H6>Manager</H6>
                    </div>
                    <CardFooter className="row">
                        <Col sm="4 col-4" >
                            <H6>Follower</H6>
                            <H3 attrH3={{className:"counter"}} >
                                <CountUp end={9564} /></H3>
                        </Col>
                        <Col sm="4 col-4">
                            <H6>Following</H6>
                            <H3><span className="counter"><CountUp end={49} /></span>K</H3>
                        </Col>
                        <Col sm="4 col-4">
                            <H6>TotalPost</H6>
                            <H3><span className="counter"><CountUp end={96} /></span>M</H3>
                        </Col>
                    </CardFooter>
                </Card>
            </Col>
        </Fragment>
    );
};
export default ManagerProfile;