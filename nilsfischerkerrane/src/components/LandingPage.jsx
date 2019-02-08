import React from 'react';

import Header from './Header';

const stock1 = require('../imgs/stock1.jpg');
const stock2 = require('../imgs/stock2.jpg');
const stock3 = require('../imgs/stock3.jpg');
const visit1 = require('../imgs/visit1.jpg');
const visit2 = require('../imgs/visit2.jpg');
const visit3 = require('../imgs/visit3.jpg');
const visit4 = require('../imgs/visit4.jpg');
const visit5 = require('../imgs/visit5.jpg');
const visit6 = require('../imgs/visit6.jpg');
const visit7 = require('../imgs/visit7.jpg');


class Home extends React.Component {

    state = {
        isDesktop: false,
        settings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    updatePredicate = this.updatePredicate.bind(this);

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
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
                {this.state.isDesktop ? (
                    <div className='section-1'>
                        <Header/>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6' style={{paddingTop: 400}}>
                                    <h1>TAKE A JOURNEY THROUGH DUBLIN'S AND IRELAND'S HISTORY</h1>
                                    <a href='https://www.airbnb.ie/experiences/385040' className='btn btn-custom-primary'>Book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='section-2'>
                            <Header/>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6 mt-5'>
                                    <h3 className='h3-heading text-center'>TAKE A JOURNEY THROUGH DUBLIN'S AND IRELAND'S HISTORY</h3>
                                    <a className='btn btn-custom-primary btn-block'>Book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className='container mt-5 mb-5'>
                    <div className='row'>
                        <div className='col-lg-6 mt-5'>
                            <h3 className='h3-heading'>ABOUT YOUR HOST</h3>
                            <p className='p-content'>
                            How often do you meet a historian who's also a professional beer expert? 
                            I'm Nils and I have created my own tour combining history and beer. 
                            Having established the tour in Berlin (Rated 4.93/5 from 374 reviews),
                            I have now decided to do the same in my hometown.
                            Born and bred in Dublin, I have a degree in Irish history from Trinity College, 
                            and have also worked as a guide in the Guinness Brewery. 
                            All this puts me in a offer position to offer insights on 
                            both Ireland's history and its favourite beer.
                            </p>
                        </div>
                        <div className='col-lg-6 mt-5 mb-5'>
                            <img src={stock2} className='img-fluid'></img>
                        </div>
                        <div className='col-lg-12 mb-5'>
                            <h3 className='h3-heading'>WHAT WE'LL DO</h3>
                            <p className='p-content'>
                            Join me as we take a journey through Dublin’s and Ireland’s history, focussing on the most important figures of the last centuries; from St. Patrick to Queen Elizabeth, from Oscar Wilde to Bono. 
                            As we make our way through the city, we’ll discuss it all - from the first English invasion up to Brexit, from the arrival of St. Patrick up to the abortion referendum of 2018. And everything in between. We’ll see how this history has shaped Dublin, and how its legacy can still be seen all over the city today. 
                            After 2 hours of history, we'll head to one of my favourite pubs and enjoy a pint of Guinness (pint is included in the price of the tour). As we enjoy it, I’ll tell you everything there is to know about the beer, especially important info that you wouldn't necessarily hear at the Guinness Storehouse – Why does it take so long to pour a pint? Why is it so beloved in Ireland? Why is it so smooth and creamy? Why does it taste so much better here than elsewhere? Why does every can of Guinness have a plastic ball in it?
                            Fascinating history followed by a delicious pint. What could be better?
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: '#ddd'}}>
                    <div className='container' style={{paddingTop: 100, paddingBottom: 100}}>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-6 mb-3'>
                                    <img src={visit1} alt='visit-1' width='100%' height='300'></img>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <h3 className='h3-heading'>GENERAL POST OFFICE</h3>
                                    <p className='p-content'>
                                        The General Post Office (GPO; Irish: Ard-Oifig an Phoist) in Dublin is the headquarters of An Post, the Irish Post Office, and Dublin's principal post office. Sited in the centre of O'Connell Street, the city's main thoroughfare, it is one of Ireland's most famous buildings, and was the last of the great Georgian public buildings erected in the capital.
                                    </p>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <img src={visit2} alt='visit-2' width='100%' height='300'></img>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <h3 className='h3-heading'>O'CONNELL BRIDGE</h3>
                                    <p className='p-content'>
                                    O'Connell Bridge (Irish: Droichead Uí Chonaill)[2] is a road bridge spanning the River Liffey in Dublin, and joining O'Connell Street to D'Olier Street, Westmoreland Street and the south quays.
                                    </p>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <img src={visit3} alt='visit-3' width='100%' height='300'></img>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <h3 className='h3-heading'>JOKER'S CHAIR</h3>
                                    <p className='p-content'>
                                    Just a short distance away from the powers-that-be in Ireland, the Joker’s Chair is a memorial to one of the country’s most beloved alternative comedians, Dermot Morgan, who made his career satirizing Irish politics, and rose to international fame playing Father Ted, a priest that had quite a weakness for fame and money.
                                    </p>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <img src={visit4} alt='visit-4' width='100%' height='300'></img>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <h3 className='h3-heading'>HA'PENNY BRIDGE</h3>
                                    <p className='p-content'>
                                    The Ha'penny Bridge (Irish: Droichead na Leathphingine, or Droichead na Life), known later for a time as the Penny Ha'penny Bridge, and officially the Liffey Bridge, is a pedestrian bridge built in May 1816 over the River Liffey in Dublin, Ireland.[2][4] Made of cast iron, the bridge was cast in Shropshire, England
                                    </p>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <img src={visit5} alt='visit-5' width='100%' height='300'></img>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <h3 className='h3-heading'>OSCAR WILDE MEMORIAL STATUE</h3>
                                    <p className='p-content'>
                                    The Oscar Wilde Memorial Sculpture is a collection of three statues in Merrion Square in Dublin, Ireland, commemorating Irish poet and playwright Oscar Wilde. The sculptures were unveiled in 1997 and were designed and made by Danny Osborne.
                                    </p>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <img src={visit6} alt='visit-6' width='100%' height='300'></img>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <h3 className='h3-heading'>TRINITY COLLEGE DUBLIN</h3>
                                    <p className='p-content'>
                                    Trinity College (Irish: Coláiste na Tríonóide), officially the College of the Holy and Undivided Trinity of Queen Elizabeth near Dublin, is the sole constituent college of the University of Dublin, a research university located in Dublin, Ireland.
                                    </p>
                                </div>
                                <div className='col-lg-6 mb-3'>
                                    <img src={visit7} alt='visit-7' width='100%' height='300'></img>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <h3 className='h3-heading'>A PINT AT MY FAVOURITE PUB</h3>
                                    <p className='p-content'>
                                    As we enjoy it, I’ll tell you everything there is to know about the beer, especially important info that you wouldn't necessarily hear at the Guinness Storehouse – Why does it take so long to pour a pint? Why is it so beloved in Ireland? Why is it so smooth and creamy? Why does it taste so much better here than elsewhere? Why does every can of Guinness have a plastic ball in it?
                                    Fascinating history followed by a delicious pint. What could be better?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;