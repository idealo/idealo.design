import React from "react";
import { withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
//import {ReactComponent as Checkbox} from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import {fetchComponents, fetchMap, fetchTags, updateComponentsTags, fetchComponentsScreenshots} from "./component_data";
import slugify from "slugify";

class ComponentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: [],
            components: [],
            screenshots: [],
            list: [],
            options: [],
            filteredComponents: [],
            URLOptions: []
        }
        this.handleImportComponents = this.handleImportComponents.bind(this)
    }

    async componentDidMount() {
        this.setState({components: await fetchMap(), options: await fetchTags(), list: await fetchComponents(), screenshots: await fetchComponentsScreenshots()})
        this.fillComponents();
        this.fillOptions();
        this.fillFilterComponents();
        this.checkURL();
    }

    fillComponents() {
        const components = []
        let tags = []
        let screenshots = []

        for (let c = 0; c < this.state.list.length; c++) {
            for (let i = 0; i < this.state.components.length; i++) {
                if (this.state.list[c].component_id === this.state.components[i].component_id) {
                    tags.push('#' + this.state.components[i].tag_name)
                }
            }

            for(let x=0; x<this.state.screenshots.length; x++){
                if(this.state.list[c].component_id === this.state.screenshots[x].component_id){
                    screenshots.push(this.state.screenshots[x].screenshot)
                }
            }
            components.push({
                id: this.state.list[c].component_id,
                title: this.state.list[c].title,
                tags: JSON.parse(JSON.stringify(tags)),
                screenshots: JSON.parse(JSON.stringify(screenshots))
            })
            tags = []
            screenshots = []
        }
        console.log('components', components)
        this.setState({components : components})
    }

    fillOptions(){
        const options = []
        for(let i=0; i<this.state.options.length; i++){
            options.push({label: this.state.options[i].tag_name, value: this.state.options[i].tag_name})
        }
        this.setState({ options: options })
    }

    fillFilterComponents(){
        if(this.state.filterValue.length < 1) {
            this.setState({filteredComponents: this.state.components})
        } else {
            this.setState({filteredComponents: []})
            const filteredComponents = [];

            for (let j = 0; j < this.state.filterValue.length; j++) {
                for (let i = 0; i < this.state.components.length; i++) {
                    for (let x = 0; x < this.state.components[i].tags.length; x++) {
                        const check = this.state.filterValue.every((el) => {
                            return this.state.components[i].tags.indexOf(el) !== -1
                        });
                        if (check) {
                            filteredComponents.push(this.state.components[i])
                        }
                    }
                }
            }
            this.setState({filteredComponents: [...new Set(filteredComponents)]})
        }
    }

    async handleImportComponents() {
        await updateComponentsTags().then(window.location.reload())
    }


    handleChange(select){
        const filterValue = [];
        select.map((select) => (filterValue.push('#' + select.value)))
        const searchParams = new URLSearchParams();
        searchParams.set("query", filterValue.toString());
        this.props.history.push(`?${searchParams.toString()}`);
        this.setState( this.state.filterValue = filterValue);
        this.fillFilterComponents();
        this.checkURL();
    };

    checkURL(){
        const filterValue = [];
        const URLOptions = [];
        const url = slugify(window.location.href.toString());
        for(let i=0; i<this.state.options.length; i++) {
            if(url.includes(this.state.options[i].value)){
                filterValue.push('#' + this.state.options[i].value)
                URLOptions.push(this.state.options[i])
            }
        }
        this.setState({filterValue:filterValue, URLOptions: URLOptions})
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
                            value={this.state.URLOptions}
                            onChange={(select) => this.handleChange(select)}
                            options={this.state.options}
                        />
                    </div>
                </React.Fragment>
                <div className={s.container}>
                    {this.state.filteredComponents.map((component) => (
                        <div className={s.item} key={component.id}>
                            {/*<Checkbox className={s.logo}/>*/}
                            {/*<img src={require('../../../../public/Bildschirmfoto.png')} alt={'where is it?'}/>*/}
                            <h1 className={s.title}>{component.title}</h1>
                            <h3 className={s.tags}>{component.tags}</h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(ComponentView);
