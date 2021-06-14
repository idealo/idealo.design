import React, {useState} from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Checkbox } from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import { fetchComponents, fetchTags } from "./component_data";

const components = [
    {
        id: 1,
        name: 'Checkbox1',
        tagImport: '#motive-ui',
        tagStacks: '#react',
    },
    {
        id: 2,
        name: 'Select',
        tagImport: '#motive-ui',
        tagStacks: '#react',
    },
    {
        id: 3,
        name: 'Checkbox2',
        tagImport: '#motive-ui',
        tagStacks: '#classic'
    },
    {
        id: 4,
        name: 'Checkbox3',
        tagImport: '#figma',
        tagStacks: '#react'
    },
    {
        id: 5,
        name: 'Checkbox4',
        tagImport: '#figma',
        tagStacks: '#react'
    },
    {
        id: 6,
        name: 'Checkbox5',
        tagImport: '#figma',
        tagStacks: '#classic'
    },
];

class ComponentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: ['All'],
            components: [],
            options: [],
        }
    }

    async componentDidMount() {

        //this.setState({ components:  await fetchComponents() });
        this.setState(
            this.state.components = components,
        )
        this.setState(
            this.state.options = [
                { label: 'All', value: 'All'},
                { label: '#react', value: '#react'},
                { label: '#classic', value: '#classic'},
                { label: '#figma', value: '#figma'},
                { label: '#motive-ui', value: '#motive-ui'},
            ]
        )
        console.log('options',this.state.options);
/*
        this.setState({
            options: await fetchTags()
        });
        this.fillOptions();
        console.log('options',this.state.options);*/
    }

    /*fillOptions(){
        const optionsForFill = [{label: "all" , value: 'all'}]
        for(let i=0; i<this.state.options.length; i++){
            optionsForFill.push({label: this.state.options[i].tag_name, value: this.state.options[i].tag_name})
        }
        this.setState({
            options: optionsForFill
        })
    }*/

    setFilter(select) {
        const a = [];
        console.log('select', select);
        select.map((select) => (a.push(select.value)))
        this.setState( this.state.filterValue = a);
    }

    render() {
        return (
            <div className={s.list}>
                <div className={s.multiselect}>
                    <Select
                        isMulti
                        defaultValue = {{label: "all" , value: 'all'}}
                        options={this.state.options}
                        className="basic-multi-select"
                        onChange={(value) => this.setFilter(value)}
                        classNamePrefix="select"
                    />
                </div>
                <div className={s.container}>
                    {this.state.filterValue.map((tag) => (
                        tag === [] || tag === 'all' ?
                            components.map((components) => (
                                <div className={s.item} key={components.id}>
                                    <Checkbox className={s.logo}/>
                                    <h2>{components.name}</h2>
                                    <p className={s.tags}>{components.tagImport}&nbsp;&nbsp;&nbsp;{components.tagStacks}</p>
                                </div>
                            ))
                        :
                            components.filter(components => components.tagStacks === tag || components.tagImport === tag).map((components) => (
                                <div className={s.item} key={components.id}>
                                    <Checkbox className={s.logo}/>
                                    <h2>{components.name}</h2>
                                    <div>
                                        <p className={s.tags}>{components.tagImport}&nbsp;&nbsp;&nbsp;{components.tagStacks}</p>
                                    </div>
                                </div>
                            ))
                    ))}
                </div>
                {/*<div className={s.container}>
                    {this.state.components}
                </div>*/}
            </div>
        );
    }
}

export default withRouter(ComponentView);
