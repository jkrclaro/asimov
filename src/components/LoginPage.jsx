import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import Login from '../containers/Login';


class LoginPage extends Component {

    render() {
        return (
            <Layout>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        {this.props.location.state === 'Unauthorized' ? (
                            <div className='alert alert-danger' role='alert'>
                                Please login first.
                            </div>
                        ) : null}

                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='mb-4 text-center'><b>Welcome back!</b></h5>
                                <Login />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className='card text-center mt-3'>
                            <div className='card-body'>
                                Don't have an account? <Link to='/register'>Sign up</Link>.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            </Layout>
        )
    }
}

export default LoginPage;