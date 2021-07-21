import React from 'react'

import s from './ComponentsPage.module.scss'

import {withRouter} from "react-router";
import {fetchSingleComponent, fetchReadMe} from "./component_data";

export class ComponentsDetailView extends React.Component {

    constructor(props) {
        super(props);
        const {history} = props;
        this.state = {
            slug: '',
            history: history,
            component: {},
            readme: []
        }
    }

    async componentDidMount() {
        const slug = this.props.match.params.slug
        if (slug) {
            this.setState({
                component: await fetchSingleComponent({slug}),
                readme: await fetchReadMe({slug}),
                slug: slug
            })
        }
        this.fillComponentsWithReadMe()
    }

    fillComponentsWithReadMe() {

        let ASplit = []

        for (let c = 0; c < this.state.readme.length; c++) {
            //console.log(this.state.readme);
            const a = this.state.readme[c].readme.content
            console.log(a);
                console.log(a.length);

            /*let rm = this.state.readme[c].readme;
            let cats = rm.split(/##/);
            ASplit[c] = [cats[1], cats[2], this.state.readme[c].slug]
            if (this.state.readme[c].slug === this.state.slug) {
                if (ASplit[c].includes(this.state.readme[c].slug)) {

                }
            }*/
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

