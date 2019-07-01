import React, { Component } from 'react';
import '../styles/plane.scss';

export default class Plane extends Component {
    __getTime(date) {
        return date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    }

    render() {
        const plane = this.props.plane;
        let time = plane.arrival ? plane.arrival : plane.departure;

        const timeDateObject = new Date(time);

        return <div className="plane">
            <div className="plane__time">
                <time className="plane__wrong-time">17:45</time>
                <time className="plane__real-time">{ this.__getTime(timeDateObject) }</time>
            </div>
            <div className="plane__number">{ plane.thread.number }</div>
            <div className="plane__info">
                <div className="plane__title">{ plane.thread.title }</div>
                <div className="plane__days">{ plane.days }</div>
                <div className="plane__vehicle">{ plane.thread.vehicle }</div>
            </div>
        </div>;
    }
};