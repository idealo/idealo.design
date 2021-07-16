import React from 'react'

import s from './ComponentsPage.module.scss'

import {withRouter} from "react-router";
import {fetchSingleComponent, fetchReadMe} from "./component_data";

export class ComponentsDetailView extends React.Component {

    constructor(props) {
        super(props);
        const {history} = props;
        this.state = {
            history: history,
            component: {},
            readme: []
        }
    }
    async componentDidMount() {
        this.setState({readme: await fetchReadMe()})
        const slug = this.props.match.params.slug
        if(slug){
             this.setState({
                 component: await fetchSingleComponent({slug})
            })
        }
        this.fillComponentsWithReadMe()
    }

    fillComponentsWithReadMe(){
        for (let c = 0; c < this.state.readme.length; c++) {
            if (JSON.stringify(this.state.readme[c]).includes(this.state.component.title.replace('@motif/', ''))) {
                if(this.state.component.title.replace('@motif/', '') === this.state.component.title.replace('@motif/', ''))
                console.log('🥐', this.state.readme[c])
            }else{
                console.log('🧅', this.state.readme[c])
            }}
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

