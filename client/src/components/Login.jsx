import React from 'react';

import LoginForm from './LoginForm';


class Login extends React.Component {

    render() {
        return (
            <section>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h4>Login</h4>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                </div>
            </section>
        );
    };
};

export default Login;
