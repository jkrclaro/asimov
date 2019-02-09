import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';


class Tour extends React.Component {

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
        ]
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
                <Header />
                {this.state.isDesktop ? (
                    <div className='container'>
                        <div className="row">
                            <div className='col-lg-12 mt-5'>
                                <div className='container'>
                                    <h3 className='h3-heading'>WHAT WE'LL DO</h3>
                                    <p className='p-content'>
                                    Join me as we take a journey through Dublin’s and Ireland’s history, focussing on the most important figures of the last centuries; from St. Patrick to Queen Elizabeth, from Oscar Wilde to Bono. 
                                    </p>
                                    <p className='p-content'>
                                    As we make our way through the city, we’ll discuss it all - from the first English invasion up to Brexit, from the arrival of St. Patrick up to the abortion referendum of 2018. And everything in between. We’ll see how this history has shaped Dublin, and how its legacy can still be seen all over the city today. 
                                    </p>
                                </div>
                            </div>
                            {this.state.visits.map((visit, visitIndex) =>
                                <div className="col-lg-4 enlarge mb-5" key={visitIndex}>
                                    <div className="content-overlay"></div>
                                    <div className="content card-block">
                                        <img className="content-image" src={require('../imgs/visit' + `${visitIndex + 1}` + '.jpg')} alt={'visit-' + visitIndex} width='100%' height='100%'></img>
                                        <div className='content-details fadeIn-bottom'>
                                            <h3 className="content-title">{visit.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className='col-lg-12 mb-5'>
                                <div className='container'>
                                    <h3 className='h3-heading'>FINISHED!</h3>
                                    <p className='p-content'>
                                    After 2 hours of history, we'll head to one of my favourite pubs and enjoy a pint of Guinness (pint is included in the price of the tour). As we enjoy it, I’ll tell you everything there is to know about the beer, especially important info that you wouldn't necessarily hear at the Guinness Storehouse – Why does it take so long to pour a pint? Why is it so beloved in Ireland? Why is it so smooth and creamy? Why does it taste so much better here than elsewhere? Why does every can of Guinness have a plastic ball in it?
                                    </p>
                                    <p className='p-content'>
                                    Fascinating history followed by a delicious pint. What could be better?
                                    </p>
                                    <a href='https://www.airbnb.ie/experiences/385040' className='btn btn-custom-primary btn-block'>Book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='col-lg-4 mt-3'>
                            <h3 className='h3-heading'>WHAT WE'LL DO</h3>
                            <p className='p-content'>
                            Join me as we take a journey through Dublin’s and Ireland’s history, focussing on the most important figures of the last centuries; from St. Patrick to Queen Elizabeth, from Oscar Wilde to Bono. 
                            </p>
                            <p className='p-content'>
                            As we make our way through the city, we’ll discuss it all - from the first English invasion up to Brexit, from the arrival of St. Patrick up to the abortion referendum of 2018. And everything in between. We’ll see how this history has shaped Dublin, and how its legacy can still be seen all over the city today. 
                            </p>
                        </div>
                        {this.state.visits.map((visit, visitIndex) =>
                            <div className="col-lg-12 enlarge mt-3 mb-3" key={visitIndex}>
                                <div className="content-overlay"></div>
                                <div className="content card-block-mobile">
                                    <img className="content-image" src={require('../imgs/visit' + `${visitIndex + 1}` + '.jpg')} alt={'visit-' + visitIndex} width='100%' height='200'></img>
                                    <div className="content-details fadeIn-bottom">
                                        <h3 className="content-title">{visit.title}</h3>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='col-lg-4 mb-3'>
                            <h3 className='h3-heading'>FINISHED!</h3>
                            <p className='p-content'>
                            After 2 hours of history, we'll head to one of my favourite pubs and enjoy a pint of Guinness (pint is included in the price of the tour). As we enjoy it, I’ll tell you everything there is to know about the beer, especially important info that you wouldn't necessarily hear at the Guinness Storehouse – Why does it take so long to pour a pint? Why is it so beloved in Ireland? Why is it so smooth and creamy? Why does it taste so much better here than elsewhere? Why does every can of Guinness have a plastic ball in it?
                            </p>
                            <p className='p-content'>
                            Fascinating history followed by a delicious pint. What could be better?
                            </p>
                            <a href='https://www.airbnb.ie/experiences/385040' className='btn btn-custom-primary btn-block'>Book now</a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Tour;