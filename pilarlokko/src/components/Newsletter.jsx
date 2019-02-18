import React from 'react';


class Newsletter extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 mt-5'>
                        <h2 className='title'>Stay in touch</h2>
                        <p>
                            Enter your details and get my exclusive fat loss 
                            guide for free to kick start your health and 
                            fitness journey. You’ll also get access to my 
                            newsletter full of workouts, recipes, inspiration 
                            and great offers.
                        </p>
                        <div id="mc_embed_signup" className='mb-3'>
                            <form action="https://megaphonely.us19.list-manage.com/subscribe/post?u=9d2249cd11327255e70ecdb60&amp;id=77fea6ac28" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                <div id="mc_embed_signup_scroll">
                                    <label htmlFor='mce-FNAME'><small>First name</small></label>
                                    <input type='text' value="" name="FNAME" className='form-control mb-3' id="mce-FNAME"  required></input>
                                    <label htmlFor='mce-LNAME'><small>Last name</small></label>
                                    <input type='text' value="" name="LNAME" className='form-control mb-3' id="mce-LNAME"  required></input>
                                    <label htmlFor='mce-EMAIL' className='p-content'><small>Email</small></label>
                                    <input type='email' value="" name="EMAIL" className='form-control mb-3' id="mce-EMAIL"  required></input>
                                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_9d2249cd11327255e70ecdb60_77fea6ac28" tabindex="-1" value=""></input></div>
                                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-pilarlokko-primary"></input></div>
                                </div>
                            </form>
                        </div>
                        <p className='text-muted'>
                            Don’t worry, you can unsubscribe from the newsletter at any time.
                        </p>
                    </div>
                    <div className='col-lg-6 mt-5'>
                        <img src='https://www.ucd.ie/sportandfitness/t4media/Banner---PT-Course.jpg' className='img-fluid' alt='contact.jpg'></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsletter;