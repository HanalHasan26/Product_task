import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import FindCourseClass from './FindCourse';
import CategoriesClass from './Categories';
import UpcomingClass from './UpcomingClass';

const LearningFilter = () => {

    return (
        <Fragment>
            <Col xl="3" className='xl-40 box-col-4'>
                <div className="job-sidebar">
                    <div className={`job-left-aside custom-scrollbar`}>
                        <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                            <Row>
                                <FindCourseClass />
                                <CategoriesClass />
                                <UpcomingClass />
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        </Fragment >
    );
};

export default LearningFilter;