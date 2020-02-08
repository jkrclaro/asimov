import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { register } from '../actions/auth';


const requiredEmail = value => value ? undefined : 'Please enter a valid email';
const requiredUsername = value => value ? undefined : 'Please enter a valid username';
const requiredPassword = value => value ? undefined : 'Please enter a valid password';
const requiredPassword2 = value => value ? undefined : 'Please enter a valid confirmation password';
const passwordsMatch = (value, allValues) => value !== allValues.password ? 'Re-enter your password confirmation so it matches your password.' : undefined;
const minLengthUsername = min => value => value && value.length < min ? `Your username must be at least ${min} characters` : undefined;
const maxLengthUsername = max => value => value && value.length > max ? `Your username must be no more than ${max} characters` : undefined;
const minLengthUsername3 = minLengthUsername(3);
const maxLengthUsername100 = maxLengthUsername(100);


class Register extends Component {

    renderField = ({ input, label, type, value, meta: { touched, error } }) => {
        return (
            <div className='form-group'>
                <label>{label}</label>
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
        this.props.register(formValues);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/podcasts' />
        }
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='non_field_errors' type='hidden' component={this.renderHiddenField} />
                <Field name='email' type='email' component={this.renderField} label='Email' validate={[requiredEmail]} />
                <Field name='username' type='text' component={this.renderField} label='Username' validate={[requiredUsername, minLengthUsername3, maxLengthUsername100]} />
                <Field name='password' type='password' component={this.renderField} label='Password' validate={[requiredPassword]} />
                <Field name='password2' type='password' component={this.renderField} label='Confirm password' validate={[requiredPassword2, passwordsMatch]} />
                <button className='btn btn-Theme btn-block'>Create your account</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

Register = connect(
    mapStateToProps,
    { register }
)(Register)

export default reduxForm({
    form: 'registerForm'
})(Register);