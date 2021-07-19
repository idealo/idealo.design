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
        for (let item of this.state.list) {
            for (let component of this.state.components) {
                if (item.component_id === component.component_id) {
                    tags.push('#' + component.tag_name)
                }
            }
            components.push({
                id: item.component_id,
                title: item.title,
                tags: JSON.parse(JSON.stringify(tags))
            })
            tags = []
        }
        for (let component of components) {
            for (let tag of component.tags) {
                if(tag === '#react'){
                    reactComponents.push(component);
                }
            }
        }
        for (let component of components) {
            for (let reactComponent of reactComponents) {
                if(components.component === reactComponents.reactComponent){
                    components.splice(component,1);
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
                            <h1 className={s.title}>{component.title}</h1>
                            <h3 className={s.tags} >{component.tags}</h3>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(ClassicStackView);
