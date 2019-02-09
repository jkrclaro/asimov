import React from 'react';

import Header from './Header';


class Tour extends React.Component {

    state = {
        isDesktop: false,
        visits: [
            {'title': 'Garden of Remembrance', 'description': "TODO"},
            {'title': 'Parnell Monument', 'description': "TODO"},
            {'title': "O'Connell Street", 'description': "TODO"},
            {'title': 'The Spire', 'description': "TODO"},
            {'title': 'The GPO', 'description': "TODO"},
            {'title': "O'Connell Monument", 'description': "TODO"},
            {'title': 'Liffey Boardwalk', 'description': "TODO"},
            {'title': "Ha'penny Bridge", 'description': "TODO"},
            {'title': 'Temple Bar', 'description': "TODO"},
            {'title': 'City Hall', 'description': "TODO"},
            {'title': 'Dublin Castle', 'description': "TODO"},
            {'title': '1916 Memorial', 'description': "TODO"},
            {'title': 'College Green', 'description': "TODO"},
            {'title': 'Trinity College', 'description': "TODO"},
            {'title': 'Merrion Square', 'description': "TODO"},
            {'title': 'Oscar Wilde Statue', 'description': "TODO"},
            {'title': 'Leinster House', 'description': "TODO"},
            {'title': "Napper Tandy's", 'description': "TODO"},
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
        this.setState({ isDesktop: window.innerWidth > 780 });
    };

    render() {
        return (
            <div>
                <div style={{paddingTop: 90}}>
                    {this.state.isDesktop ? (
                        <div className="row flex-row flex-nowrap">
                            {this.state.visits.map((visit, visitIndex) =>
                                <div className="col-md-4 enlarge ml-3" key={visitIndex}>
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
                                <div className="col-md-4 enlarge mb-3" key={visitIndex}>
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