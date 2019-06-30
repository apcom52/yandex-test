import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import '../styles/tabs.scss';

export default class Tabs extends Component {
    render() {
        return <div className="tabs">
            <NavLink to="/" className="tab" activeClassName="tab--active" exact>Прилет</NavLink>
            <NavLink to="/departure" className="tab" activeClassName="tab--active">Вылет</NavLink>
        </div>;
    }
}