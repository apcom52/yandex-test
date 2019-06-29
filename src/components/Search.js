import React, {Component} from 'react';
import '../styles/search.scss';

export default class Search extends Component {
    render() {
        return <input type="search" className="search" placeholder="Поиск по номеру рейса" />
    }
}