import React from 'react';


class SearchRedirector extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.history.push(`/podcasts/${id}`);
    }

    render() {
        return (
            <div>SearchRedirector</div>
        )
    }
}

export default SearchRedirector;