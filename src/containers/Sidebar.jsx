import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logout from './Logout';


function getPathname(pathname) {
    let path = '/';
    const parameters = pathname.split('/');
    for (const parameter of parameters) {
        path += parseInt(parameter) ? '/:id' : parameter;
    }
    return path
}


class Sidebar extends React.Component {

    state = {
        links: [
            {
                'url': '/podcasts',
                'logo': 'fas fa-podcast',
                'title': 'Podcasts',
                'submenus': []
            },
            {
                'url': '/playlists',
                'logo': 'fas fa-bars',
                'title': 'Playlists',
                'submenus': [
                    {'url': '/rss-1', 'logo': 'fas fa-bars', 'title': 'RSS 1'},
                    {'url': '/rss-2', 'logo': 'fas fa-bars', 'title': 'RSS 2'},
                    {'url': '/rss-3', 'logo': 'fas fa-bars', 'title': 'RSS 3'},
                ]
            },
            {
                'url': '/new-releases',
                'logo': 'far fa-plus-square',
                'title': 'New Releases',
                'submenus': [
                    {'url': '/hackernews-1', 'logo': 'fas fa-bars', 'title': 'Hacker News 1'},
                    {'url': '/hackernews-2', 'logo': 'fas fa-bars', 'title': 'Hacker News 2'},
                    {'url': '/hackernews-3', 'logo': 'fas fa-bars', 'title': 'Hacker News 3'},
                ]
            },
            {
                'url': '/in-progress',
                'logo': 'fas fa-spinner',
                'title': 'In Progress',
                'submenus': [
                    {'url': '/hackernews-1', 'logo': 'fas fa-bars', 'title': 'Hacker News 1'},
                    {'url': '/hackernews-2', 'logo': 'fas fa-bars', 'title': 'Hacker News 2'},
                    {'url': '/hackernews-3', 'logo': 'fas fa-bars', 'title': 'Hacker News 3'},
                ]
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
        const pathname = getPathname(window.location.pathname);
        const urls = {
            '/podcasts': {
                'main': [
                    '/podcasts',
                    '/playlists',
                    '/new-releases',
                    '/in-progress',
                    '/favorites',
                ],
                'others': [
                    '/podcasts/:id'
                ]
            },
            '/playlists': {
                'main': [
                    '/rss',
                    '/rss-1',
                    '/rss-2',
                    '/rss-3',
                ],
                'others': []
            },
            '/new-releases': {
                'main': [
                    '/hacker-news',
                    '/hacker-news-1',
                    '/hacker-news-2',
                    '/hacker-news-3',
                ],
                'others': []
            },
            '/in-progress': {
                'main': [
                    '/hacker-news',
                    '/hacker-news-1',
                    '/hacker-news-2',
                    '/hacker-news-3',
                ],
                'others': []
            },
            '/account': {
                'main': [
                    '/account',
                    '/logout',
                ],
                'others': []
            }
        }
        return (
            <div className='d-flex' id='sidebar-container'>
                <nav id='sidebar' className='mt-3'>
                    <div className='sidebar-heading'>
                        <Link to='/podcasts'><img src='/podplayer.png' alt='podplayer.png' height={50} width={50}></img></Link>
                    </div>
                    <div className='list-group list-group-flush'>
                        { links.map((link, index) => 
                            <div key={`sidebar-${index}`}>
                                <Link to={link.url} className={`list-group-item list-group-item-action bg-light ${pathname === link.url || urls[link.url].others.includes(pathname) ? 'sidebar-active' : null}`}><i className={`${link.logo} mr-3`}></i> {link.title}</Link>
                                { urls[link.url].main.includes(pathname) || urls[link.url].others.includes(pathname) ? (
                                    <span>
                                        { link.submenus.map((submenu, submenuIndex) =>
                                            <span key={`submenu-${submenuIndex}`}>
                                                { submenu.url === '/logout' ? (
                                                    <Logout className='list-group-item list-group-item-action bg-light' paddingLeft={55} />
                                                ) : (
                                                    <Link key={`submenu-${submenuIndex}`} to={submenu.url} className={`list-group-item list-group-item-action bg-light ${pathname === submenu.url ? 'sidebar-active' : null}`} style={{paddingLeft: 55}}>{submenu.title}</Link>
                                                )}
                                            </span>
                                        )}
                                    </span>
                                ) : null}
                            </div>
                        )}
                    </div>
                </nav>
                <div id='sidebar-content'>
                    <nav className='navbar navbar-expand-lg navbar-light mt-3 mb-3' id='navbar'>
                        <Link to='/podcasts'><img src='/podplayer.png' alt='podplayer.png' height={50} width={50}></img></Link>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbar-content'>
                            <div className='navbar-nav ml-auto mt-2 mt-lg-0'>
                                { links.map((link, index) => 
                                    <div key={`navbar-${index}`}>
                                        <Link to={link.url} className={`nav-item nav-link ${pathname === link.url || urls[link.url].others.includes(pathname) ? 'navbar-active' : null}`}><i className={`${link.logo} mr-3`}></i> {link.title}</Link>
                                        { urls[link.url].main.includes(pathname) || urls[link.url].others.includes(pathname) ? (
                                            <span>
                                                { link.submenus.map((submenu, submenuIndex) =>
                                                    <span key={`submenu-${submenuIndex}`}>
                                                        { submenu.url === '/logout' ? (
                                                            <Logout className='nav-item nav-link' paddingLeft={35} />
                                                        ) : (
                                                            <Link key={`submenu-${submenuIndex}`} to={submenu.url} className={`nav-item nav-link ${pathname === submenu.url ? 'navbar-active' : null}`} style={{paddingLeft: 35}}>{submenu.title}</Link>
                                                        )}
                                                    </span>
                                                )}
                                            </span>
                                        ) : null}
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