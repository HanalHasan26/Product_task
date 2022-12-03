import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import Filter from './Filter';
import Location from './Location';
import JobTitleClass from './JobTitle';
import Industry from './Industry';
import SkillClass from './Skill';

const Sidebar = () => {

    return (
        <Fragment>
            <Col xl="3" className="box-col-4 xl-40">
                <div className="job-sidebar">
                    <div className={`job-left-aside custom-scrollbar open`}>
                        <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                            <Row>
                                <Filter />
                                <Location />
                                <JobTitleClass />
                                <Industry />
                                <SkillClass />
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment>
    );
};

export default Sidebar;