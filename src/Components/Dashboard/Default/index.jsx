import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';
import GreetingCard from '../../Dashboard/Default/GreetingCard/index';
import SummaryEarnings from '../Default/SummaryEarnings';
import ChartMain from '../../Dashboard/Default/ChartMain/index';
import ChartDataRight from '../Default/ChartDataRight';
import NewsCard from "../Default/NewsCard";
import AppointmentCard from "../Default/AppointmentCard"
import AlertCard from '../Default/AlertCard';
import NotificationCard from "../Default/NotifactionCard"
import MarketValueCard from "../Default/MarketValueCard"
import ChatCard from "../Default/ChatCard"
import CalendarCard from '../Default/CalendarCard';

const Dashboard = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Default" parent="Dashboard" title="Default" />
            <Container fluid={true} className="dashboard-default-sec">
                <Row className="second-chart-list third-news-update">
                    <GreetingCard />
                    <SummaryEarnings />
                    <Col xl="9 xl-100" className="chart_data_left box-col-12">
                        <Card>
                            {/* <CardBody className="p-0">
                                <Row className="m-0 chart-main">
                                    <ChartMain />
                                </Row>
                            </CardBody> */}
                        </Card>
                    </Col >
                    <ChartDataRight />
                    <NewsCard />
                    <Col xl="4 xl-50" className="appointment-sec box-col-6">
                        <Row>
                            <AppointmentCard />
                            <AlertCard />
                        </Row>
                    </Col>
                    <NotificationCard />
                    <MarketValueCard />
                    <ChatCard />
                    <CalendarCard /> 
                </Row>
            </Container>
        </Fragment>
    );
};

export default Dashboard;
