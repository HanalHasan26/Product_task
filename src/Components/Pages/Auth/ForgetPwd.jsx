import React, { Fragment } from 'react';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, H6, P } from '../../../AbstractElements';

const ForgetPwd = () => {
  return (
    <Fragment>
      <section>
        <Container className='p-0 login-page' fluid={true}>
          <Row className='m-0'>
            <Col className='p-0'>
              <div className='login-card'>
                <div className='login-main'>
                  <Form className='theme-form login-form'>
                    <H4 attrH4={{ className: 'mb-3' }}>Reset Your Password</H4>
                    <FormGroup>
                      <Label>Enter Your Mobile Number</Label>
                      <Row>
                        <Col xl='4' sm='3'>
                          <Input className='form-control' type='text' value='+ 91' />
                        </Col>
                        <Col xl='8' sm='9'>
                          <Input className='form-control' type='tel' value='000-000-0000' />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup className='text-end'>
                      <Btn attrBtn={{ className: 'd-block w-100', color: 'primary', type: 'submit' }}>Send</Btn>
                    </FormGroup>
                    <FormGroup>
                      {' '}
                      <span className='reset-password-link'>
                        If don't receive OTP?  
                        <a className='btn-link text-danger' href='#javascript'>
                          Resend
                        </a>
                      </span>
                    </FormGroup>
                    <FormGroup>
                      <Label>Enter OTP</Label>
                      <Row>
                        <Col>
                          <Input className='form-control text-center opt-text' type='text' value='00' maxlength='2' />
                        </Col>
                        <Col>
                          <Input className='form-control text-center opt-text' type='text' value='00' maxlength='2' />
                        </Col>
                        <Col>
                          <Input className='form-control text-center opt-text' type='text' value='00' maxlength='2' />
                        </Col>
                      </Row>
                    </FormGroup>
                    <H6>Create Your Password</H6>
                    <FormGroup className='position-relative'>
                      <Label className='col-form-label'>New Password</Label>
                      <Input className='form-control' type='password' name='login[password]' required='' placeholder='*********' />
                      <div className='show-hide'>
                        <span className='show'></span>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label className='col-form-label'>Retype Password</Label>
                      <Input className='form-control' type='password' name='login[password]' required='' placeholder='*********' />
                    </FormGroup>
                    <FormGroup>
                      <div className='checkbox'>
                        <Input id='checkbox1' type='checkbox' />
                        <Label className='text-muted' for='checkbox1'>
                          Remember password
                        </Label>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Btn attrBtn={{ color: 'primary', className: 'btn d-block w-100', type: 'submit' }}>Done</Btn>
                    </FormGroup>
                    <P>
                      Already have an password?
                      <a className='ms-2' href='#javascript'>
                        Sign in
                      </a>
                    </P>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ForgetPwd;
