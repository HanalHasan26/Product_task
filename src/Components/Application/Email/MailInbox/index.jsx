import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import Email from './Email';
import MailContain from './MailContain';
import MailSidebar from './MailSidebar';

const MailInboxContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="Email Application" parent="Apps" title="Email App" />
            <Container fluid={true}>
                <div className="email-wrap">
                    <Row>
                        <Email />
                        <MailSidebar />
                        <MailContain />
                    </Row>
                </div>
            </Container>

        </Fragment>
    );
};
export default MailInboxContain;