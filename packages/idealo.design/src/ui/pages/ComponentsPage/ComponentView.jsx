import React from "react";
import {Route, Router, withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Checkbox } from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import { fetchComponents, fetchTags, fetchMap } from "./component_data";
import slugify from "slugify";

function getParams(location) {
    const searchParams = new URLSearchParams(location.search);
    return {
        query: searchParams.get('query') || '',
    };
}

//const params = getParams('www.first-contrib.fr?query=react');

//console.log(params);

const MainPage = (props) => {
    const { location } = props;
    const { query } = getParams(location);

    return (
        <h2>{`My query: ${query}`}</h2>
    );
}

function setParams({ query = ""}) {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);
    return searchParams.toString();
}

//const url = setParams({ query: "javascript" });
//console.log(url); // "query=javascript"

class ComponentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: [],
            components: [],
            options: [],
            filteredComponents: [],
            //sections: []
        }
    }

    async componentDidMount() {
        this.setState({components : await fetchMap(), options: await fetchTags()})
        this.fillComponents();
        this.fillOptions();
        this.fillFilterComponents();
        this.setURL();
        console.log('window location href',window.location.href);
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

/*    selectURL(value) {
        this.setFilter(value)
        let path = 'tags=';
        for(let j=0; j<this.state.filterValue.length-1; j++) {
            path+=this.state.filterValue[j]+','
        }
        path+=this.state.filterValue[this.state.filterValue.length-1]
        return path;
        // const url = <a href={`/components?${path}`}>otter</a>;

    };

    createURLs(value) {
        this.setFilter(value)
        //const urls = value;
        return [
            {
                title: 'Components',
                children: [
                    { title: 'Overview', href: '/components' }]
                    .concat(this.state.filterValue.map(value => {
                        const url = value
                        console.log('url', url);
                        return {
                            title: url,
                            href: `/components?${url}`
                        }
                    }))
            }
        ]
    }*/

    /*state = { inputValue: "" };

    updateInputValue = e => this.setState({ inputValue: e.target.value });*/

    updateInputValue = e => this.setState({ value: e.target.filterValue });

    updateURL = (value) => {
        this.setFilter(value)
        const url = setParams({ query: this.state.filterValue });
        console.log('url', url);
        this.props.history.push(`?${url}`);
        //this.setState({url: window.location.href});
    };


    setURL(){
        const filterValue = [];
        let hallo = [];
        const url = window.location.href;
        for(let i=0; i<this.state.options.length; i++){
            const obj = JSON.parse(this.state.options[i]);
            console.log('this.state.options[i]', this.state.options[i]);
            console.log('obj', obj);
            //hallo = this.state.options[i].obj;
        }

        //console.log('hallo', hallo);

        // Store JSON data in a JS variable var json =
        // '{"name": "Peter", "age": 22, "country": "United States"}';
        // Converting JSON-encoded string to JS object
        // var obj = JSON.parse(json);
        // Accessing individual value from JS object alert(obj.name);
        // Outputs: Peter alert(obj.age);
        // Outputs: 22 alert(obj.country);
        // Outputs: United States

        const obj = JSON.parse(this.state.options);
        console.log('obj', obj);

        //const optionsb  = [slugify(JSON.parse(this.state.options)).replace('#', '')];
        //const url = slugify(window.location.href.toString()).replace('%23', 'hallo');
        console.log('href to string:', url);
        console.log('optionsb', optionsb);
        for(let j=0; j<optionsb.length; j++){
            if(url.includes(optionsb[j])){
                console.log('it works');
            }
            /*if(slugify(window.location.href).includes(slugify(this.state.options[j]).replace('%23', '#'))){
                console.log('lnfljsadnla', this.state.options[j].replace('%23', '#'));
                filterValue.push(this.state.options[j]);
            }*/
        }
        this.setState({filterValue: filterValue});
        console.log('filterValue', filterValue);
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className={s.multiselect} >
                        <Select
                            isMulti
                            defaultValue={this.state.filterValue}
                            options={this.state.options}
                            className="basic-multi-select"
                            onChange={(value) => this.updateURL(value)}
                            classNamePrefix="select"
                        />
                    </div>
                    {/*<input
                        type="text"
                        placeholder="Change your URL !"
                        value={this.state.inputValue}
                        onChange={this.updateInputValue}
                    />
                    <input
                        type="button"
                        className="button"
                        value="Update the URL !"
                        onClick={this.updateURL}
                    />*/}
                </React.Fragment>
                {/*<h5>
                    <a href={`/components?${this.selectURL()}`}>click me</a>
                </h5>*/}
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
