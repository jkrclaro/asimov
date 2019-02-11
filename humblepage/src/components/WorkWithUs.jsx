import React from 'react';
import { Link } from 'react-router-dom';


class WorkWithUs extends React.Component {

    render() {
        return (
            <div className='section-work'>
                <div className='container text-center'>
                    <h2 className='h2-title' style={{paddingTop: 40}}>Work with us</h2>
                    <h3>Tell us a little bit about your project.</h3>
                    <Link to='/contact' className='btn btn-humblepage-primary-inverse mb-5'>Let's talk</Link>
                </div>
            </div>
        )
    }
}

export default WorkWithUs;