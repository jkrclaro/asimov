import React from 'react';

const logo = require('../imgs/logo.png');

const styles = {
    border: {backgroundColor: '#7289DA', color: '#111', borderRadius: '10%'},
    font: {fontFamily: 'Times New Roman', fontWeight: 700},
    brand: {color: '#111', fontSize: 40, fontWeight: 700, textDecoration: 'none'}
}

class Header extends React.Component {
    
    state = {
        isDesktop: false
    }
    updatePredicate = this.updatePredicate.bind(this);
    trackScrolling = this.trackScrolling.bind(this);
    isBottom = this.isBottom.bind(this);

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
        window.addEventListener('scroll', this.trackScrolling);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
        window.removeEventListener('scroll', this.trackScrolling);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1024 });
    };

    trackScrolling() {
        // const element = document.getElementById('');
        // console.log(element.getBoundingClientRect())
        console.log('yellow')
    }

    isBottom(element) {
        console.log(element.getBoundingClientRect().bottom)
        return element.getBoundingClientRect().bottom <= window.innerHeight;
    }

    render() {
        return (
            <ul className="nav fixed-top justify-content">
                <div className='container'>
                    <li className="nav-item">
                        <span className='nav-link' style={styles.brand}>
                            <a href='/'><img src={logo} alt='logo' className='img-fluid' height='60' width='60'/></a> { this.state.isDesktop ? ('humblepage') : (null)}
                        </span>
                    </li>
                </div>
            </ul>
        )
    }
}

export default Header;