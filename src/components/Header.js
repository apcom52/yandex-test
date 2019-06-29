import React, {Component} from 'react';
import '../styles/header.scss';
import Tabs from "./Tabs";
import Search from "./Search";

export default class Header extends Component {
    render() {
        return <header className="header">
            <Tabs />
            <Search/>
        </header>
    }
}