import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import {ReactComponent as Checkbox} from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import {fetchTags, fetchMap, updateComponentsTags, fetchComponents} from "./component_data";


class ComponentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: [],
            components: [],
            list: [],
            options: [],
            filteredComponents: [],
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

        for(let c=0;c<this.state.list.length;c++){
            for(let i=0;i<this.state.components.length;i++){
                if(this.state.list[c].component_id===this.state.components[i].component_id){
                    tags.push('#'+this.state.components[i].tag_name)
                }
            }

            componentsForFill.push({
                id: this.state.list[c].component_id,
                title: this.state.list[c].title,
                tags: JSON.parse(JSON.stringify(tags))
            })
            tags=[]
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
                        //check weather filterValue-array is a subarray of components[i].tags
                        const check = this.state.filterValue.every((el) => {
                            return this.state.components[i].tags.indexOf(el)!==-1
                        });
                        if(check){
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
        await updateComponentsTags().then(window.location.reload())
    }

    setFilter(select) {
        const filterValue = [];
        select.map((select) => (filterValue.push('#'+select.value)))
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
                            <h1 className={s.h1}>{component.title}</h1>
                            <h3 className={s.tags} >{component.tags}</h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(ComponentView);
