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
                        <div className='text-center mb-3'>
                            <Link to='/'><img src='/logo.png' height={50} width={50}></img></Link>
                        </div>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='mb-3 text-center'><b>Welcome back!</b></h5>
                                {this.props.location.state === 'Unauthorized' ? (
                                    <div className='text-center mb-3' style={{color: 'red'}}>Please login first</div>
                                ) : null}
                                <small className='text-muted'>As a guest -> (u=guest) (p=guest123) </small>
                                <Login />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className='card text-center mt-3'>
                            <div className='card-body'>
                                Don't have an account? <Link to='/register'>Sign up</Link>
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