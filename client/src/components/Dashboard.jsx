import React from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Dashboard extends React.Component {
    state = {
        name: '',
        nameInvalid: ''
    };

    handleChange = (event) => {
        this.setState({ [`${event.target.name}Invalid`]: '' })
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className='container text-style'>
                <div className='row'>
                    <div className='col-6 col-sm-4 col-lg-2'>
                        <a href='/authors/thejoeroganexperience/'>
                            <img src='https://podcast-api-images.s3.amazonaws.com/podcast_logo_15_300x300.jpg' className='img-fluid rounded mb-3' style={{width: '100%'}}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(Dashboard);
