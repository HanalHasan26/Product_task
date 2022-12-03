import React, { Fragment } from 'react';
import { Btn, H4, P, H6, UL, LI } from '../../../AbstractElements';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';

const LoginForm = () => {

    return (
        <Fragment>
            <div className="login-card">
                <div className="login-main">
                    <Form className="theme-form login-form">
                        <H4>Login</H4>
                        <H6>Welcome back! Log in to your account.</H6>
                        <FormGroup>
                            <Label className="col-form-label">Email Address</Label>
                            <Input className="form-control" type="email" required="" placeholder="Test@gmail.com" />
                        </FormGroup>
                        <FormGroup className="position-relative">
                            <Label className="col-form-label">Password</Label>
                            <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                            <div className="show-hide"><span className="show"></span></div>
                        </FormGroup>
                        <FormGroup className="position-relative">
                            <div className="checkbox">
                                <Input id="checkbox1" type="checkbox" />
                                <Label className="text-muted" for="checkbox1">Remember password</Label>
                            </div><Link className="link" to={`${process.env.PUBLIC_URL}/pages/authentication/forget-pwd`}>Forgot password?</Link>
                        </FormGroup>
                        <FormGroup>

                            <Btn attrBtn={{ className: 'd-block w-100 mt-2', color: 'primary', type: 'submit' }} >Sign in</Btn>
                        </FormGroup>
                        <div className="login-social-title">
                            <H6 attrH6={{ className: 'text-muted mt-4 or' }}>Or Sign in with</H6>
                        </div>
                        <FormGroup>
                            <UL attrUL={{ as: 'ul', className: 'login-social d-flex justify-content-center flex-row' }} >
                                <LI className="bg-light"><a href="https://www.linkedin.com/login" ><Linkedin /></a></LI>
                                <LI className="bg-light"><a href="https://www.linkedin.com/login" ><Twitter /></a></LI>
                                <LI className="bg-light"><a href="https://www.linkedin.com/login" ><Facebook /></a></LI>
                                <LI className="bg-light"><a href="https://www.instagram.com/login" ><Instagram /></a></LI>
                            </UL>
                        </FormGroup>
                        <P attrPara={{ className: 'text-center mb-0' }}>Don't have account?<Link className="ms-2" to={`${process.env.PUBLIC_URL}/pages/authentication/register-simple`}>Create Account</Link></P>
                    </Form>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginForm;