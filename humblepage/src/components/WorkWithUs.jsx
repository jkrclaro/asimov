import React from 'react';
import { Link } from 'react-router-dom';


class WorkWithUs extends React.Component {

    render() {
        return (
            <div className='section-work'>
                <div className='container text-center'>
                    <h3 className='h3-title' style={{paddingTop: 40}}>Work with us</h3>
                    <p className='p-content'>Tell us a little bit about your project.</p>
                    <Link to='/contact' className='btn btn-humblepage-primary mb-5'>Let's talk</Link>
                </div>
            </div>
        )
    }
}

export default WorkWithUs;