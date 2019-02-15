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
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h3 className='h3-title mt-5 mb-5 text-center'>Let's talk.</h3>
                            <div>
                                <p className='p-title'>Email us</p>
                                <p className='p-subtitle'><a href='mailto:john@humblepage.com' className='theme-link'>john@humblepage.com</a></p>
                            </div>

                            <div>
                                <p className='p-title'>Call us</p>
                                <p className='p-subtitle'><a href='tel:0894518912'  className='theme-link'>(089) 451 8912</a></p>
                            </div>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h4-title mt-5 text-center'>Send enquiry</h3>
                            <form action='https://formspree.io/john@humblepage.com' method='POST'>
                                <label htmlFor='message' className='p-content'><small>INFORMATION</small></label>
                                <textarea name='message' rows='5' placeholder='Brief, scope, timeline, budget, etc.' id='message' className='form-control mb-3' required></textarea>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <label htmlFor='email' className='p-content'><small>EMAIL</small></label>
                                        <input type='email' id='_replyto' name='_replyto' className='form-control mb-3' required></input>
                                    </div>
                                    <div className='col-lg-6'>
                                        <label htmlFor='phonenumber' className='p-content'><small>PHONE NUMBER</small></label>
                                        <input type='text' id='phonenumber' name='phonenumber' className='form-control mb-3'></input>
                                    </div>
                                </div>
                                <input type="hidden" name="_subject" value="Humblepage Proposal" />
                                <input type="hidden" name="_next" value="https://humblepage.com" />
                                <input type='submit' className='btn btn-humblepage-primary' value='Send'></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;