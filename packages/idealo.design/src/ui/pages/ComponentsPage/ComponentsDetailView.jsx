import React from 'react'

import s from './ComponentsPage.module.scss'

import {withRouter} from "react-router";
import {fetchSingleComponent} from "./component_data";

const mockDaten = {
    title: 'Button',
    screenshot: 'https://917999261651-idealo-design-assets.s3.eu-central-1.amazonaws.com/screenshots/motif-ui/Bildschirmfoto+2021-05-28+um+14.20.34.png',
    installation : 'yarn add @motif/button',
    usage: 'import { Button } from \'@motif/button\';',
    storysource: '<styled.div>\n' +
        '<Button onClick={action} gtmEvent="storybook.click" gtmPayload="{"event_category":"navigation","event_action":"but…">\n' +
        'Primary\n' +
        '</Button>\n' +
        '<Button color="secondary" onClick={action}>\n' +
        'Secondary\n' +
        '</Button>\n' +
        '<Button color="shop" onClick={action}>\n' +
        'Shop\n' +
        '</Button>\n' +
        '<Button href="http://www.idealo.de">\n' +
        'Link\n' +
        '</Button>\n' +
        '</styled.div>',
    proptypes: '"" Component\n' +
        'No propTypes defined!\n' +
        '"Button" Component\n' +
        'property\tpropType\trequired\tdefault\tdescription\n' +
        'size\tunknown\t-\tS\t\n' +
        'color\tunknown\t-\tprimary\t\n' +
        'disabled\tunknown\t-\tfalse\t\n' +
        'hollow\tunknown\t-\tfalse\t\n' +
        '"StyledComponent" Component\n' +
        'No propTypes defined!',
}


export class ComponentsDetailView extends React.Component {

    constructor(props) {
        super(props);
        const {history} = props;
        this.state = {
            history: history,
            component: {},
            title: '',
        }
    }
    async componentDidMount() {
        const slug = this.props.match.params.slug
        if(slug){
             this.setState({
                 component: await fetchSingleComponent({slug})
            })
            this.setState({
                title: this.state.component.component[0].title
            })
        }
    }

    render() {
        return (
            <div>
                <div className={s.headerNav}>
                    <h1>{this.state.title}</h1>
                    <p>----------------------------</p>
                    <ul>
                        <li><a href='#Design'>Design</a></li>
                        <li><a href="#Installation">Installation</a></li>
                        <li><a href="#Usage">Usage</a></li>
                        <li><a href="#Story Source">Story Source</a></li>
                        <li><a href="#Prop Types">Prop Types</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(ComponentsDetailView);

