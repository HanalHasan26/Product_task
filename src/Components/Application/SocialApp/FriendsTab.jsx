import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Row, Col, Card, CardHeader, CardFooter } from 'reactstrap';
import axios from 'axios'
import { Follower, Following, TotalPost } from '../../../Constant'
import { Link } from 'react-router-dom'
import { H3, H4, H6, Image, LI, UL } from '../../../AbstractElements';
import { UserCardApi } from '../../../api';
import CustomizerContext from '../../../_helper/Customizer';

const FriendsTab = () => {

    const [cards, setCards] = useState([])
    const { layoutURL } = useContext(CustomizerContext);

    useEffect(() => {
        axios.get(UserCardApi).then(res => setCards(res.data))
    }, [])

    return (
        <Fragment>
            <Row>
                {cards.map((cardItem, i) =>
                    <Col md="6" xl="4 box-col-6 xl-50" key={i}>
                        <Card className="custom-card">
                            <CardHeader>
                                <Image attrImage={{ className: "img-fluid", src: `${require(`../../../assets/images/${cardItem.card_bg}`)}`, alt: "" }} />
                            </CardHeader>
                            <div className="card-profile">
                                <Image attrImage={{ className: "rounded-circle", src: `${require(`../../../assets/images/${cardItem.avatar}`)}`, alt: "" }} />
                            </div>
                            <UL attrUL={{ className: "card-social flex-row" }} >
                                <LI><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></LI>
                                <LI><a href="https://accounts.google.com/"><i className="fa fa-google-plus"></i></a></LI>
                                <LI><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></LI>
                                <LI><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></LI>
                                <LI><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a></LI>
                            </UL>
                            <div className="text-center profile-details">
                                <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile/${layoutURL}`}>
                                    <H4>{cardItem.name}</H4>
                                </Link>
                                <H6>{cardItem.post}</H6>
                            </div>
                            <CardFooter className="row">
                                <Col sm="4 col-4">
                                    <H6>{Follower}</H6>
                                    <H3 attrH3={{ className: "counter" }} >{cardItem.follower}</H3>
                                </Col>
                                <Col sm="4 col-4">
                                    <H6>{Following}</H6>
                                    <H3><span className="counter">{cardItem.following}</span>K</H3>
                                </Col>
                                <Col sm="4 col-4">
                                    <H6>{TotalPost}</H6>
                                    <H3><span className="counter">{cardItem.totalPost}</span>M</H3>
                                </Col>
                            </CardFooter>
                        </Card>
                    </Col>
                )}
            </Row>
        </Fragment>
    );
};

export default FriendsTab;