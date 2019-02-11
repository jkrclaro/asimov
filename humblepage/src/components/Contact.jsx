import React from 'react';


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
            <div>
                <div className='section-work-alternative mb-3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'></div>
                            <div className='col-lg-6'>
                                <h2 className='h2-title mt-3 mb-3 text-center'>CONTACT US</h2>
                                <b>We look forward to hearing from you.</b>
                                <p>
                                    <div>You can always contact us directly at <a href='mailto:john@humblepage.com' className='theme-link'>john@humblepage.com</a></div>
                                    <div>or call us at <a href='tel:0894518912'  className='theme-link'>(089) 451 8912</a></div>
                                </p>
                            </div>
                            <div className='col-lg-3'></div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-6 mb-5'>
                            <form action='https://formspree.io/john@humblepage.com' method='POST'>
                                <h4 className='h4-title'>Project information</h4>
                                <label htmlFor='message'><small>INFORMATION</small></label>
                                <textarea name='message' rows='5' placeholder='Brief, scope, timeline, budget, etc.' id='message' className='form-control mb-3' required></textarea>
                                <h4 className='h4-title'>Contact information</h4>
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
                                <input type='submit' className='btn btn-humblepage-primary' value='Send'></input>
                            </form>
                        </div>
                        <div className='col-lg-3'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;