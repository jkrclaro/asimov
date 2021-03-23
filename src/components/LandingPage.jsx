import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends Component {

    state = {
        projects: [
            {img: 'covid.png', title: 'COVID-19', link: 'covid'},
            {img: 'podplayer.png', title: 'Podplayer', link: 'podplayer'},
        ]
    }

    render() {
        const { projects } = this.state;
        return (
            <div className='container mt-3'>
                <div className='mb-3'>
                    <img src='me.png' alt='me.png' style={{borderRadius: '50%', height: 100, width: 100}}></img>
                </div>
                <div style={{width: 500}}>
                    <div className='mb-3'>
                        <b>About</b>
                        <div>
                            I was born in the Philippines and grew up in Ireland since I was 10 years old. 
                            I studied Applied Computing at WIT. 
                            After graduation, I worked as data engineer at Distilled SCH.
                        </div>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <b>Projects</b>
                        </div>
                        <div className='row'>
                            {projects.map((project, index) =>
                                <Link to={project.link} className='col-3 text-center mb-3' key={`project-${index}`}>
                                    <img src={project.img} alt={project.img} style={{borderRadius: '50%', height: 50, width: 50}}></img>
                                    <div>
                                        <small>{project.title}</small>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default LandingPage;