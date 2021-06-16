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
        }
    }

    async componentDidMount() {
        this.setState({components : await fetchMap(), options: await fetchTags()})
        this.fillComponents();
        this.fillOptions();
        this.getTheTags();
    }

    fillOptions(){
        const optionsForFill = [{label: "all" , value: 'all'}]
        for(let i=0; i<this.state.options.length; i++){
            optionsForFill.push({label: this.state.options[i].tag_name, value: this.state.options[i].tag_name})
        }
        this.setState({
            options: optionsForFill
        })
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
                    var tagString = JSON.stringify(tags)
                    console.log('😇😇🚴‍♀', this.state.components[i].component_id, this.state.components[i].title, tagString);
                    console.log('parse', JSON.parse(tagString))
                    componentsForFill.push({id: this.state.components[i].component_id, title : this.state.components[i].title, tags: JSON.parse(tagString) })
                }
            }
            while(tags.length > 0) {
                tags.pop();
            }
        }
        console.log('idee 🐶', componentsForFill);
        this.setState({components : componentsForFill})
    }

    getTheTags(){
        this.state.components.map((c) => (
            c.tags.map((t) =>
                console.log('c',t)
            )
        ))
    }


    setFilter(select) {
        const a = [];
        select.map((select) => (a.push(select.value)))
        this.setState( this.state.filterValue = a);
    }

    render() {
        return (
            <div>
                <div className={s.multiselect}>
                        <Select
                            isMulti
                            defaultValue={{ label: 'All', value: 'All'}}
                            options={this.state.options}
                            className="basic-multi-select"
                            onChange={(value) => this.setFilter(value)}
                            classNamePrefix="select"
                        />
                    </div>
                {/*<div className={s.container}>

                        {this.state.filterValue.map((tag) => (
                            tag === [] || tag === 'All' ?
                                this.state.components.map((components) => (
                                    <div className={s.item} key={components.id}>
                                        <Checkbox className={s.logo}/>
                                        <h2>{components.name}</h2>
                                        <p className={s.tags}>{components.tagImport}&nbsp;&nbsp;&nbsp;{components.tagStacks}</p>
                                    </div>
                            ))
                            :
                            this.state.components.filter(components => components.tagStacks === tag || components.tagImport === tag).map((components) => (
                                <div className={s.item} key={components.id}>
                                    <Checkbox className={s.logo}/>
                                    <h2>{components.name}</h2>
                                    <div>
                                        <p className={s.tags}>{components.tagImport}&nbsp;&nbsp;&nbsp;{components.tagStacks}</p>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>*/}
                    <div className={s.container}>
                        {this.state.components.map((components) => (
                            <div className={s.item} key={components.id}>
                                <Checkbox className={s.logo}/>
                                <h1>{components.title}</h1>
                                <h3 className={s.tags} >{components.tags}</h3>
                            </div>
                            ))
                        }
                    </div>
            </div>
        );
    }
}

export default withRouter(ComponentView);
