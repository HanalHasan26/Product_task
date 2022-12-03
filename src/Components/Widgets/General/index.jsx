import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import NumbersUp from './NumbersUp'
import ArrowCard from './ArrowCard'
import Widgetjoins from './WidgetJoins'
import CalDate from './CalDate'
import ColckCalendar from './ClockCalendar'
import RecentActivities from './RecentActivities'
import WeatherWidgets from './WetherWidget'
import ManagerProfile from './ManagerProfile'
import DeveloperProfile from "./DeveloperProfile"
import SocialHandle from "./SocialHandle"
import BrowserWidgetsCard from "./BrowserWidgetsCard"
import ProductCard from './ProductCard';
import EmployeeStatusCard from './EmployeeStatusCard'
import CalenderWidgetCard from './CalenderWidgetCard'
import ContactCard from './ContactCard'

const GeneralComponent = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="General" parent="Widgets" title="General" />
            <Container fluid={true} className="general-widget">
                <Row>
                    <NumbersUp />
                    <ArrowCard />
                    <Widgetjoins />
                    <CalDate />
                    <ColckCalendar />
                    <WeatherWidgets />
                    <RecentActivities />
                    <ManagerProfile />
                    <DeveloperProfile />
                    <SocialHandle />
                    <BrowserWidgetsCard />
                    <ProductCard />
                    <EmployeeStatusCard />
                    <CalenderWidgetCard />
                    <ContactCard />
                </Row>
            </Container>
        </Fragment>
    );
};

export default GeneralComponent;