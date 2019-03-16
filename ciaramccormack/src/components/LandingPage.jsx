import React from 'react';
import  { Link } from 'react-router-dom';


class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
            socials: [
                {'link': 'https://www.google.com', 'fontawesome': 'fab fa-twitter'},
                {'link': 'https://www.google.com', 'fontawesome': 'fab fa-facebook'},
                {'link': 'https://www.google.com', 'fontawesome': 'fab fa-instagram'},
                {'link': 'https://www.google.com', 'fontawesome': 'fab fa-linkedin'},
            ],
            services: [
                {'title': 'Chronic Illness Exercise', src: 'http://placekitten.com/200/300'},
                {'title': 'Lifestyle Coach', src: 'http://placekitten.com/300/200'},
                {'title': 'Cardio Smart Program', src: 'http://placekitten.com/200/400'},
                {'title': 'Men on The Move', src: 'http://placekitten.com/200/350'},
            ],
            testimonials: [
                {'user': 'Customer #1', 'date': 'Mar 2019', 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida erat in nulla malesuada, sit amet hendrerit enim porttitor. Ut posuere."},
                {'user': 'Customer #2', 'date': 'Mar 2019', 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida erat in nulla malesuada, sit amet hendrerit enim porttitor. Ut posuere."},
                {'user': 'Customer #3', 'date': 'Mar 2019', 'message': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida erat in nulla malesuada, sit amet hendrerit enim porttitor. Ut posuere."},
            ],
        }
        this.updatePredicate = this.updatePredicate.bind(this);
    }

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
                <div className='container mt-5 mb-5'>             
                    <div className='col-lg-12 text-center'>
                        <h1 className='title h1-title'>Health Focus Ireland</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida erat in nulla malesuada, sit amet hendrerit enim porttitor. Ut posuere.</p>
                        <Link to='/contact' className='btn btn-pilarlokko-primary'>Booking Enquiries</Link>
                    </div>
                </div>
                <div className='container'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            {this.state.services.map((service, serviceIndex) => (
                                <div className='col-lg-3 col-6 text-center'>
                                        <img alt={`service-${serviceIndex}`} src={service.src} width='100%' height='150px'></img>
                                        <div className='card-body'>
                                            <b>{service.title}</b>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div id="testimonial-slider" className="owl-carousel">
                        <div className='row'>
                            {this.state.testimonials.map((testimonial, testimonialIndex) => (
                                <div className='col-lg-4'>
                                    <div className="testimonial">
                                        <div className="testimonial-content">
                                            <div className="testimonial-icon">
                                                <i className="fa fa-quote-left"></i>
                                            </div>
                                            <p className="description">
                                                {testimonial.message}
                                            </p>
                                        </div>
                                        <h3 className="title">{testimonial.user}</h3>
                                        <span className="post">{testimonial.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-6 text-center'>
                            <a className="twitter-timeline" data-width='100%' data-height="768" href="https://twitter.com/CiaraMcC_?ref_src=twsrc%5Etfw">Tweets by CiaraMcC</a>
                        </div>
                        <div className='col-lg-3'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;