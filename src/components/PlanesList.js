import React, { Component } from 'react';
import { API_URL, API_KEY, STATION_ID, TRANSPORT_TYPE } from '../consts';
import Plane from "./Plane";
import '../styles/planes-list.scss';

export default class PlanesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            planesList: [],
            filteredPlanesList: []
        }
    }

    componentDidMount() {
        if (this.state.planesList.length === 0) {
            fetch('/api/get').then((response) => {
                console.log(response);
                console.log(response.body);
            });
        }
    }


    render() {
        let planes = [];

        for (let i = 0; i < 25; i++) {
            console.log('iii');
            planes.push(<Plane key={i} />);
        }

        return <div className="planes-list">
            {planes}
        </div>
    }
};