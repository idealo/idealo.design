import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Checkbox } from '../../../../public/Checkbox.svg';
import {fetchMap, fetchComponents} from "./component_data";


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
    }

    fillComponents(){
        const components = []
        let tags = []
        const reactComponents = []
        for (let c = 0; c < this.state.list.length; c++) {
            for (let i = 0; i < this.state.components.length; i++) {
                if (this.state.list[c].component_id === this.state.components[i].component_id) {
                    tags.push('#' + this.state.components[i].tag_name)
                }
            }
            components.push({
                id: this.state.list[c].component_id,
                title: this.state.list[c].title,
                tags: JSON.parse(JSON.stringify(tags))
            })
            tags = []
        }
        for (let i = 0; i < components.length; i++) {
            for (let j = 0; j < components[i].tags.length; j++) {
                if(components[i].tags[j] === '#react'){
                    reactComponents.push(components[i]);
                }
            }
        }
        for (let c = 0; c < components.length; c++) {
            for (let i = 0; i < reactComponents.length; i++) {
                if(components[c] === reactComponents[i]){
                    components.splice(c,1);
                }

            }
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
                            <h1 className={s.h1}>{component.title}</h1>
                            <h3 className={s.tags} >{component.tags}</h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(ClassicStackView);
