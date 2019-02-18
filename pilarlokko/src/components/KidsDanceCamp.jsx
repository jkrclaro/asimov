import React from 'react';
import { Link } from 'react-router-dom';


class KidsDanceCamp extends React.Component {

    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 mb-5'>
                        <img src='https://www.cre8ivedance.co.uk/secure/wp-content/uploads/2014/09/dancecamp0-.jpg' className='img-fluid'></img>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='title h2-title'>Kids Dance Camp</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Morbi mattis in dolor eu luctus. 
                            Fusce sed facilisis lacus, quis aliquam massa. 
                            Etiam porttitor hendrerit quam, a vulputate tellus scelerisque et. 
                            Ut a libero ac quam interdum hendrerit non at leo. 
                            Sed fringilla dolor et purus sodales, vel tincidunt odio venenatis. 
                            Donec sagittis egestas ullamcorper. 
                            Aenean sit amet tempus arcu. 
                            Sed convallis felis et nibh ultricies, sed fringilla nisi feugiat. 
                            Quisque eu felis lobortis diam elementum dapibus. 
                            Nullam tempus libero justo, quis laoreet leo auctor a. 
                            Curabitur nec nisi consequat, varius dolor vitae, bibendum orci. 
                            Vivamus vehicula nisi sollicitudin rutrum pretium. 
                            Vestibulum urna magna, convallis vel blandit sit amet, mollis quis enim. 
                            Ut purus quam, viverra id eros at, accumsan pharetra purus.
                        </p>
                        <Link to='/' className='btn btn-pilarlokko-primary'>Get started</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default KidsDanceCamp;