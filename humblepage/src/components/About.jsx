import React from 'react';

import Header from './Header';
import Footer from './Footer';
import WorkWithUs from './WorkWithUs';


class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='Site'>
                <div className='Site-content'>
                    <Header theme='main'/>
                    <div className='container'>
                        <div className='col-lg-10 mt-5 mb-5'>
                            <h2 className='h2-title'>
                                We are an independent company based in Dublin, Ireland.
                                <span className='title-sub'> We work with people that wants real change.</span>
                            </h2>
                        </div>
                        <div className='col-lg-10'>
                            <h4 className='h4-title'>What we do</h4>
                            <p className='p-content'>
                                We develop engaging websites that 
                                truly engages with your ideal customers to help
                                you focus on your business and let us worry
                                about running your online assets.
                            </p>
                        </div>
                    </div>
                    <WorkWithUs />
                </div>
                <Footer theme='main'/>
            </div>
        )
    }
}

export default About;