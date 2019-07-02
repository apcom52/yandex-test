import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plane from "./Plane";
import '../styles/planes-list.scss';

class PlanesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planesList: []
        }
    }

    componentDidMount() {
        this.__getSchedule();
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
                    }
                });

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
        const planesList = this.state.planesList;

        if (planesList.length === 0) {
            return <div className="planes-list__message">Идет загрузка...</div>;
        }

        let planes = planesList.map((plane) => {
            if (this.props.search) {
                const number = plane.thread.number.toLowerCase();

                if (number.indexOf(this.props.search) === -1) {
                    return null;
                }
            }

            return <Plane plane={plane} />
        });

        return <div className="planes-list">
            {planes}
        </div>
    }
};

const getStoreData = (store) => {
    return {
        search: store.search
    }
}

export default connect(getStoreData)(PlanesList);