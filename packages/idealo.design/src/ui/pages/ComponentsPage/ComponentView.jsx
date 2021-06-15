import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Checkbox } from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import { fetchComponents, fetchTags } from "./component_data";


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
        this.setState(
            this.state.components = await fetchComponents(),
        )
        this.fillComponents();
        this.setState({
            options: await fetchTags()
        });
        this.fillOptions();
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
        for(let i=0; i<this.state.components.length; i++){
            componentsForFill.push({title : this.state.components[i].title})
        }
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
                                <h2>{components.title}</h2>
                            </div>
                            ))
                        }
                    </div>
            </div>
        );
    }
}

export default withRouter(ComponentView);
