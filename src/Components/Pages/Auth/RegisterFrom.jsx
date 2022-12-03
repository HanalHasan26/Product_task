import React, { Fragment, useState } from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'react-feather';
import { Form, FormGroup, Input, Label, Row, Col, Button } from 'reactstrap';
import { Btn, H4, H6, LI, UL } from '../../../AbstractElements';
import { Link, useNavigate } from 'react-router-dom';
import { firebase_app } from '../../../Config/Config';
import SocialAuth from '../../../Auth/Tabs/LoginTab/SocialAuth';

const RegisterFrom = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

   const onSubmint =()=>{

       firebase_app.auth().createUserWithEmailAndPassword(email,password).then((user)=>{
           console.log(user)
           navigate("/login")
        
       }).catch((err)=>{
           console.log(err);
           alert("Email adress already used")
       })
   }


    console.log(password,email);
      
    return (
        <Fragment>
            <div className="login-card">
                <div className="login-main">
                    <Form className="theme-form login-form">
                        <H4></H4>
                        <H6>Enter your personal details to create account</H6>
                        <FormGroup> 
                            <Label className="col-form-label">Your Name</Label>
                            <Row>
                                <Col xs='6'>
                                    <Input className="form-control" type="text" required="" placeholder="Fist Name" />
                                </Col>
                                <Col xs='6'>
                                    <Input className="form-control" type="text" required="" placeholder="Last Name" />
                                </Col>
                            </Row>
                        </FormGroup> 
                        <FormGroup>
                            <Label className="col-form-label">Email Address</Label>
                            <Input onChange={(e)=>setEmail(e.target.value)} className="form-control" type="email" required="" placeholder="Test@gmail.com" />
                        </FormGroup>
                        <FormGroup className="position-relative">
                            <Label className="col-form-label">Password</Label>
                            <Input onChange={(e)=>setPassword(e.target.value)} className="form-control" type="" name="login[password]" required="" placeholder="*********" />
                            <div className="show-hide"><span className="show"> </span></div>
                        </FormGroup>
                        <FormGroup>
                            <div className="checkbox">
                                <Input id="checkbox1" type="checkbox" />
                                <Label className="text-muted" for="checkbox1">Agree with <span>Privacy Policy</span></Label>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={onSubmint} attrBtn={{ className: 'd-block w-100', color: 'primary', type: 'submit' }}>Create Account</Button>
                        </FormGroup>
                        <FormGroup>
                        <SocialAuth />
                        </FormGroup>
                        <p className="mb-0 text-center">Already have an account?<Link className="ms-2" to={`${process.env.PUBLIC_URL}/login`}>Sign in</Link></p>
                    </Form>
                </div>
            </div>
        </Fragment>
    );
};

export default RegisterFrom;