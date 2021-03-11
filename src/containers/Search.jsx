import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import _ from 'lodash';
import { components } from 'react-select';
import AsyncSelect from 'react-select/async';

import earcast from '../api/earcast';


const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <i className='fas fa-search'></i>
      </components.DropdownIndicator>
    );
};

const Option = (props) => {
    return (
        <components.Option {... props}>
            <Link className='search-link' to={`/search/${props.data.itunes_id}`}>
                <div className='row'>
                    <div className='col-2 my-auto'>
                        <img alt={props.data.img} src={props.data.img} height='50' width='50'></img>
                    </div>
                    <div className='col-10 my-auto'>
                        <div><small>{props.data.name}</small></div>
                        <div><small className='text-muted'>{props.data.author}</small></div>
                    </div>
                </div>
            </Link>
        </components.Option>
    )
};


const customStyles = {
    control: styles => ({ ...styles, borderRadius: '50px' })
}


class Search extends React.Component {

    loadRemoteOptions = _.debounce((inputValue, callback) => {
        const payload = {'keywords': inputValue}
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.auth.token}`
        }
        const config = { headers }
        earcast.post('/podcasts', payload, config)
            .then(result => callback(result.data, null))
            .catch(error => callback(null, error))
    }, 100)

    render() {
        return (
            <AsyncSelect
                getOptionLabel={option => option.name}
                getOptionValue={option => option.id}
                placeholder={'Find podcasts...'}
                components={{ DropdownIndicator, Option }}
                loadOptions={this.loadRemoteOptions}
                styles={customStyles}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Search);
