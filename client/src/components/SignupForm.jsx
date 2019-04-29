import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

const webService = require('../services/web');


class SignupForm extends React.Component {
    state = {
        username: 'jkrclaro',
        email: 'jkrclaro@gmail.com',
        password: 'basketball',
        usernameInvalid: '',
        emailInvalid: '',
        passwordInvalid: ''
    };

    handleChange = (event) => {
        this.setState({ [`${event.target.name}Invalid`]: '' })
        this.setState({
            [event.target.name]: event.target.value }, () => {
            if (1 <= this.state.password.length && this.state.password.length <= 7) {
                this.setState({passwordInvalid: 'Password must contain at least 8 characters'});
            } else {
                this.setState({passwordInvalid: ''});
            }
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;

        if (!username || !email || !password ) {
            if (!username) {
                this.setState({usernameInvalid: 'Username is required'})
            } else if(!email) {
                this.setState({emailInvalid: 'Email is required'})
            } else if (!password) {
                this.setState({passwordInvalid: 'Password is required'})
            }
        } else {
            webService.signup({ username, email, password })
            .then(signedup => webService.login({ email, password }))
            .then(loggedIn => this.props.history.push('/'))
            .catch(error => {
                const field = error.response.data.message.field;
                const reason = error.response.data.message.reason;
                this.setState({[`${field}Invalid`]: reason})
            })
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='position-relative form-group'>
                    <input onChange={this.handleChange} type='text'
                    name='username' id='username' placeholder='Username'
                    maxLength='30'
                    className={classnames({ 'is-invalid': this.state.usernameInvalid }, 'form-control')}
                    value={this.state.username} />
                    <div className='invalid-feedback'>{this.state.usernameInvalid}</div>
                </div>
                <div className='position-relative form-group'>
                    <input onChange={this.handleChange} type='email'
                    name='email' id='email' placeholder='Email'
                    maxLength='254'
                    className={classnames({ 'is-invalid': this.state.emailInvalid }, 'form-control')}
                    value={this.state.email} />
                    <div className='invalid-feedback'>{this.state.emailInvalid}</div>
                </div>
                <div className='position-relative form-group'>
                    <input onChange={this.handleChange} type='password'
                    name='password' id='password' placeholder='Password'
                    className={classnames({ 'is-invalid': this.state.passwordInvalid }, 'form-control')}
                    value={this.state.password} />
                    <div className='invalid-feedback'>{this.state.passwordInvalid}</div>
                </div>
                <div className='mb-3 position-relative form-check'>
                    <label className='container-checkbox'>
                        <input required type='checkbox'/>
                        <span className="checkmark"></span>
                        I consent to the <a href='/privacy' className='webprecon-link'>Privacy Policy</a>
                    </label>
                </div>
                <button className='btn btn-webprecon-primary btn-block mb-2'>Signup</button>
                <div className='position-relative form-group'>
                    Already have an account? <a href='/login' className='webprecon-link'>Login</a>
                </div>
            </form>
        );
    };
};

export default withRouter(SignupForm);
