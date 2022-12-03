import React, { Fragment, useState, useCallback } from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import HeaderProfile from './HeaderProfile';
import NavComponent from './NavComponent';
import TabComponent from './TabComponent';


const LeftContact = () => {
    const [activeTab, setActiveTab] = useState('1');

    const callback = useCallback((tab) => {
        setActiveTab(tab);
    }, []);


    return (
        <Fragment>
            <Col xl="3" className="xl-30 box-col-4">
                <div className='email-sidebar'>
                    <div className={`email-left-aside`}>
                        <Card>
                            <CardBody>
                                <div className="email-app-sidebar left-bookmark">
                                    <HeaderProfile />
                                    <NavComponent callbackActive={callback} />
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Col>
            <Col xl="9" md="12" className="box-col-8 xl-70">
                <div className="email-right-aside bookmark-tabcontent contacts-tabs">
                    <div className="email-body radius-left">
                        <div className="ps-0">
                            <TabComponent activeTab={activeTab} />
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};

export default LeftContact;