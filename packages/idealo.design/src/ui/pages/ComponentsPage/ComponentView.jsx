import React from "react";
import {withRouter} from "react-router";
import s from './ComponentsPage.module.scss';
import { ReactComponent as Logo } from '../../../../public/logo.svg';
import { Dropdown } from 'react-dropdown-now';
//import { Multiselect } from 'multiselect-react-dropdown';

const components = [
    {
        id: 1,
        name: 'Radio Button',
        tagImport: '#motive-ui',
        tagStacks: '#react'
    },
    {
        id: 2,
        name: 'Select',
        tagImport: '#motive-ui',
        tagStacks: '#react'
    },
    {
        id: 3,
        name: 'Radio Button',
        tagImport: '#motive-ui',
        tagStacks: '#classic'
    },
    {
        id: 4,
        name: 'Radio Button',
        tagImport: '#figma',
        tagStacks: '#react'
    },
    {
        id: 5,
        name: 'Select',
        tagImport: '#figma',
        tagStacks: '#react'
    },
    {
        id: 6,
        name: 'Radio Button',
        tagImport: '#figma',
        tagStacks: '#classic'
    },
];

class ComponentView extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            filterValue: 'All Technology',
            components : [],
            //selectedValue : '',
            //options: ['All Technology','#react', '#classic'],
        }
    }

    async componentDidMount() {
        this.setState(
            this.state.components = components,
        )
    }

    setFilter(select) {
        this.setState( this.state.filterValue = select);
    }

    render() {
        return (
            <div>
                <div className={s.dropdown}>
                    <Dropdown
                        placeholder="All Technology"
                        options={['All Technology','#react', '#classic']}
                        value='All Technology'
                        onChange={(value) => this.setFilter(value)}
                        onSelect={(value) => console.log('selected!', value)}
                        onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    />
                </div>
                {/*<div>
                    <Multiselect
                        options={this.state.options} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                    />
                </div>*/}
                <div className={s.container}>
                    {this.state.filterValue.value === 'All Technology' || this.state.filterValue=== 'All Technology' ?
                        this.state.components.map((components) => (
                            <div className={s.item} key={components.id}>
                                <Logo className={s.logo}/>
                                <h2>{components.name}</h2>
                                <p className={s.tags}>{components.tagImport}&nbsp;&nbsp;&nbsp;{components.tagStacks}</p>
                            </div>
                        )) :
                        this.state.components.filter(components => components.tagStacks === this.state.filterValue.value).map((components) => (
                            <div className={s.item} key={components.id}>
                                <Logo className={s.logo}/>
                                <h2>{components.name}</h2>
                                <div>
                                    <p className={s.tags}>{components.tagImport}&nbsp;&nbsp;&nbsp;{components.tagStacks}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(ComponentView);
