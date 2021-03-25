import React, { Component } from 'react';

import Sidebar from './Sidebar';


class NotFound extends Component {

    render() {
        return (
            <Sidebar>
                <div className='mt-5'>
                    {this.props.children}
                </div>
            </Sidebar>
        )
    }
}

export default NotFound;