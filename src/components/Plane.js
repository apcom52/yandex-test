import React, { Component } from 'react';
import '../styles/plane.scss';

export default class Plane extends Component {
    render() {
        return <div className="plane">
            <div className="plane__time">
                <time className="plane__wrong-time">17:45</time>
                <time className="plane__real-time">18:02</time>
            </div>
            <div className="plane__number">SU 2030</div>
            <div className="plane__info">
                <div className="plane__title">Москва — Ницца</div>
                <div className="plane__days">ежедневно по 26.10, кроме 24.06, 25.06</div>
                <div className="plane__vehicle">Аэрофлот, Airbus А321</div>
            </div>
        </div>;
    }
};