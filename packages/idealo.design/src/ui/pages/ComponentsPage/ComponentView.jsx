import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Checkbox } from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import { fetchComponents, fetchTags, fetchMap } from "./component_data";


class ComponentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: ['All'],
            components: [],
            options: [],
            filteredComponents: []
        }
    }

    async componentDidMount() {
        this.setState({components : await fetchMap(), options: await fetchTags()})
        this.fillComponents();
        this.fillOptions();
        this.fillFilterComponents();
    }

    fillOptions(){
        const optionsForFill = []
        for(let i=0; i<this.state.options.length; i++){
            optionsForFill.push({label: this.state.options[i].tag_name, value: this.state.options[i].tag_name})
        }
        this.setState({
            options: optionsForFill
        })
    }

    fillFilterComponents(){
        if(this.state.filteredComponents.length < 1) {
            this.setState({filteredComponents: this.state.components})
        }
        else{
            this.setState({filteredComponents:[]})
            const filteredComponents = [];
            for(let i=0; i<this.state.components.length; i++){
                for(let j=0; j<this.state.filterValue.length; j++) {
                    for(let x=0; x<this.state.components[i].tags.length; x++){
                        if(this.state.components[i].tags[x] === this.state.filterValue[j]){
                            filteredComponents.push(this.state.components[i])
                        }
                    }
                }
            }
            filteredComponents.filter(function(ele , pos){return filteredComponents.indexOf(ele) === pos;});
            this.setState({filteredComponents: filteredComponents})
        }
    }

    fillComponents(){
        const componentsForFill = []
        const tags = []
        for(let i=0; i<this.state.components.length; i++)
        {
            for(let j=i+1; j<this.state.components.length; j++){
                if(this.state.components[i].component_id === this.state.components[j].component_id){
                    tags.push(this.state.components[i].tag_name);
                    tags.push(this.state.components[j].tag_name);
                    componentsForFill.push({id: this.state.components[i].component_id, title : this.state.components[i].title, tags: JSON.parse(JSON.stringify(tags)) })
                }
            }
            while(tags.length > 0) {
                tags.pop();
            }
        }
        this.setState({components : componentsForFill})
    }
/*

    getTheTags() {
        console.log('filterValueTag',filterValueTag)
        for (let j = 0; j < this.state.components.length; j++) {
            console.log('this.state.components.tags[j].length',this.state.components.tags[j].length)
            /!*for (let i = 0; i < this.state.components.tags[j].length; i++) {
                console.log('this.state.components.tags[i]',this.state.components.tags[i]);
                if (this.state.components.tags[i] === filterValueTag) {
                    return true;
                }
            }*!/
        }
        return '#react'
    }
*/




    setFilter(select) {
        const a = [];
        select.map((select) => (a.push(select.value)))
        this.setState( this.state.filterValue = a);
        this.fillFilterComponents();
    }

    render() {
        return (
            <div>
                <div className={s.multiselect}>
                        <Select
                            isMulti
                            //defaultValue={{ label: 'All', value: 'All'}}
                            options={this.state.options}
                            className="basic-multi-select"
                            onChange={(value) => this.setFilter(value)}
                            classNamePrefix="select"
                        />
                    </div>
                <div className={s.container}>
                    {this.state.filteredComponents.map((component) =>(
                        <div className={s.item} key={component.id}>
                            <Checkbox className={s.logo}/>
                            <h1>{component.title}</h1>
                            <h3 className={s.tags} >{component.tags}</h3>
                        </div>
                    ))}

                </div>
               {/* <div className={s.container}>

                        {this.state.filterValue.map((tag) => (
                            tag === 'All' ?
                                this.state.components.map((component) => (
                                    <div className={s.item} key={component.id}>
                                        <Checkbox className={s.logo}/>
                                        <h1>{component.title}</h1>
                                        <h3 className={s.tags} >{component.tags}</h3>
                                    </div>
                            ))
                            :

                            this.state.components.filter(tag === this.getTheTags()).map((component) => (
                                <div className={s.item} key={component.id}>
                                    <div className={s.item} key={component.id}>
                                        <Checkbox className={s.logo}/>
                                        <h1>{component.title}</h1>
                                        <h3 className={s.tags} >{component.tags}</h3>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>*/}
                    {/*<div className={s.container}>
                        {this.state.components.map((components) => (
                            <div className={s.item} key={components.id}>
                                <Checkbox className={s.logo}/>
                                <h1>{components.title}</h1>
                                <h3 className={s.tags} >{components.tags}</h3>
                            </div>
                            ))
                        }
                    </div>*/}
            </div>
        );
    }
}

export default withRouter(ComponentView);
