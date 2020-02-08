import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';


const PublicRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated) {
                    return <Redirect to='/podcasts' />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(
    mapStateToProps
)(PublicRoute);
