import React from 'react';

import Header from './Header';


class TestimonialList extends React.Component {

    render() {
        return (
            <div>             
                <Header />
                <div className='container mt-5'>
                    <h3 className='h3-heading'>TESTIMONIALS</h3>
                </div>
            </div>
        )
    }
}

export default TestimonialList;