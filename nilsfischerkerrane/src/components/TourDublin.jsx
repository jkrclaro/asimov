import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';
import Footer from './Footer';


const ireland = require('../imgs/ireland.png');


class TourDublin extends React.Component {

    state = {
        isDesktop: false,
        visits: [
            {'title': 'Garden of Remembrance', 'description': "TODO"}, // 1
            {'title': 'Parnell Monument', 'description': "TODO"}, // 2
            {'title': "O'Connell Street", 'description': "TODO"}, // 3
            {'title': 'The Spire', 'description': "TODO"}, // 4
            {'title': 'General Post Office', 'description': "TODO"}, // 5
            {'title': "O'Connell Monument", 'description': "TODO"}, // 6
            {'title': 'Liffey Boardwalk', 'description': "TODO"}, // 7
            {'title': "Ha'penny Bridge", 'description': "TODO"}, // 8
            {'title': 'Temple Bar', 'description': "TODO"}, // 9
            {'title': 'City Hall', 'description': "TODO"}, // 10
            {'title': 'Dublin Castle', 'description': "TODO"}, // 11
            {'title': '1916 Memorial', 'description': "TODO"}, // 12
            {'title': 'College Green', 'description': "TODO"}, // 13
            {'title': 'Trinity College', 'description': "TODO"}, // 14
            {'title': 'Merrion Square', 'description': "TODO"}, // 15
            {'title': 'Oscar Wilde Statue', 'description': "TODO"}, // 16
            {'title': 'Leinster House', 'description': "TODO"}, // 17
            {'title': "Napper Tandy's", 'description': "TODO"}, // 18
        ],
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
                <Header tour='ireland' />
                <div className='container'>
                    <div className='text-center'>
                        <div><a href='https://www.airbnb.ie/experiences/385040'><img src={ireland} alt='ireland' height='100' width='200'></img></a></div>
                        <a className='dublin' style={{fontSize: '5em'}} href='https://www.airbnb.ie/experiences/385040'>Dublin</a>
                    </div>
                    <h3 className='h3-heading mb-3'>WHAT WE'LL DO</h3>
                    <div className='mb-5'>
                        <p className='p-content'>
                        Join me as we take a journey through Dublin’s and Ireland’s history, focussing on the most important figures of the last centuries; from St. Patrick to Queen Elizabeth, from Oscar Wilde to Bono. 
                        </p>
                        <p className='p-content'>
                        As we make our way through the city, we’ll discuss it all - from the first English invasion up to Brexit, from the arrival of St. Patrick up to the abortion referendum of 2018. And everything in between. We’ll see how this history has shaped Dublin, and how its legacy can still be seen all over the city today. 
                        </p>
                    </div>
                    <h3 className='h3-heading mb-3'>WHERE WE'LL GO</h3>
                    {this.state.isDesktop ? (
                        <div className='row mb-5'>
                            {this.state.visits.map((visit, visitIndex) =>
                                <div className="col-lg-2 enlarge mb-3" key={visitIndex}>
                                    <div className="content-overlay"></div>
                                    <div className="content card-block">
                                        <img className="content-image" src={require('../imgs/visit' + `${visitIndex + 1}` + '.jpg')} alt={'visit-' + visitIndex} width='100%' height='100%'></img>
                                        <div className='content-details fadeIn-bottom'>
                                            <h3 className="content-title">{visit.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='row'>
                            {this.state.visits.map((visit, visitIndex) =>
                                <div className="col-6 enlarge mb-2" key={visitIndex}>
                                    <div className="content-overlay"></div>
                                    <div className="content card-block-mobile">
                                        <img className="content-image" src={require('../imgs/visit' + `${visitIndex + 1}` + '.jpg')} alt={'visit-' + visitIndex} width='100%' height='100%'></img>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">{visit.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    <h3 className='h3-heading mb-3'>A MEMORABLE PINT</h3>
                    <div className='mb-5'>
                        <p className='p-content'>
                        After 2 hours of history, we'll head to one of my favourite pubs and enjoy a pint of Guinness (pint is included in the price of the tour). As we enjoy it, I’ll tell you everything there is to know about the beer, especially important info that you wouldn't necessarily hear at the Guinness Storehouse – Why does it take so long to pour a pint? Why is it so beloved in Ireland? Why is it so smooth and creamy? Why does it taste so much better here than elsewhere? Why does every can of Guinness have a plastic ball in it?
                        </p>
                        <p className='p-content'>
                        Fascinating history followed by a delicious pint. What could be better?
                        </p>
                    </div>
                    <h3 className='h3-heading'>Testimonials</h3>
                    <div className='speech-bubble'>
                        <p className='p-content'>
                        Nils was a super tour guide! Not only was he 
                        gracious enough to let me catch up to the group 
                        when I slept in the morning of our walk, 
                        but he was also super engaging with me and all 
                        the others as we walked about the city, which I 
                        appreciate. It’s no fun when a guide just keeps to 
                        themself! To top it all off, our group got along 
                        well and the Guinness was delicious. Highly recommended!
                        </p>
                    </div>
                    <div className='text-right mb-3'><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><span className='ml-3'>Elizabeth, February 2019</span></div>
                    <div className='speech-bubble'>
                        <p>
                            I went with my boyfriend on this tour with Nils, 
                            it was very informative and really interesting. 
                            We saw all of the most important sights and Nils 
                            kept the information concise with a little humour 
                            too at each stopping point. After learning a 
                            great deal more about the City of Dublin, we 
                            finished up in a lovely traditional Irish pub, 
                            this was where Nils showed his other great passion 
                            of Guinness, by having a drink with him whilst 
                            describing the importance of the Black Stuff. 
                            A thoroughly enjoyable tour from a friendly and 
                            highly knowledgeable tour guide, an easy 
                            recommendation to others, Thanks Nils! :)
                        </p>
                    </div>
                    <div className='text-right mb-3'><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><span className='ml-3'>Jessica, February 2019</span></div>
                    <div className='speech-bubble'>
                        <p>
                            Touring with Nils was a delight - being taken 
                            through the city and getting to know the areas and 
                            architecture was great but his overlay of the 
                            history of Ireland during the past 150 years and 
                            how Dublin is part of that, both the city and the 
                            characters was really well done. Nils is a pleasure 
                            to spend the afternoon with and best of all has 
                            made me rediscover my taste for Guinness!
                        </p>
                    </div>
                    <div className='text-right mb-3'><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><span className='ml-3'>Paul, February 2019</span></div>
                </div>
                <div className='container mt-5'>
                    <a href='https://www.airbnb.ie/experiences/385040' className='btn btn-custom-dublin btn-block mb-3'>Book now</a>
                </div>
                <Footer />
            </div>
        )
    }
}

export default TourDublin;