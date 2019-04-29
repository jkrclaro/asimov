import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

const webService = require('../services/web');


class LoginForm extends React.Component {
    state = {
        email: 'jkrclaro@gmail.com',
        password: 'basketball',
        emailInvalid: '',
        passwordInvalid: '',
        errorMessage: ''
    };

    handleChange = (event) => {
        this.setState({ [`${event.target.name}Invalid`]: '' })
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        if (!email || !password) {
            if(!email) {
               this.setState({emailInvalid: 'Email is required'})
           } else if (!password) {
               this.setState({passwordInvalid: 'Password is required'})
           }
        } else {
            webService.login({ email, password })
            .then(loggedIn => { this.props.history.push('/') })
            .catch(error => {
                if (error.response) {
                    this.setState({
                        emailInvalid: error.response.data.message,
                    });
                } else {
                    this.setState({emailInvalid: "We are currently experiencing server issues. Please try again later."})
                }
            })
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='position-relative form-group'>
                    <input onChange={this.handleChange} name='email' id='email'
                    placeholder='Email' type='email'
                    className={classnames({ 'is-invalid': this.state.emailInvalid }, 'form-control')}
                    value={this.state.email} />
                    <div className='invalid-feedback'>{this.state.emailInvalid}</div>
                </div>
                <div className='position-relative form-group'>
                    <input onChange={this.handleChange} name='password'
                    id='password' placeholder='Password' type='password'
                    className={classnames({ 'is-invalid': this.state.passwordInvalid }, 'form-control')}
                    value={this.state.password} />
                    <div className='invalid-feedback'>{this.state.passwordInvalid}</div>
                </div>
                <button className='btn btn-webprecon-primary btn-block mb-2'>Login</button>
                <div className='position-relative form-group'>
                    Don't have an account? <a href='/signup' className='webprecon-link'>Signup</a>
                </div>
            </form>
        );
    };
};

export default withRouter(LoginForm);
