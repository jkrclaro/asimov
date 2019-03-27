import React from 'react';
import { Link } from 'react-router-dom';


class NotFound extends React.Component {

    render() {
        return (
            <div className='container mt-5'>             
                <h1>404</h1> 
                <Link to='/'>Click here to go to homepage</Link>
            </div>
        )
    }
}

export default NotFound;