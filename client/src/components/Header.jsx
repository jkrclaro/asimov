import React from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
} from 'reactstrap';

const styles = {
    cursor: {cursor: 'pointer'},
    menuBar: {fontSize: 34},
    font: {fontFamily: 'Times New Roman', fontWeight: 700},
    border: {backgroundColor: '#7289DA', color: '#fff', borderRadius: '10%'},
    settingUserCircle: {fontSize: 40, color: '#fff'},
    settingCaretDown: {fontSize: 25, color: '#fff', paddingLeft: 5},
    settingDropdown: {right: 0, left: 'auto'},
    settingDropdownToggle: {color: '#fff', cursor: 'pointer', paddingBottom: 5},
    searchIcon: {paddingRight: 50}
}

const currentUser = require('../libs/currentUser');


class Header extends React.Component {
    state = {
        isOpen: false,
        dropdownOpen: false,
        isSearchOpen: false,
        searchText: ''
    };
    toggle = this.toggle.bind(this);
    performLogout = this.performLogout.bind(this);
    performSearch = this.performSearch.bind(this);
    updatePredicate = this.updatePredicate.bind(this);
    handleChange = this.handleChange.bind(this);
    openSearch = this.openSearch.bind(this);

    toggle() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    };

    performLogout() {
        currentUser.logout(this.props);
    };
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 768 });
    };

    openNav() {
        document.getElementById("overlay-nav").style.width = "100%";
    }

    closeNav() {
        document.getElementById("overlay-nav").style.width = "0%";
    }

    performSearch() {
        console.log('Searching!!!')
    };


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    openSearch() {
        this.setState({ isSearchOpen: !this.state.isSearchOpen });
        console.log(this.state.isSearchOpen)
    }

    render() {
        return (
            <div>
                <div id="overlay-nav" className="overlay">
                    <a className="closebtn" style={styles.cursor} onClick={this.closeNav}>&times;</a>
                    <div className="overlay-content">
                        <div className='container'>                        
                            <a href="/">Home</a>
                            <a href="/login">Search</a>
                            <a href="/login">Login</a>
                            <a href="/signup">Signup</a>
                        </div>
                    </div>
                </div>
                        
                <nav className="navbar navbar-expand-md navbar-light mb-5">
                    <div className="container">
                        {!this.state.isDesktop && this.state.isSearchOpen ? (
                            <span className='brand' style={styles.cursor} onClick={this.openSearch}><FontAwesomeIcon icon='angle-left'/></span>
                        ) : (
                            <a className="brand" href="/">
                                <span style={styles.border}><span className='mr-3 ml-3' style={styles.font}>P</span></span>
                            </a>
                        )}
                        {currentUser.isLoggedIn() ? (
                            <div>
                                {this.state.isDesktop? (
                                    <ul className="nav justify-content-end">
                                        <li className='nav-item mr-3'>
                                            <div className='input-group'>
                                                <input onChange={this.handleChange} name='searchText' id='search' placeholder='Search podcast...' type='text' className='form-control' value={this.state.searchText} />
                                                <div className='input-group-append'>
                                                    <span className='input-group-text' onClick={this.performSearch} style={styles.cursor}><FontAwesomeIcon icon='search'/></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='nav-item'>
                                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle style={styles.settingDropdownToggle} tag="span" onClick={this.toggle} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
                                                    <FontAwesomeIcon icon='user-circle' style={styles.settingUserCircle} />
                                                    <FontAwesomeIcon icon='caret-down' style={styles.settingCaretDown} />
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem href='/dashboard'>Dashboard</DropdownItem>
                                                    <DropdownItem href='/invite'>Invite a friend</DropdownItem>
                                                    <DropdownItem href='/settings'>Settings</DropdownItem>
                                                    <DropdownItem href='/' onClick={this.performLogout}>Logout</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </li>
                                    </ul>
                                ) : (
                                    <div>
                                        {this.state.isSearchOpen ? (
                                            <ul className="nav justify-content-center">
                                                <li className='nav-item'>
                                                    <div className='input-group'>
                                                        <input onChange={this.handleChange} name='searchText' id='search' placeholder='Search podcast...' type='text' className='form-control' value={this.state.searchText} />
                                                        <div className='input-group-append'>
                                                            <span className='input-group-text' onClick={this.performSearch} style={styles.cursor}><FontAwesomeIcon icon='search'/></span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        ) : (
                                            <ul className="nav justify-content-end">
                                                <li className='nav-item mr-5'><FontAwesomeIcon style={{...styles.settingUserCircle, ...styles.cursor }} onClick={this.openSearch} icon='search'/></li>
                                                <li className='nav-item'>
                                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                        <DropdownToggle style={styles.settingDropdownToggle} tag="span" onClick={this.toggle} data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
                                                            <FontAwesomeIcon icon='user-circle' style={styles.settingUserCircle} />
                                                            <FontAwesomeIcon icon='caret-down' style={styles.settingCaretDown} />
                                                        </DropdownToggle>
                                                        <DropdownMenu right>
                                                            <DropdownItem href='/search'>Search</DropdownItem>
                                                            <DropdownItem href='/settings'>Invite a friend</DropdownItem>
                                                            <DropdownItem href='/' onClick={this.performLogout}>Logout</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                {this.state.isDesktop ? (
                                    <ul className="nav justify-content-end">
                                        <li className='nav-item'><a className='nav-link' href="/login">Login</a></li>
                                        <li className='nav-item'><a className='nav-link' href="/signup">Signup</a></li>
                                    </ul>
                                ) : (
                                    <ul className="nav justify-content-end">
                                        <li className='nav-item'><span className='nav-link' style={{...styles.menuBar, ...styles.cursor}} onClick={this.openNav}><FontAwesomeIcon icon='bars'/></span></li>
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Header);
