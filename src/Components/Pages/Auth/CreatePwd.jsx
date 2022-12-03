import React, { Fragment } from 'react';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P } from '../../../AbstractElements';

const CreatePwd = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true} className='p-0 login-page'>
          <Row className='m-0'>
            <Col xl='12 p-0'>
              <div className='login-card'>
                <div className='login-main'>
                  <Form className='theme-form login-form'>
                    <H4 attrH4={{ className: 'mb-3' }}>Create Your Password</H4>
                    <FormGroup className='position-relative'>
                      <Label className='col-form-label'>New Password</Label>
                      <Input className='form-control' type='password' name='login[password]' required='' placeholder='*********' />
                      <div className='show-hide'>
                        <span className='show'></span>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label className='col-form-label'>Password</Label>
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
                      <Btn attrBtn={{ className: 'd-block w-100', color: 'primary', type: 'submit' }}>Done</Btn>
                    </FormGroup>
                    <P attrPara={{ className: 'mb-0' }}>
                      Don't have account?
                      <a className='ps-2' href='#javascript'>
                        Create Account
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

export default CreatePwd;
