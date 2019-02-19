import React from 'react';


class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo(0 ,0);
    }

    render() {
        return (
            <div className='container mt-5'>
                <h2 className='title h2-title'>Get in touch</h2>
                <p>
                    Or email me at <a href='mailto:pilar.lokko@gmail.com' className='theme-link'>pilar.lokko@gmail.com</a>
                </p>
                <div className='mb-3'>
                    <a href='https://google.com' rel='nofollow'><i className='fab fa-instagram'></i></a>
                    <a href='https://google.com' rel='nofollow'><i className='fab fa-twitter'></i></a>
                    <a href='https://google.com' rel='nofollow'><i className='fab fa-facebook'></i></a>
                    <a href='https://google.com' rel='nofollow'><i className='fab fa-pinterest'></i></a>
                    <a href='https://google.com' rel='nofollow'><i className='fab fa-linkedin'></i></a>
                </div>
                <form className='mb-3'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label htmlFor='mce-FNAME'><small>First name</small></label>
                            <input type='text' value="" name="FNAME" className='form-control mb-3' id="mce-FNAME"  required></input>
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor='mce-LNAME'><small>Last name</small></label>
                            <input type='text' value="" name="LNAME" className='form-control mb-3' id="mce-LNAME"  required></input>
                        </div>
                    </div>
                    <label htmlFor='mce-EMAIL' className='p-content'><small>Email</small></label>
                    <input type='email' value="" name="EMAIL" className='form-control mb-3' id="mce-EMAIL"  required></input>
                    <label htmlFor='mce-MSG'><small>Message</small></label>
                    <textarea value="" name="MSG" className='form-control mb-3' id="mce-MSG"  required></textarea>
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_9d2249cd11327255e70ecdb60_77fea6ac28" tabindex="-1" value=""></input></div>
                    <div className="clear"><input type="submit" value="Send" name="Send" id="mc-embedded-subscribe" className="btn btn-pilarlokko-primary"></input></div>
                </form>
            </div>
        )
    }
}

export default Contact;