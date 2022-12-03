import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';
import { H6, P } from '../../../AbstractElements';
import { CreateAccount } from '../../../Constant';
import FacebookCus from './Facebook';
import GithubCus from './Github';
import GoogleCus from './Google';

const SocialAuth = () => {

    const navigate = useNavigate()

    return (
        <Fragment>
            <H6 attrH6={{ className: 'text-muted mt-4 or' }} >{'Or Sign in with'}</H6>
            <div className="social text-center mt-4">
                <div className="btn-showcase">
                    <FacebookCus />
                    <GoogleCus />
                    <GithubCus />
                </div>
            </div>
            <P attrPara={{ className: 'mt-4 mb-0 text-center' }} >{'Don\'t have account?'}<a onClick={()=>navigate("/pages/authentication/register-simple")} className="ms-2" href="#javascript">{CreateAccount}</a></P>
        </Fragment>
    );
};

export default SocialAuth;