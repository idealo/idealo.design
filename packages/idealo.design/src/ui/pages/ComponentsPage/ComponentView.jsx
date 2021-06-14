import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Checkbox } from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import {fetchComponents,fetchTags} from "./component_data";

/*const components = [
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
];*/

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

        this.setState({ components:  await fetchComponents() });
        this.setState({
            options : [{ label: 'All', value: 'All'},{ label: '#react', value: '#react'},{ label: '#classic', value: '#classic'},{ label: '#figma', value: '#figma'},{ label: '#motive-ui', value: '#motive-ui'},]
            }
        )
        console.log('options',this.state.options);

        this.setState({
            options: await fetchTags()
        });
        console.log('tags', this.state.options);

    }

    jsonToArray() {
        const test = JSON.parse(this.state.components)
        const testArray = [];
        for( let i=0; i < test.length; i++)
        {
            testArray.push(test[i]);
        }
        return testArray;
    }

    setFilter(select) {
        const a = [];
        select.map((select) => (a.push(select.value)))

        this.setState( this.state.filterValue = a);
    }

    render() {
        return (
            <div className={s.list}>
                <div className={s.select}>
                    <Select
                        isMulti
                        defaultValue = {{tag_name:'All'}}
                        options={this.state.options}
                        className="basic-multi-select"
                        onChange={(tag_name) => this.setFilter(tag_name)}
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
                {/*<div className={s.container}>
                    {this.state.components}
                </div>*/}
            </div>
        );
    }
}

export default withRouter(ComponentView);
