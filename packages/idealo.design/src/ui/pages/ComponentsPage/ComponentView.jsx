import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import {ReactComponent as Checkbox} from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import {fetchTags, fetchMap, updateComponentsTags, fetchComponents} from "./component_data";


class ComponentView extends React.Component {

    constructor(props) {
        super(props);
        const {history} = props;
        this.state = {
            filterValue: [],
            components: [],
            list: [],
            options: [],
            filteredComponents: [],
            history: history
        }


        this.handleImportComponents = this.handleImportComponents.bind(this)
    }

    async componentDidMount() {
        this.setState({components: await fetchMap(), options: await fetchTags(), list: await fetchComponents()})
        this.fillComponents();
        this.fillOptions();
        this.fillFilterComponents();
    }

    fillOptions() {
        const optionsForFill = []
        for (let i = 0; i < this.state.options.length; i++) {
            optionsForFill.push({label: this.state.options[i].tag_name, value: this.state.options[i].tag_name})
        }
        this.setState({options: optionsForFill})
    }

    fillComponents() {
        const componentsForFill = []
        let tags = []
        const tagsOfAll = []
        let j = 0;

        for (let i = 0; i < this.state.components.length; i++) {
            if (this.state.components[i].component_id === this.state.components[j + 1].component_id) {
                tags.push(this.state.components[i].tag_name);
                j++
            }else{
                tags.push(this.state.components[j+1].tag_name);
                tagsOfAll.push(tags)
                tags=[]
            }
        }
        tagsOfAll.push(tags)

        for (let i = 0; i < this.state.list.length; i++) {
            componentsForFill.push({
                id: this.state.list[i].component_id,
                title: this.state.list[i].title,
                tags: JSON.parse(JSON.stringify(tagsOfAll[i]))
            })

        }
        console.log('components', componentsForFill)
        this.setState({components: componentsForFill})
    }

    fillFilterComponents() {
        if (this.state.filterValue.length < 1) {
            this.setState({filteredComponents: this.state.components})
        } else {
            this.setState({filteredComponents: []})
            const filteredComponents = [];
            for (let j = 0; j < this.state.filterValue.length; j++) {
                for (let i = 0; i < this.state.components.length; i++) {
                    for (let x = 0; x < this.state.components[i].tags.length; x++) {
                        if (this.state.components[i].tags[x] === this.state.filterValue[j]) {
                            filteredComponents.push(this.state.components[i])
                        }
                    }
                }
            }
            const uniqueFilteredComponents = [...new Set(filteredComponents)]
            this.setState({filteredComponents: uniqueFilteredComponents})
        }
    }

    async handleImportComponents() {
        await updateComponentsTags().then(r => this.state.history.push('/components'))
    }

    setFilter(select) {
        const filterValue = [];
        select.map((select) => (filterValue.push(select.value)))
        this.setState(this.state.filterValue = filterValue);
        this.fillFilterComponents();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleImportComponents}>Trigger the one and only update</button>
                <div className={s.multiselect}>
                    <Select
                        isMulti
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
            </div>
        );
    }
}

export default withRouter(ComponentView);
