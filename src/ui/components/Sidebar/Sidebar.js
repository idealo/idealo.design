import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import {NavLink} from "react-router-dom";

import s from './Sidebar.module.scss'

import ChevronIcon from '../../../../public/ico_chevron_right.svg'
import FoundationsIcon from './ico_foundations.svg'
import ElementsIcon from './ico_elements.svg'
import ComponentsIcon from './ico_components.svg'
import AssetsIcon from './ico_assets.svg'
import OtherIcon from './ico_datasheet_outline.svg'

import AtomsIcon from './atomicons_beta_atom.svg'
import MoleculesIcon from './atomicons_beta_molecule.svg'
import OrganismsIcon from './atomicons_beta_organism.svg'

import { fetchAllCategories, fetchUserInfo } from "../../pages/BlogPage/data"
import { fetchComponents } from "../../pages/LibraryPage/component_data";

function createSections(data) {
    return [
        {
            icon: 'componentsIcon',
            title: 'Component Library',
            href: '/library',
            children: [].concat(Object.keys(data.components).map(key => {
                const component = data.components[key]
                return {
                    title: component.title,
                    href: `/library/${component.slug}#Design`
                }
            }))
        },
        {
            icon: 'otherIcon',
            title: 'Activities',
            href: '/blog',
            children: [{title: 'Blog', href: '/blog'}]
                .concat(Object.keys(data.cats).map(key => {
                    const cat = data.cats[key]
                    return {
                        title: cat.categorydisplayvalue,
                        href: `/blog/categories/${cat.categoryslug}`
                    }
                })),
        },
    ];
}

function RenderIcon({name}) {
    switch (name) {
        case 'otherIcon':
            return <OtherIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'assetsIcon':
            return <AssetsIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'componentsIcon':
            return <ComponentsIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'elementsIcon':
            return <ElementsIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'foundationsIcon':
            return <FoundationsIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'AtomsIcon':
            return <AtomsIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'MoleculesIcon':
            return <MoleculesIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'OrganismsIcon':
            return <OrganismsIcon className={s.VerticalNav__TopLevelIcon}/>

        default:
            return <span/>
    }
}


class NavSection extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isClosed: true,
        }

        this.toggleState = this.toggleState.bind(this)
        this.closeIfOpen = this.closeIfOpen.bind(this)
    }

    componentDidMount() {
        window.document.addEventListener('click:toggleSidebar', this.closeIfOpen)
    }

    componentWillUnmount() {
        window.document.removeEventListener('click:toggleSidebar', this.closeIfOpen)
    }

    closeIfOpen() {
        if (!this.state.isClosed) {
            this.setState({
                isClosed: !this.state.isClosed
            })
        }
    }

    toggleState() {
        this.setState({
            isClosed: !this.state.isClosed
        })
    }

    render() {
        const visibility = this.state.isClosed ? 'hidden' : 'visible'
        const height = this.state.isClosed ? 0 : 'auto'
        const transform = this.state.isClosed ? 'none' : 'rotate(90deg)'

        return (
            <>
                <div className={s.VerticalNav__TopLevel} onClick={() => {
                    if (!this.props.isSidebarOpen) {
                        const toggleSidebarEvent = new Event('click:toggleSidebar')
                        window.document.dispatchEvent(toggleSidebarEvent)
                    }

                    this.toggleState()
                }}>
                    <span>
                        {this.props.section.icon && <RenderIcon name={this.props.section.icon}/>}
                    </span>
                    {this.props.isSidebarOpen && (
                        <>
                            <span className={s.VerticalNav__TopLevelTitle}>
                                <NavLink
                                    className={s.notActive}
                                    to={this.props.section.href || ''}
                                    exact activeClassName={s.active}
                                    as={this.props.section.href}>
                                    {this.props.section.title}
                                </NavLink>
                            </span>
                            <ChevronIcon style={{transform}} className={s.VerticalNav__TopLevelAngle}/>
                        </>)}
                </div>
                <ul style={{height}}>
                    {this.props.section.children && this.props.section.children.map((item, idx) => (
                       <NavLink style={{visibility}} to={`${item.href}`} exact activeClassName={s.active} as={item.href} key={idx}>
                           <li>
                                {item.title}
                           </li>
                       </NavLink>
                    ))}
                </ul>
            </>
        )
    }
}

class Sidebar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isStickyModel: false,
            sections: [],
            components: [],
            user: null
        }

    }

    async componentDidMount() {
        window.addEventListener('Header:enableSticky', () => {
            this.setState({isStickyMode: true})
        })

        window.addEventListener('Header:disableSticky', () => {
            this.setState({isStickyMode: false})
        })

        const cats = await fetchAllCategories();
        this.setState({user: await fetchUserInfo()})
        let components;
        if(this.state.user.user){
            components = await fetchComponents();
            for(const component of components){
                if(component.title.includes("/")){
                    component.title = component.title.split("/")[1]
                }
            }
            this.setState({sections: createSections({cats: cats, components: components})});
        }else{
            this.setState({sections: createSections({cats: cats, components: []})});

        }
    }

    render() {
        const style = {
            width: this.props.isOpen ? '20rem' : '5.5rem',
            top: this.state.isStickyMode ? '3rem' : '',
        }

        return (
            <aside>
                <nav style={style} className={s.Sidebar}>
                    {this.state.sections.map((section, idx) => (
                        <NavSection isSidebarOpen={this.props.isOpen} key={idx} section={section}/>
                    ))}
                </nav>
            </aside>
        )
    }
}

export default withStyles(s)(Sidebar)