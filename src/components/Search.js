import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/search.scss';
import {setSearch} from "../store/AppActions";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    onInput = (event) => {
        const value = event.target.value;

        this.setState({
            value: value
        });

        this.props.setSearch(value.toLowerCase());
    };

    render() {
        return <input type="search" className="search" placeholder="Поиск по номеру рейса" value={this.state.value} onInput={this.onInput} />
    }
}

const getStoreData = (store) => {
    return {
        search: store.search
    }
};

const dispatchStoreData = (dispatch) => {
    return {
        setSearch: query => dispatch(setSearch(query))
    }
};

export default connect(getStoreData, dispatchStoreData)(Search);