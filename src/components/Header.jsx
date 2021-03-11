import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../containers/Search';


class Header extends React.Component {

    render() {
        let { path, title } = this.props;
        path = path ? path.replace('/:id', '') : path;

        return (
            <div>
                <div className='row mt-3 mb-3'>
                    <div className='col-lg-7 my-auto'>
                            { path ? (
                                <Link className='search-link' to={path}><i className='fas fa-arrow-left mr-2'></i> Back</Link>
                            ) : (
                                <h3><b>{title}</b></h3>
                            )}
                    </div>
                    <div className='col-lg-5 mt-3 mb-3'>
                        <Search />
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header;