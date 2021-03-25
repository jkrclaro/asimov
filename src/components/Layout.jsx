import React from 'react';


class Layout extends React.Component {

    render() {
        return (
            <div>
                <div className='container mt-3 mb-5'>
                    <h1>TODO: Update layout</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;