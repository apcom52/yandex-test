import React, {Component} from 'react';
import '../styles/tabs.scss';

export default class Tabs extends Component {
    render() {
        return <div className="tabs">
            <a href="#" className="tab tab--active">Прилет</a>
            <a href="#" className="tab">Вылет</a>
            <a href="#" className="tab">Задержанные</a>
        </div>;
    }
}