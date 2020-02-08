import React from 'react';
import { Link } from 'react-router-dom';


class Layout extends React.Component {

    render() {
        return (
            <div className='container'>
                <nav className='navbar navbar-expand-lg navbar-light mt-3 mb-3' id='main-navbar'>
                    <Link to='/' className='mr-3'><img src='/logo.png' alt='logo.png' height='30' width='30'></img></Link>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbar-content'>
                        <div className='navbar-nav mr-auto mt-2 mt-lg-0'>
                            <Link to='/demo' className='nav-item nav-link mr-3'>Podcast</Link>
                            <Link to='/login' className='nav-item nav-link mr-3'>Feed</Link>
                            <Link to='/register' className='nav-item nav-link'>Run</Link>
                        </div>
                        <div className='navbar-nav ml-auto mt-lg-0'>
                            <Link to='/login' className='nav-item nav-link mr-3'>Login</Link>
                            <Link to='/register' className='nav-item nav-link'>Sign Up</Link>
                        </div>
                    </div>
                </nav>
                <div className='mt-3 mb-5'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;