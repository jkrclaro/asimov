import React from 'react';

import Header from './Header';


class PhotoList extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className='container mt-5'>
                    <h3 className='h3-heading'>PHOTOS</h3>
                    <div className='row'>
                        <div className='col-6 col-sm-4 col-lg-2 mb-3'>
                            <a href='/'><img src='https://via.placeholder.com/150' width='100%'></img></a>
                        </div>
                        <div className='col-6 col-sm-4 col-lg-2 mb-3'>
                            <a href='/'><img src='https://via.placeholder.com/150' width='100%'></img></a>
                        </div>
                        <div className='col-6 col-sm-4 col-lg-2 mb-3'>
                            <a href='/'><img src='https://via.placeholder.com/150' width='100%'></img></a>
                        </div>
                        <div className='col-6 col-sm-4 col-lg-2 mb-3'>
                            <a href='/'><img src='https://via.placeholder.com/150' width='100%'></img></a>
                        </div>
                        <div className='col-6 col-sm-4 col-lg-2 mb-3'>
                            <a href='/'><img src='https://via.placeholder.com/150' width='100%'></img></a>
                        </div>
                        <div className='col-6 col-sm-4 col-lg-2 mb-3'>
                            <a href='/'><img src='https://via.placeholder.com/150' width='100%'></img></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoList;