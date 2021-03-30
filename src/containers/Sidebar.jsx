import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
                'url': '/',
                'logo': 'fas fa-podcast',
                'title': 'Podcasts',
            },
            {
                'url': '/playlists',
                'logo': 'fas fa-bars',
                'title': 'Playlists',
            },
        ]
    }

    render() {
        const { links } = this.state;
        const { player } = this.props;
        let viewportHeight = player.isOpen ? '80vh' : '100vh';
        const pathname = getPathname(window.location.pathname);
        return (
            <div className='d-flex' id='sidebar-container'>
                <nav id='sidebar' className='mt-3'>
                    <div className='sidebar-heading'>
                        <Link to='/'><img src='/logo.png' alt='logo.png' height={50} width={50}></img></Link>
                    </div>
                    <div className='list-group list-group-flush'>
                        { links.map((link, index) => 
                            <div key={`sidebar-${index}`}>
                                <Link to={link.url} className={`list-group-item list-group-item-action bg-light ${pathname === link.url ? 'sidebar-active' : null}`}><i className={`${link.logo} mr-3`}></i> {link.title}</Link>
                            </div>
                        )}
                    </div>
                </nav>
                <div id='sidebar-content'>
                    <nav className='navbar navbar-expand-lg navbar-light mt-3 mb-3' id='navbar'>
                        <Link to='/'><img src='/logo.png' alt='logo.png' height={50} width={50}></img></Link>
                        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-content' aria-controls='navbar-content' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbar-content'>
                            <div className='navbar-nav ml-auto mt-2 mt-lg-0'>
                                { links.map((link, index) => 
                                    <div key={`navbar-${index}`}>
                                        <Link to={link.url} className={`nav-item nav-link ${pathname === link.url ? 'navbar-active' : null}`}><i className={`${link.logo} mr-3`}></i> {link.title}</Link>
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