import React from 'react'

import s from './ComponentsPage.module.scss'

import {withRouter} from "react-router";
import {fetchSingleComponent, fetchReadMe} from "./component_data";
import slugify from "slugify";

export class ComponentsDetailView extends React.Component {

    constructor(props) {
        super(props);
        const {history} = props;
        this.state = {
            slug: '',
            history: history,
            component: {},
            readme: [],
            links: [],


            filterValue: [],
            components: [],
            list: [],
            options: [],
            filteredComponents: [],
            URLOptions: []
        }
    }

    async componentDidMount() {
        const slug = this.props.match.params.slug
        if (slug) {
            this.setState({
                component: await fetchSingleComponent({slug}),
                readme: await fetchReadMe({slug}),
                slug: slug,
                links: ['Installation', 'Usage']
            })
        }
        this.fillComponentsWithReadMe()
        this.checkURL()
    }

    fillComponentsWithReadMe() {
        //console.log(this.state.readme)
        const json = JSON.stringify(this.state.readme);
        //console.log(json)
        //const split = json.replace('},{"' + '},{\"', '##')
        //console.log(split)
        const hallo = json.split('##')
        console.log(hallo)

        const json2 = JSON.stringify(this.state.readme);
        const wallo = json2.split('},{')
        console.log(wallo)

        const json3 = JSON.stringify(this.state.readme);
        const kallo = json3.split('\\n",')
        console.log(kallo)
        //var myJsonString = JSON.stringify(split);
        //console.log(myJsonString)
        /*const e = eval(json)
        console.log(e)*/

        for (let c = 0; c < this.state.readme.length; c++) {
            if (this.state.readme[c].slug === this.state.slug) {

            }
        }
    }

    checkURL(){
        const filterValue = [];
        const URLOptions = [];
        const url = slugify(window.location.href.toString());
        //console.log(url)

        for(let i=0; i<this.state.links.length; i++) {
            //console.log(this.state.links)
            if(url.includes(this.state.links[i])){
                //console.log()
                filterValue.push('#' + this.state.links[i])
                URLOptions.push(this.state.links[i])
                //console.log(filterValue)
                //console.log(URLOptions)
            }
        }
        this.setState({filterValue:filterValue, URLOptions: URLOptions})
    }

    handleChange(links){
        const filterValue = [];
        links.map((links) => (filterValue.push('#' + links.value)))
        const searchParams = new URLSearchParams();
        searchParams.set("query", filterValue.toString());
        this.props.history.push(`?${searchParams.toString()}`);
        this.setState( this.state.filterValue = filterValue);
        this.checkURL();
    };



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

