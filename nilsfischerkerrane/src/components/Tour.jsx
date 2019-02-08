import React from 'react';

import Header from './Header';

const visit1 = require('../imgs/visit1.jpg');
const visit2 = require('../imgs/visit2.jpg');
const visit3 = require('../imgs/visit3.jpg');
const visit4 = require('../imgs/visit4.jpg');
const visit5 = require('../imgs/visit5.jpg');
const visit6 = require('../imgs/visit6.jpg');
const visit7 = require('../imgs/visit7.jpg');
const visit8 = require('../imgs/visit8.jpg');
const visit9 = require('../imgs/visit9.jpg');
const visit10 = require('../imgs/visit10.jpg');
const visit11 = require('../imgs/visit11.jpg');
const visit12 = require('../imgs/visit12.jpg');
const visit13 = require('../imgs/visit13.jpg');
const visit14 = require('../imgs/visit14.jpg');
const visit15 = require('../imgs/visit15.jpg');
const visit16 = require('../imgs/visit16.jpg');
const visit17 = require('../imgs/visit17.jpg');
const visit18 = require('../imgs/visit18.jpg');


class Tour extends React.Component {

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
                <div>
                    <Header />
                </div>
                <div className='container mt-5 mb-5'>             
                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            <img src={visit1} alt='visit-1' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>GARDEN OF REMEMBRANCE</h3>
                            <p className='p-content'>
                            The Garden of Remembrance (Irish: An Gairdín Cuimhneacháin) is a memorial garden in Dublin dedicated to the memory of "all those who gave their lives in the cause of Irish Freedom". It is located in the northern fifth of the former Rotunda Gardens in Parnell Square, a Georgian square at the northern end of O'Connell Street.
                            </p>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <img src={visit2} alt='visit-2' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>PARNELL MONUMENT</h3>
                            <p className='p-content'>
                            Charles Stewart Parnell was the most significant political figure in Ireland during the second half of the 19th century. As leader of the Home Rule Party, he made a notable contribution to the progress towards national self-determination and he also played a hugely important role in the Land War in post-famine Ireland. His fall in 1890 split the party but there was still a huge groundswell of support for him and in 1898 a movement was established to have a monument erected to his achievements.
                            </p>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <img src={visit3} alt='visit-3' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>O'CONNELL STREET</h3>
                            <p className='p-content'>
                            O'Connell Street (Irish: Sráid Uí Chonaill) is Dublin's main thoroughfare. It measures 49 m (54 yds) in width at its southern end, 46 m (50 yds) at the north, and is 500 m (547 yds) in length. During the 17th century it was a narrow street known as Drogheda Street (named after Henry Moore, Earl of Drogheda). It was widened, and renamed Sackville Street (named after Lionel Sackville, 1st Duke of Dorset) in the late 1700s until 1924, when it was renamed in honour of Daniel O'Connell, a nationalist leader of the early 19th century, whose statue stands at the lower end of the street, facing O'Connell Bridge.
                            </p>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <img src={visit4} alt='visit-4' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>THE SPIRE</h3>
                            <p className='p-content'>
                            The Spire of Dublin, alternatively titled the Monument of Light[1] (Irish: An Túr Solais),[2] is a large, stainless steel, pin-like monument 120 metres (390 ft) in height,[3] located on the site of the former Nelson's Pillar on O'Connell Street in Dublin, Ireland.
                            </p>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <img src={visit5} alt='visit-5' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>THE GPO</h3>
                            <p className='p-content'>
                            The General Post Office (GPO; Irish: Ard-Oifig an Phoist) in Dublin is the headquarters of An Post, the Irish Post Office, and Dublin's principal post office. Sited in the centre of O'Connell Street, the city's main thoroughfare, it is one of Ireland's most famous buildings, and was the last of the great Georgian public buildings erected in the capital.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit6} alt='visit-6' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>O'CONNELL MONUMENT</h3>
                            <p className='p-content'>
                            Daniel O'Connell: designed and sculpted by John Henry Foley and completed by his assistant Thomas Brock. Widely considered Foley's finest work, the foundation stone was laid in 1864 and the monument unveiled to enormous crowds in 1882.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit7} alt='visit-7' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>LIFFEY BOARDWALK</h3>
                            <p className='p-content'>
                            TODO
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit8} alt='visit-8' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>HA'PENNY BRIDGE</h3>
                            <p className='p-content'>
                            The Ha'penny Bridge (Irish: Droichead na Leathphingine, or Droichead na Life), known later for a time as the Penny Ha'penny Bridge, and officially the Liffey Bridge, is a pedestrian bridge built in May 1816 over the River Liffey in Dublin, Ireland.[2][4] Made of cast iron, the bridge was cast in Shropshire, England.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit9} alt='visit-9' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>TEMPLE BAR</h3>
                            <p className='p-content'>
                            Temple Bar (Irish: Barra an Teampaill)[1] is an area on the south bank of the River Liffey in central Dublin, Ireland. The area is bounded by the Liffey to the north, Dame Street to the south, Westmoreland Street to the east and Fishamble Street to the west. It is promoted as Dublin's 'cultural quarter' and, as a centre of Dublin's city centre's nightlife, is a tourist destination.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit10} alt='visit-10' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>CITY HALL</h3>
                            <p className='p-content'>
                            The City Hall, Dublin (Irish: Halla na Cathrach, Baile Átha Cliath), originally the Royal Exchange, is a civic building in Dublin, Ireland. It was built between 1769 and 1779 to the designs of architect Thomas Cooley and is a notable example of 18th-century architecture in the city.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit11} alt='visit-11' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>DUBLIN CASTLE</h3>
                            <p className='p-content'>
                            Dublin Castle (Irish: Caisleán Bhaile Átha Cliath) is a major Irish government complex, conference centre, and tourist attraction. It is located off Dame Street in Dublin, Ireland.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit12} alt='visit-12' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>1916 MEMORIAL</h3>
                            <p className='p-content'>
                            TODO
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit13} alt='visit-13' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>COLLEGE GREEN</h3>
                            <p className='p-content'>
                            TODO
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit14} alt='visit-14' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>TRINITY COLLEGE</h3>
                            <p className='p-content'>
                            Trinity College (Irish: Coláiste na Tríonóide), officially the College of the Holy and Undivided Trinity of Queen Elizabeth near Dublin, is the sole constituent college of the University of Dublin, a research university located in Dublin, Ireland.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit15} alt='visit-15' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>MERRION SQUARE</h3>
                            <p className='p-content'>
                            Merrion Square (Irish: Cearnóg Mhuirfean) is a Georgian garden square on the southside of Dublin city centre.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit16} alt='visit-16' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>OSCAR WILDE STATUE</h3>
                            <p className='p-content'>
                            The Oscar Wilde Memorial Sculpture is a collection of three statues in Merrion Square in Dublin, Ireland, commemorating Irish poet and playwright Oscar Wilde. The sculptures were unveiled in 1997 and were designed and made by Danny Osborne.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit17} alt='visit-17' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>LEINSTER HOUSE</h3>
                            <p className='p-content'>
                            Leinster House was originally the ducal palace of the Dukes of Leinster. Since 1922, it is a complex of buildings, of which the former ducal palace is the core, which house Oireachtas Éireann, its members and staff. The most recognisable part of the complex, and the "public face" of Leinster House, continues to be the former ducal palace at the core of the complex.
                            </p>
                        </div>                        
                        <div className='col-lg-6 mb-3'>
                            <img src={visit18} alt='visit-18' width='100%' height='300'></img>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='h3-heading'>A PINT AT MY FAVORITE PUB</h3>
                            <p className='p-content'>
                            After 2 hours of history, we'll head to one of my favourite pubs and enjoy a pint of Guinness (pint is included in the price of the tour). As we enjoy it, I’ll tell you everything there is to know about the beer, especially important info that you wouldn't necessarily hear at the Guinness Storehouse – Why does it take so long to pour a pint? Why is it so beloved in Ireland? Why is it so smooth and creamy? Why does it taste so much better here than elsewhere? Why does every can of Guinness have a plastic ball in it?
                            Fascinating history followed by a delicious pint. What could be better?
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: '#ddd', paddingTop: 100, paddingBottom: 100}} >
                    <div className='container'>
                        <h1>Looking to visit Dublin?</h1>
                        <a className='btn btn-custom-primary' href='https://www.airbnb.ie/experiences/385040'>Book now</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tour;