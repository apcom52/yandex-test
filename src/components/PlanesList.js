import React, { Component } from 'react';
import { API_URL, API_KEY, STATION_ID, TRANSPORT_TYPE } from '../consts';
import Plane from "./Plane";
import '../styles/planes-list.scss';

export default class PlanesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planesList: []
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
                const schedule = json.schedule;

                schedule.forEach((plane, index) => {
                    if (Math.random() < 0.1) {
                        plane.realTime = this.__getFactTime(new Date(plane[this.props.event]));
                        console.log('!!!', index);
                    }
                });

                console.log(schedule);

                this.setState({
                    planesList: json.schedule
                });
            });
    }

    __getFactTime(date) {
        const diff = Math.round(0.5 + Math.random() * (60));
        return new Date(date.getTime() + diff*60000);
    }

    render() {
        const event = this.props.event;
        const planesList = this.state.planesList;

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