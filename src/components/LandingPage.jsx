import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends Component {

    state = {
        projects: [
            {img: 'covid.png', title: 'COVID-19', link: 'covid'},
            {img: 'podplayer.png', title: 'Podplayer', link: 'podplayer'},
        ],
        links: [
            {url: 'mailto:jkrclaro@gmail.com', title: 'Email'},
            {url: 'https://www.linkedin.com/in/johnclaro', title: 'LinkedIn'},
            {url: 'https://www.twitter.com/johnclaro_', title: 'Twitter'},
            {url: 'https://github.com/johnclaro_', title: 'Github'},
            {url: 'https://getpocket.com/@johnclaro', title: 'Pocket'},
        ]
    }

    render() {
        const { projects, links } = this.state;
        return (
            <div className='ml-3 mt-3'>
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
                    <div className='mb-3'>
                        <b>Links</b>
                        <div>
                            {links.map((link, index) =>
                                <span key={index} className='mr-1'>
                                    <a href={link.url}>{link.title}</a>{index !== links.length - 1 ? ',' : null}
                                </span>

                            )}
                        </div>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <b>Projects</b>
                        </div>
                        <div className='row'>
                            {projects.map((project, index) =>
                                <Link to={project.link} className='col-3 text-center mb-3' key={index}>
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