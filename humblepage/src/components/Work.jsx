import React from 'react';
import { Link } from 'react-router-dom';

const stock1 = require('../imgs/stock1.jpg')


class Work extends React.Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 mt-5 mb-5'>
                            <img src={stock1} className='img-fluid'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;