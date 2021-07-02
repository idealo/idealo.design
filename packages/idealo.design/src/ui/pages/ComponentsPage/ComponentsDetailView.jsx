import React from 'react'

import s from './ComponentsPage.module.scss'

import {withRouter} from "react-router";

export class ComponentsDetailView extends React.Component {

    constructor(props) {
        super(props);
        const {history} = props;

        this.state = {

        }

    }

    async componentDidMount() {
    }




    render() {
        return (
            <h1> Hallo ComponentsDetailView</h1>
        );
    }
}

export default withRouter(ComponentsDetailView);

