import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Media, Collapse } from 'reactstrap';
import timeline4 from "../../../assets/images/social-app/timeline-4.png";
import { ProfileIntro, SocialNetworks, Dribbble, Facebooks, Twitters, AboutMe, FavouriteMusicBands } from "../../../Constant";
import { Btn, H5, P } from '../../../AbstractElements';
import Followers from '../../Bonus-Ui/Tour/Leftbar/Followers';
import Followings from '../../Bonus-Ui/Tour/Leftbar/Followings';
import Friendss from '../../Bonus-Ui/Tour/Leftbar/Friends';
import LatestPhotoss from '../../Bonus-Ui/Tour/Leftbar/LatestPhoto';

const RightBar = () => {
    const [isIntro, setisIntro] = useState(true);

    return (
        <Fragment>
            <Col xl="12 xl-50 box-col-6">
                <Card>
                    <CardHeader>
                        <H5 attrH5={{ className: "mb-0" }} >
                            <Btn attrBtn={{ color: "link ps-0", onClick: () => setisIntro(!isIntro) }} aria-expanded={isIntro}>{ProfileIntro}</Btn>
                        </H5>
                    </CardHeader>
                    <Collapse isOpen={isIntro}>
                        <CardBody className="filter-cards-view"><span className="f-w-600">{AboutMe} :</span>
                            <P>
                                {"Hi, I’m elana, I’m 30 and I work as a"}
                                {"web Designer for the “Daydreams”"}
                                {"Agency in Pier 56."}
                            </P><span className="f-w-600">{"Favourite TV shows"} :</span>
                            <P>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero."}</P><span className="f-w-600">{FavouriteMusicBands} :</span>
                            <P>{"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero."}</P>
                            <div className="social-network theme-form"><span className="f-w-600">{SocialNetworks}</span>
                                <Btn attrBtn={{ color: "social-btn btn-fb mb-2 text-center" }} ><i className="fa fa-facebook m-r-5"></i>{Facebooks}</Btn>
                                <Btn attrBtn={{ color: "social-btn btn-twitter mb-2 text-center" }} ><i className="fa fa-twitter m-r-5"></i>{Twitters}</Btn>
                                <Btn attrBtn={{ color: "social-btn btn-google text-center" }} ><i className="fa fa-dribbble m-r-5"></i>{Dribbble}</Btn>
                            </div>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Followers colClass={'col-xl-12 col-sm-6 xl-50 box-col-6'} />
            <Followings colClass={'col-xl-12 col-sm-6 xl-50 box-col-6'} />
            <LatestPhotoss colClass={'col-xl-12 col-sm-6 xl-50 box-col-6'} />
            <Friendss colClass={'col-xl-12 col-sm-6 xl-50 box-col-6'} />
            <Col xl="12 xl-50 box-col-6">
                <Card className="image-sec"><Media className="img-fluid" src={timeline4} alt="" /></Card>
            </Col>
        </Fragment >
    );
};

export default RightBar;