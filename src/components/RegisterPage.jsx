import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import Register from '../containers/Register';


class RegisterPage extends Component {

    render() {
        return (
            <Layout>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5><b>Create your account</b></h5>
                                <div className='mb-4'>Already have an account? <Link to='/login'>Sign in</Link></div>
                                <Register />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            </Layout>
        )
    }
}

export default RegisterPage;