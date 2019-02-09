import React from 'react';

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

    scroll(e) {
        window.scrollBy(e.deltaY, 0)
    }

    render() {
        return (
            <div>
                <div onWheel={this.scroll} style={{paddingTop: 90}}>
                    {this.state.isDesktop ? (
                        <div className="row flex-row flex-nowrap">
                            {this.state.visits.map((visit, visitIndex) =>
                                <div className="col-lg-4 enlarge" key={visitIndex}>
                                    <div className="content-overlay"></div>
                                    <div className="content card-block">
                                        <img className="content-image" src={require('../imgs/visit' + `${visitIndex + 1}` + '.jpg')} alt={'visit-' + visitIndex} width='100%' height='100%'></img>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">{visit.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            {this.state.visits.map((visit, visitIndex) =>
                                <div className="col-lg-4 enlarge mb-3" key={visitIndex}>
                                    <div className="content-overlay"></div>
                                    <div className="content card-block-mobile">
                                        <img className="content-image" src={require('../imgs/visit' + `${visitIndex + 1}` + '.jpg')} alt={'visit-' + visitIndex} width='100%' height='200'></img>
                                        <div class="content-details fadeIn-bottom">
                                            <h3 className="content-title">{visit.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Tour;