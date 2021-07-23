import React from 'react'

import s from './ComponentsPage.module.scss'

import {withRouter} from "react-router";
import {fetchSingleComponent, fetchReadMe} from "./component_data";
import slugify from "slugify";
import {fetchSinglePost} from "../BlogPage/data";

export class ComponentsDetailView extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        const {history} = props;
        this.state = {
            slug: '',
            history: history,
            component: {},
            readme: [],
            links: [],
            URLOptions: '',
            result: ''
        }
    }

    async componentDidMount() {
        const slug = this.props.match.params.slug
        if (slug) {
            this.setState({
                component: await fetchSingleComponent({slug}),
                readme: await fetchReadMe({slug}),
                slug: slug,
                links: ['Design','Installation', 'Usage', 'Story Source', 'Prop Types']
            })
        }
    }

    async componentDidUpdate(prevProps) {
        /*if (prevProps.match.params.slug !== this.props.match.params.slug) {
            this.setState({
                component: await fetchSingleComponent({slug: this.props.match.params.slug}),
                readme: await fetchReadMe({slug: this.props.match.params.slug}),
                slug: this.props.match.params.slug,
                links: ['Design','Installation', 'Usage', 'Story Source', 'Prop Types'],
            })
        }*/
        this.checkURL()
    }

    handleClick() {
        //console.log('🥞')
        this.checkURL();
        //console.log('hsbjsadbksadbkjw')
    }

    checkURL() {
        const URLOptions = [];
        const url = slugify(window.location.href.toString());

        for (let i = 0; i < this.state.links.length; i++) {
            if (url.includes(this.state.links[i])) {
                URLOptions.push(this.state.links[i])
            }
        }
        this.setState({URLOptions: URLOptions})
        //console.log('kommt er hier hin')
        this.fillComponentsWithReadMe()
    }

    fillComponentsWithReadMe(){
        for(let i=0; i<this.state.readme.length; i++) {
            if (this.state.readme[i].slug === this.state.slug) {
                const a = this.state.readme[i].readme.content
                const use = a[Object.keys(a)[0]]
                const inst = a[Object.keys(a)[1]]
                const insta = inst[Object.keys(inst)[0]]
                const usage = use[Object.keys(use)[0]]
                const header1 = JSON.stringify(inst[Object.keys(inst)[1]])
                const header2 = JSON.stringify(use[Object.keys(use)[1]])
                //console.log('kurz for if else in fillcomponentswithreadme')
                if(header1.includes(this.state.URLOptions[0])){
                    this.setState({result: insta})
                }
                else if(header2.includes(this.state.URLOptions[0])){
                    this.setState({result: usage})
                }
            }
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
                        <li><a href="#Installation" onClick={() => this.handleClick}>Installation</a></li>
                        <li><a href="#Usage" onClick={() => this.handleClick}>Usage</a></li>
                        <li><a href="#Story Source">Story Source</a></li>
                        <li><a href="#Prop Types">Prop Types</a></li>
                    </ul>
                </div>
                <div>
                <code className={s.code}>
                    {this.state.result}
                </code>
                </div>
            </div>
        );
    }
}

export default withRouter(ComponentsDetailView);

