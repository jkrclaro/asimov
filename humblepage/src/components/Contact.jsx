import React from 'react';
import { Link } from 'react-router-dom';


class Contact extends React.Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <h4><b>Get in touch via form</b></h4>
                    <form action='https://formspree.io/gethumblepage@gmail.com' method='POST' className='mb-3'>
                        <input type='email' name='email' placeholder='Your email' className='form-control mb-3'></input>
                        <textarea name='message' placeholder='Your message' className='form-control mb-3'></textarea>
                        <input type='submit' className='btn btn-humblepage-alternative btn-block' value='Send message'></input>
                    </form>
                    <Link to='/' className='btn btn-humblepage-primary'>Go back</Link>
                </div>
            </div>
        )
    }
}

export default Contact;