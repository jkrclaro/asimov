import React from 'react';

const stock1 = require('../imgs/stock1.jpg')
const styles = {
    contactFont: {fontFamily: 'Karla'}
}

class Contact extends React.Component {

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
            <div style={styles.contactFont}>
                <div className='row'>
                    <div className='col-lg-6 mt-5 mb-5'>
                        <div className='container'>
                            <h3 className='mb-3'><b>We look forward to hearing from you.</b></h3>
                            <div className='mb-5'>
                                <div>You can always contact us directly at <a href='mailto:gethumblepage@gmail.com' className='theme-color'>gethumblepage@gmail.com</a></div>
                                <div>or call us at <a href='tel:1231234567' className='theme-color'>(123) 123-4567</a></div>
                            </div>
                            <form action='https://formspree.io/gethumblepage@gmail.com' method='POST'>
                                <h5><b>Project information</b></h5>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <label htmlFor='companyname'><small>COMPANY NAME</small></label>
                                        <input type='text' id='companyname' name='companyname' className='form-control mb-3'></input>
                                    </div>
                                    <div className='col-lg-6'>
                                        <label htmlFor='websiteurl'><small>WEBSITE URL</small></label>
                                        <input type='text' id='websiteurl' name='websiteurl' className='form-control mb-3'></input>
                                    </div>
                                </div>
                                <label htmlFor='message'><small>INFORMATION</small></label>
                                <textarea name='message' rows='5' placeholder='Brief, scope, timeline, budget, etc.' id='message' className='form-control mb-3' required></textarea>
                                <h5><b>Contact information</b></h5>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <label htmlFor='email'><small>EMAIL</small></label>
                                        <input type='email' id='_replyto' name='_replyto' className='form-control mb-3' required></input>
                                    </div>
                                    <div className='col-lg-6'>
                                        <label htmlFor='phonenumber'><small>PHONE NUMBER</small></label>
                                        <input type='text' id='phonenumber' name='phonenumber' className='form-control mb-3' required></input>
                                    </div>
                                </div>
                                <input type="hidden" name="_subject" value="Humblepage Proposal" />
                                <input type="hidden" name="_next" value="https://humblepage.com" />
                                <input type='submit' className='btn btn-humblepage-alternative' value='Submit'></input>
                            </form>
                        </div>
                    </div>
                    {this.state.isDesktop ? (
                        <div className='col-lg-6'>
                            <img src={stock1} width='100%' height='100%' className='img-responsive'></img>
                        </div>
                    ) : (null)}
                </div>
            </div>
        )
    }
}

export default Contact;