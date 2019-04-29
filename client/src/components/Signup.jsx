import React from 'react';

import SignupForm from './SignupForm';

class Signup extends React.Component {

    render() {
        return (
            <div className='col-lg-12'>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-body text-style'>
                                <h3>
                                    Webprecon is currently invite only
                                </h3>
                                <h5>
                                    So if one of your friends are on Webprecon, they can invite you. 
                                    The instructions will be sent in the invitation email.
                                </h5>
                                <SignupForm/>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            </div>
        );
    };
};

export default Signup;
