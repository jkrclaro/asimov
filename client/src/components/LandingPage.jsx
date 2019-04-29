import React from 'react';

const styles = {
    white: {color: '#fff'}
}

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activetab: '1',
            isDesktop: false
        };
        this.toggle = this.toggle.bind(this);
        this.updatePredicate = this.updatePredicate.bind(this);
    };

    toggle(tab) {
        if (this.state.activetab !== tab) {
            this.setState({activetab: tab});
        };
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

    render() {
        return (
            <div className='container'>
                <div className='mb-5 text-center'>
                    <h1 className='mb-3' style={styles.white}><b>Store environment variables securely.</b></h1>
                    <h3 className='mb-3' style={styles.white}>Built for developers. Get started for free.</h3>
                    <a className='btn btn-webprecon-primary mr-3 mb-3' href='/signup'>Start Now</a>
                    <a className='btn btn-webprecon-alternative mb-3' href='mailto:webprecon@gmail.com'>Contact us</a>
                </div>
            </div>
        );
    };
};

export default LandingPage;
