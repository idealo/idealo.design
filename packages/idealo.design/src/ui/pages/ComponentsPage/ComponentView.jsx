import React from "react";
import { withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Checkbox } from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import { fetchTags, fetchMap } from "./component_data";
import slugify from "slugify";

function setParams({ query = ""}) {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);
    return searchParams.toString();
}

class ComponentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: [],
            components: [],
            options: [],
            filteredComponents: [],
            startOptions: []
        }
    }

    async componentDidMount() {
        this.setState({components : await fetchMap(), options: await fetchTags()})
        this.fillComponents();
        this.fillOptions();
        this.fillFilterComponents();
        this.setURL();
    }

    fillOptions(){
        const optionsForFill = []
        for(let i=0; i<this.state.options.length; i++){
            optionsForFill.push({label: this.state.options[i].tag_name, value: this.state.options[i].tag_name})
        }
        this.setState({ options: optionsForFill })
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

    fillFilterComponents(){
        if(this.state.filterValue.length < 1) {
            this.setState({filteredComponents: this.state.components})
        }
        else{
            this.setState({filteredComponents:[]})
            const filteredComponents = [];
            for(let j=0; j<this.state.filterValue.length; j++) {
                for(let i=0; i<this.state.components.length; i++){
                    for(let x=0; x<this.state.components[i].tags.length; x++){
                        if(this.state.components[i].tags[x] === this.state.filterValue[j]){
                            filteredComponents.push(this.state.components[i])
                        }
                    }
                }
            }
            const uniqueFilteredComponents = [...new Set(filteredComponents)]
            this.setState({filteredComponents: uniqueFilteredComponents})
        }
    }

    setFilter(select) {
        const filterValue = [];
        select.map((select) => (filterValue.push(select.value)))
        this.setState( this.state.filterValue = filterValue);
        this.fillFilterComponents();
    }

    updateURL = (value) => {
        this.setFilter(value)
        const url = setParams({ query: this.state.filterValue });
        this.props.history.push(`?${url}`);
        this.setURL();
    };

    setURL(){
        const filterValue = [];
        const startOptions = [];
        const url = slugify(window.location.href.toString());
        for(let i=0; i<this.state.options.length; i++) {
            if(url.includes(this.state.options[i].value.substr(1))){
                filterValue.push(this.state.options[i].value)
                startOptions.push(this.state.options[i])
            }
        }
        this.setState({filterValue:filterValue, startOptions: startOptions})
        this.fillFilterComponents();
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className={s.multiselect} >
                        <Select
                            isMulti
                            className="basic-multi-select"
                            value={this.state.startOptions}
                            onChange={(value) => this.updateURL(value)}
                            options={this.state.options}
                        />
                    </div>
                </React.Fragment>
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