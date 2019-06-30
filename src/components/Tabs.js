import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/tabs.scss';

export default class Tabs extends Component {
    render() {
        return <div className="tabs">
            <div className="tab tab--active"><Link to="/" className="tab__link">Прилет</Link></div>
            <div className="tab"><Link to="/departure" className="tab__link">Вылет</Link></div>
        </div>;
    }
}