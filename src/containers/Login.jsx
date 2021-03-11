import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { login } from '../actions/auth';


class Login extends Component {

    renderField = ({ input, label, type, value, meta: { touched, error } }) => {
        return (
            <div className='form-group'>
                <label className='label-theme'>{label}</label>
                <input type={type} className={`form-control ${touched && error ? 'is-invalid': ''}`} value={value} {...input} autoComplete='off' />
                {touched && error && (
                    <span className='invalid-feedback d-block'>{error}</span>
                )}
            </div>
        )
    }

    renderHiddenField = ({ type, meta: { error } }) => {
        return (
            <div className='invalid-feedback d-block text-center mb-3'>
                <input type={type} />
                {error && <div>{error}</div>}
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.login(formValues);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/podcasts' />
        }
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='non_field_errors' type='hidden' component={this.renderHiddenField} />
                <Field name='username' type='text' component={this.renderField} label='Username' />
                <Field name='password' type='password' component={this.renderField} label='Password' />
                <button className='btn btn-Theme btn-block'>Sign in to your account</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

Login = connect(
    mapStateToProps,
    { login }
)(Login)

export default reduxForm({
    form: 'loginForm'
})(Login);