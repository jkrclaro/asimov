import React from 'react';

const me = require('../imgs/me.png');

const underlineStyle = {
    textDecoration: 'underline'
}

class Home extends React.Component {

    render() {
        return (
            <div class='col-lg-12'>
                <div className='row mb-5'>
                    <div class='col-lg-8'>
                        <h1>SaaS tutorials</h1>
                        <img class='img-fluid mb-3' src='https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/Python-Pit-Stop-Articles_Red_Watermarked.868eed0ee07e.jpg&w=960&sig=a5b41ed5e7e7ee9e4fc172ba77b513e619610a72'></img>
                        <h3><a href='#'>How to Convert a Python String to int</a></h3>
                        <div>
                            There are several ways to represent integers in Python.
                            In this quick and practical tutorial, you'll learn how
                            you can store integers using int and str as well as
                            how you can convert a Python string to an int and vice versa.
                        </div>
                        <small class='text-muted'>Sep 18, 2019</small>
                    </div>
                    <div class='col-lg-4'>
                        <div class='card'>
                            <div class='card-body'>
                                Free email series
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;