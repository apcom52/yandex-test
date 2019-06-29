import React, { Component } from 'react';
import Plane from "./Plane";
import '../styles/planes-list.scss';

export default class PlanesList extends Component {
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