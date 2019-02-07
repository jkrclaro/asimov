import React from 'react';

import Header from './Header';

const stock2 = require('../imgs/stock2.jpg');


class About extends React.Component {

    render() {
        return (
            <div>
                <div className='section-2'>
                    <Header/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center mt-5'>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
