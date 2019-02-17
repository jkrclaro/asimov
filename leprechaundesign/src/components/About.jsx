import React from 'react';

import Header from './Header';
import WorkWithUs from './WorkWithUs';


class About extends React.Component {

    state = {
        isDesktop: false
    }
    updatePredicate = this.updatePredicate.bind(this);

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
        window.scrollTo(0 ,0);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 992 });
    };

    render() {
        return (
            <div>
                <Header theme='main'/>
                <div className='container'>
                    <div className='col-lg-10 mt-5 mb-5'>
                        {this.state.isDesktop ? (
                            <h2 className='h2-title'>
                                We are an independent company based in Dublin, Ireland.
                                <span className='title-sub'> We work with people that wants real change.</span>
                            </h2>
                        ) : (
                            <h2 className='h2-title h2-title-mobile'>
                                We are an independent company based in Dublin, Ireland.
                                <span className='title-sub'> We work with people that wants real change.</span>
                            </h2>
                        )}
                    </div>
                    <div className='col-lg-10'>
                        <h4 className='h4-title'>What we do</h4>
                        <p className='p-content'>
                            We develop engaging websites to reach your ideal customers. This helps
                            you focus on your business and let us worry
                            about running your online assets.
                        </p>
                    </div>
                </div>
                <WorkWithUs />
            </div>
        )
    }
}

export default About;