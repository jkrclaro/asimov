import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logout from './Logout';


class Sidebar extends React.Component {

    state = {
        links: [
            {
                'url': '/podcasts',
                'logo': 'fas fa-podcast',
                'title': 'Podcasts',
                'submenus': [
                    {'url': '/playlists', 'logo': 'fas fa-bars', 'title': 'Playlists'},
                    {'url': '/new-releases', 'logo': 'fas fa-podcast', 'title': 'New Releases'},
                    {'url': '/in-progress', 'logo': 'fas fa-spinner', 'title': 'In Progress'},
                    {'url': '/favorites', 'logo': 'fas fa-star', 'title': 'Favorites'},
                ]
            },
            {
                'url': '/rss',
                'logo': 'fas fa-rss',
                'title': 'RSS',
                'submenus': []
            },
            {
                'url': '/hacker-news',
                'logo': 'fab fa-y-combinator',
                'title': 'Hacker News',
                'submenus': []
            },
            {
                'url': '/account',
                'logo': 'fas fa-cog',
                'title': 'Account',
                'submenus': [
                    {'url': '/logout', 'logo': 'fas fa-sign-out', 'title': 'Logout'}
                ]
            },   
        ]
    }

    render() {
        const { links } = this.state;
        const { player } = this.props;
        let viewportHeight = player.isOpen ? '80vh' : '100vh';
        const { pathname } = window.location;
        const urls = {
            '/podcasts': [
                '/podcasts',
                '/playlists',
                '/new-releases',
                '/in-progress',
                '/favorites'
            ],
            '/rss': [],
            '/hacker-news': [],
            '/account': []
        }
        return (
            <div className='d-flex' id='sidebar-container'>
                <nav id='sidebar' className='mt-3'>
                    <div className='sidebar-heading'>
                        <Link to='/podcasts'><img src='/logo.png' alt='logo.png' height='30' width='30'></img></Link>
                    </div>
                    <div className='list-group list-group-flush'>
                        { links.map((link, index) => 
                            <div key={`sidebar-${index}`}>
                                <Link to={link.url} className={`list-group-item list-group-item-action bg-light ${urls[link.url].includes(pathname) ? 'list-active' : null}`}><i className={`${link.logo} mr-3`}></i> {link.title}</Link>
                                { link.submenus.map((submenu, submenuIndex) =>
                                    <span key={`submenu-${submenuIndex}`}>
                                        { submenu.url === '/logout' ? (
                                            <Logout className='list-group-item list-group-item-action bg-light' paddingLeft={55} />
                                        ) : (
                                            <Link key={`submenu-${submenuIndex}`} to={submenu.url} className='list-group-item list-group-item-action bg-light' style={{paddingLeft: 55}}>{submenu.title}</Link>
                                        )}
                                    </span>
                                )}
                            </div>
                        )}
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
                                    <div key={`navbar-${index}`}>
                                        <Link to={link.url} className={`nav-item nav-link ${urls[link.url].includes(pathname) ? 'list-active' : null}`}><i className={`${link.logo} mr-3`}></i> {link.title}</Link>
                                        { link.submenus.map((submenu, submenuIndex) =>
                                            <span key={`submenu-${submenuIndex}`}>
                                                { submenu.url === '/logout' ? (
                                                    <Logout className='nav-item nav-link' paddingLeft={35} />
                                                ) : (
                                                    <Link to={submenu.url} className='nav-item nav-link' style={{paddingLeft: 35}}>{submenu.title}</Link>
                                                )}
                                            </span>
                                        )}
                                    </div>
                                )}
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