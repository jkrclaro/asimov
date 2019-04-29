import React from 'react';

import classnames from 'classnames';


class Invite extends React.Component {
    
    state = {
        emailInvalid: ''
    }

    render() {
        return (
            <div className='container text-style'>
                <h3 className='text-center'>Get up to 1 year free membership by inviting your friends to Webprecon!</h3>
               <input onChange={this.handleChange} type='email' name='email' id='email' placeholder='Email' maxLength='254' className={classnames({ 'is-invalid': this.state.emailInvalid }, 'form-control')} value={this.state.email} />
                <div className='invalid-feedback'>{this.state.emailInvalid}</div>
            </div>
        );
    };
};

export default Invite;
