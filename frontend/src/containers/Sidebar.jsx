import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logout from './Logout';


class Sidebar extends React.Component {

    state = {
        links: [
            {'url': '/podcasts', 'logo': 'fa-th', 'title': 'Podcasts'},
            {'url': '/playlists', 'logo': 'fa-bars', 'title': 'Playlists'},
            {'url': '/new-releases', 'logo': 'fa-podcast', 'title': 'New Releases'},
            {'url': '/in-progress', 'logo': 'fa-spinner', 'title': 'In Progress'},
            {'url': '/favorites', 'logo': 'fa-star', 'title': 'Favorites'},
            {'url': '/account', 'logo': 'fa-cog', 'title': 'Account'},
        ]
    }

    render() {
        const { links } = this.state;
        const { player } = this.props;
        let viewportHeight = player.isOpen ? '80vh' : '100vh';
        return (
            <div className='d-flex' id='sidebar-container'>
                <nav id='sidebar' className='mt-3'>
                    <div className='sidebar-heading'>
                        <Link to='/podcasts'><img src='/logo.png' alt='logo.png' height='30' width='30'></img></Link>
                    </div>
                    <div className='list-group list-group-flush'>
                        { links.map((link, index) => 
                            <Link key={index} to={link.url} className='list-group-item list-group-item-action bg-light'><i className={`fas ${link.logo} mr-3`}></i> {link.title}</Link>
                        )}
                        <Logout className='list-group-item list-group-item-action bg-light' />
                    </div>
                </nav>
                <div id='sidebar-content'>
                    <nav className='navbar navbar-expand-lg navbar-light mt-3 mb-3' id='navbar'>
                        <Link to='/podcasts'><img src='/logo.png' alt='logo.png' height='50' width='50'></img></Link>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbar-content'>
                            <div className='navbar-nav ml-auto mt-2 mt-lg-0'>
                                { links.map((link, index) => 
                                    <Link key={index} to={link.url} className='nav-item nav-link'><i className={`fas ${link.logo} mr-3`}></i> {link.title}</Link>
                                )}
                                <Logout className='nav-item nav-link' />
                            </div>
                        </div>
                    </nav>
                    <div style={{ height: viewportHeight, overflowY: player.isOpen ? 'scroll' : null }}>
                        <div className='container'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        player: state.player
    };
}

export default connect(
    mapStateToProps
)(Sidebar);