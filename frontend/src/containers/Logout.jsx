import React, { Component } from 'react';

import { connect } from 'react-redux';
import { logout } from '../actions/auth';


class Logout extends Component {
    
    onClick = () => {
        this.props.logout();
    }

    render() {
        const className = this.props.className;
        return (
            <a href='/' className={className} onClick={this.onClick}><i className='fas fa-sign-out-alt mr-3'></i> Logout</a>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps,
    { logout }
)(Logout);