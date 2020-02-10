import React from 'react';
import { Link } from 'react-router-dom';


class Layout extends React.Component {

    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg navbar-light mt-3 mb-3' id='main-navbar'>
                    <div className='container'>
                        <Link to='/' className='mr-3'><h2 className='logo'>AURICLE</h2></Link>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse' id='navbar-content'>
                            <div className='navbar-nav ml-auto mt-lg-0'>
                                <Link to='/login' className='nav-item nav-link mr-3'>Login</Link>
                                <Link to='/register' className='nav-item nav-link'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='container mt-3 mb-5'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;