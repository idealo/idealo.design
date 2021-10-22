import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import {Link} from "react-router-dom";

import s from './Sidebar.module.scss'

import ChevronIcon from '../../../../public/ico_chevron_right.svg'
import FoundationsIcon from './ico_foundations.svg'
import ElementsIcon from './ico_elements.svg'
import CompoundsIcon from './ico_components.svg'
import ComponentsIcon from './ico_components.svg'
import AssetsIcon from './ico_assets.svg'
import OtherIcon from './ico_datasheet_outline.svg'

import AtomsIcon from './atomicons_beta_atom.svg'
import MoleculesIcon from './atomicons_beta_molecule.svg'
import OrganismsIcon from './atomicons_beta_organism.svg'

import { fetchAllCategories } from "../../pages/BlogPage/data"
import { fetchComponents } from "../../pages/LibraryPage/component_data";
import { fetchUserInfo } from "../../pages/BlogPage/data";

function createSections(catsData, componentsData) {
    const {cats} = catsData;
    let components;
    if(componentsData){
        components = componentsData;
    }else {
        components = []
    }

    return [
      /*  {
            icon: 'foundationsIcon',
            title: 'Foundations',
            children: [
                {title: 'Overview', href: '/foundations'},
                {title: 'Colors', href: '/foundations/colors'},
                {title: 'Typography', href: '/foundations/typography'},
            ]
        },*/
        /*{
            icon: 'AtomsIcon',
            title: 'Atoms',
            children: [{title: 'Overview', href: '/atoms/overview'}]
                // .concat(Object.keys(Elems).map(key => {
                //     const elem = Elems[key]
                //     return {
                //         title: elem.title,
                //         href: `/atoms/${elem.slug}`
                //     }
                // })),
        },*/
        /*{
            icon: 'MoleculesIcon',
            title: 'Molecules',
            children: [
                {title: 'Overview', href: '/molecules'},
                // {title: 'Header', href: '/compounds/header'},
                // {title: 'Footer', href: '/compounds/footer'},
                // {title: 'International Prices', href: '/compounds/international-prices'},
            ]
        },*/
        /*{
            icon: 'OrganismsIcon',
            title: 'Organisms',
            children: [
                {title: 'Overview', href: '/organisms'},
                // {title: 'Header', href: '/compounds/header'},
                // {title: 'Footer', href: '/compounds/footer'},
                // {title: 'International Prices', href: '/compounds/international-prices'},
            ]
        },*/
        {
            icon: 'componentsIcon',
            title: 'Component Library',
            children: [
                {title: 'Overview', href: '/library'},
                /*{title: 'For react stacks', href: '/library/for-react-stacks'},
                {title: 'For classic stacks', href: '/library/for-classic-stacks'},*/
            ].concat(Object.keys(components).map(key => {
                const component = components[key]
                return {
                    title: component.title,
                    href: `/library/${component.slug}`
                }
            }))
        },
        {
            icon: 'otherIcon',
            title: 'Activities',
            children: [{title: 'Blog', href: '/blog'}]
                .concat(Object.keys(cats).map(key => {
                    const cat = cats[key]
                    return {
                        title: cat.categorydisplayvalue,
                        href: `/blog/categories/${cat.categoryslug}`
                    }
                })),
        },
    /*    {
            icon: 'assetsIcon',
            title: 'Assets',
            children: [
                {title: 'Overview', href: '/assets'},
                {title: 'Sketch', href: '/assets/sketch'},
            ]
        },*/
        /*{
            icon: 'otherIcon',
            title: 'Other',
            children: [
                {title: 'Scratchpad', href: '/scratchpad'},
            ]
        },*/
    ];
}

function RenderIcon({name}) {
    switch (name) {
        case 'otherIcon':
            return <OtherIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'assetsIcon':
            return <AssetsIcon className={s.VerticalNav__TopLevelIcon}/>
        case 'compoundsIcon':
            return <CompoundsIcon className={s.VerticalNav__TopLevelIcon}/>
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
        {this.props.section.icon &&
        <RenderIcon name={this.props.section.icon}/>}
      </span>

                    {this.props.isSidebarOpen && (
                        <>
          <span className={s.VerticalNav__TopLevelTitle}>
          {this.props.section.title}
        </span>
                            <ChevronIcon style={{transform}} className={s.VerticalNav__TopLevelAngle}/>
                        </>)}

                </div>
                <ul style={{height}}>
                    {this.props.section.children && this.props.section.children.map((item, idx) => (
                        <Link to={`${item.href}`} key={idx} as={item.href}>
                            <li style={{visibility}}>
                                {item.title}
                            </li>
                        </Link>
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
            this.setState({sections: createSections({cats}, components)});
        }else{
            this.setState({sections: createSections({cats})});

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
