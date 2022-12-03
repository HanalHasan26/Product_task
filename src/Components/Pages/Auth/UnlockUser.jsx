import React, { Fragment } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { Link } from 'react-router-dom';

const UnlockUser = () => {
    return (
        <Fragment>
            <section>
                <Container fluid={true} className="p-0 login-page">
                    <Row className="m-0">
                        <Col className="p-0">
                            <div className="login-card">
                                <div className="login-main unlock-user">
                                    <Form className="theme-form login-form">
                                        <H4>Unlock</H4>
                                        <FormGroup className="position-relative">
                                            <Label className="col-form-label">Enter your Password</Label>
                                            <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                            <div className="show-hide"><span className="show"> </span></div>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="checkbox p-0">
                                                <Input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" for="checkbox1">Remember password</Label>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Btn attrBtn={{ className: "d-block w-100", color: "primary", type: "submit" }} >Unlock  </Btn>
                                        </FormGroup>
                                        <P attrPara={{ className: 'mb-0' }}>Already have an account?<Link className="ms-2" to={`${process.env.PUBLIC_URL}/pages/authentication/login-simple`}>Sign in</Link></P>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default UnlockUser;