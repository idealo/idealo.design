import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Checkbox } from '../../../../public/Checkbox.svg';
import Select from 'react-select';
import {fetchTags, fetchMap, fetchComponents} from "./component_data";


class ClassicStackView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            components: [],
            filteredComponents: [],
            list: []
        }
    }

    async componentDidMount() {
        this.setState({components : await fetchMap(), list: await fetchComponents()})
        this.fillComponents();
        this.fillFilterComponents();
    }

    fillComponents(){
        const components = []
        const react = []
        let tags = []

        for (let c = 0; c < this.state.list.length; c++) {
            for (let i = 0; i < this.state.components.length; i++) {
                if (this.state.list[c].component_id === this.state.components[i].component_id) {
                    tags.push('#' + this.state.components[i].tag_name)
                }
            }
            for (let l = 0; l < tags.length; l++){
                if(tags[l] === '#react'){
                    react.push({
                        id: this.state.list[c].component_id,
                        title: this.state.list[c].title,
                        tags: JSON.parse(JSON.stringify(tags))
                    })
                }
            }
            tags = []
        }
        for (let c = 0; c < this.state.list.length; c++) {
            for (let i = 0; i < this.state.components.length; i++) {
                if (this.state.list[c].component_id === this.state.components[i].component_id) {
                    tags.push('#' + this.state.components[i].tag_name)
                }
            }
            for( let l = 0; l < react.length; l++){
                if(this.state.list[c].component_id !== react[l].component_id){
                    console.log('🎂🎂', react);
                    components.push({
                        id: this.state.list[c].component_id,
                        title: this.state.list[c].title,
                        tags: JSON.parse(JSON.stringify(tags))
                    })
                    console.log(console.log('🚥', components));
                    console.log(console.log('⚽️', this.state.list));
                }
            }
            tags = []
        }
        this.setState({components : components})
    }

    render() {
        return (
            <div>
                <div className={s.container}>
                    {this.state.components.map((component) =>(
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

export default withRouter(ClassicStackView);
