import React from 'react';

import WorkWithUs from './WorkWithUs';


class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='col-lg-12 mt-5 mb-5'>
                        <h3 className='h3-title theme-color'>How we work</h3>
                        <p className='p-content'>
                            We believe website design is not about how it looks or feels but how we can best serve your ideal customers. 
                            This allows you to focus on your own strengths and let us worry about running your online assets.
                        </p>
                        <p className='p-content'>
                            We love to work with people who want real change and 
                            who are willing to let us get it for them. 
                            If you want to do things differently then we can’t wait to help.
                        </p>
                    </div>
                </div>
                <div className='section-work-alternative'>
                    <div className='container text-center'>
                        <h2 className='h2-title' style={{paddingTop: 40, paddingBottom: 40}}>We are an independent company based in Dublin, Ireland.</h2>    
                    </div>
                </div>
                <WorkWithUs />
            </div>
        )
    }
}

export default About;