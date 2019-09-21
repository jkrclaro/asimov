import React from 'react';


class Home extends React.Component {

    render() {
        return (
            <div>
                <div className='row mb-5'>
                    <div class='col-lg-8 mb-5'>
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
                    <div class='col-lg-4 mb-5'>
                        <div class='card'>
                            <div class='card-body text-center'>
                                <b>Free email series</b>
                                <img class='img-fluid mb-3' src='https://via.placeholder.com/300'></img>
                                <input class='form-control mb-2' placeholder='Email...'></input>
                                <a href='#' class='btn button-Primary btn-block'>Get SaaS Tricks >></a>
                            </div>
                        </div>
                    </div>

                    <div class='col-lg-4'>
                        <a href='#'>
                            <img class='img-fluid mb-3' width='100%' src='https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/PyGame-Update_Watermarked.bb0aa2dfe80b.jpg&w=480&sig=09ce626c63d1e201b09c6cea67c018a87662dedd'></img>
                            <h5>PyGame: A Primer on Game Programming in Python</h5>
                        </a>
                        <small class='text-muted'>Sep 17, 2019</small>
                    </div>
                    <div class='col-lg-4'>
                        <a href='#'>
                            <img class='img-fluid mb-3' width='100%' src='https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/Python-vs-C_Watermarked.b9da21127ecc.jpg&w=480&sig=67be2c9b84020c68605f71e2ee75d47741edc22e'></img>
                            <h5>Python vs C++: Selecting the Right Tool for the Job</h5>
                        </a>
                        <small class='text-muted'>Sep 17, 2019</small>
                    </div>
                    <div class='col-lg-4'>
                        <img class='img-fluid mb-3' width='100%' src='https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/Matlab-vs-Python_Watermarked.78d19c0990ea.jpg&w=480&sig=02b0b90ccf20fb2138b3f7d847b8393e4e04b5d9'></img>
                        <h5><a href='#'>MATLAB vs Python: Why and How to Make the Switch</a></h5>
                        <small class='text-muted'>Sep 17, 2019</small>
                    </div>
                </div>

                <div class='row mb-5'>
                    <div class='col-lg-3'></div>
                    <div class='col-lg-6'>
                        <div class='card'>
                            <div class='card-body'>
                                <h3 class='text-center'>SaaS tricks</h3>
                                <hr/>
                                <div class='row'>
                                    <div class='col-lg-6 my-auto'>
                                        Get a short &amp; sweet SaaS trick delivered
                                        to your inbox every couple of days.
                                        No spam ever. Unsubscribe any time.
                                        Curated by the Sxftware team.
                                    </div>
                                    <div class='col-lg-6'>
                                        <img class='img-fluid mb-3' src='https://via.placeholder.com/300'></img>
                                    </div>
                                </div>
                                <input class='form-control mb-2' placeholder='Email address'></input>
                                <a href='#' class='btn button-Primary btn-block'>Send me SaaS Tricks >></a>
                            </div>
                        </div>
                    </div>
                    <div class='col-lg-3'></div>
                </div>
            </div>
        )
    }
}

export default Home;