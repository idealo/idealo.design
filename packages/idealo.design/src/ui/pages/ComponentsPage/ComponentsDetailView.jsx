import React from 'react'

import s from './ComponentsPage.module.scss'

import {withRouter} from "react-router";
import {fetchSingleComponent} from "./component_data";

export class ComponentsDetailView extends React.Component {

    constructor(props) {
        super(props);
        const {history} = props;
        this.state = {
            history: history,
            component: {},
        }
    }
    async componentDidMount() {
        const slug = this.props.match.params.slug
        if(slug){
             this.setState({
                 component: await fetchSingleComponent({slug})
            })
        }
    }

    render() {
        return (
            <div>
                <div className={s.headerNav}>
                    <h1>{this.state.component.title}</h1>
                    <p>----------------------------</p>
                    <ul>
                        <li><a href='#Design'>Design</a></li>
                        <li><a href="#Installation">Installation</a></li>
                        <li><a href="#Usage">Usage</a></li>
                        <li><a href="#Story Source">Story Source</a></li>
                        <li><a href="#Prop Types">Prop Types</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(ComponentsDetailView);

