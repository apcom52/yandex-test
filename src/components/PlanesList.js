import React, { Component } from 'react';
import { API_URL, API_KEY, STATION_ID, TRANSPORT_TYPE } from '../consts';
import Plane from "./Plane";
import '../styles/planes-list.scss';

export default class PlanesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            departure: [],
            arrival: []
        }
    }

    componentDidMount() {
        console.log('get schedule');
        this.__getSchedule();
    }

    componentDidUpdated() {
        console.log('updated!', this.props.event);
    }

    __getSchedule() {
        const event = this.props.event;

        fetch('/api/' + event + '/')
            .then(res => res.json())
            .then(json => {
                let newState = {};
                newState[event] = json.schedule;

                console.log(newState);

                this.setState(newState);
            });
    }

    __getFactTime(oldTime) {
        return Math.round(0.5 + Math.random() * (60));
    }

    render() {
        const event = this.props.event;
        const planesList = this.state[event];

        console.log('planesList:', planesList);

        if (planesList.length === 0) {
            return <div className="planes-list__message">Идет загрузка...</div>;
        }

        let planes = planesList.map((plane) => {
            return <Plane plane={plane} />
        });

        return <div className="planes-list">
            {planes}
        </div>
    }
};