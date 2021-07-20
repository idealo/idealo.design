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

import * as Elems from './../../../../data/__generated__elements__'
import { fetchDistinctCategories } from "../../pages/BlogPage/data"

function createSections(addedData) {
    const {cats} = addedData;
    return [
        {
            icon: 'foundationsIcon',
            title: 'Foundations',
            children: [
                {title: 'Overview', href: '/foundations'},
                {title: 'Colors', href: '/foundations/colors'},
                {title: 'Typography', href: '/foundations/typography'},
            ]
        },
        {
            icon: 'elementsIcon',
            title: 'Elements',
            children: [{title: 'Overview', href: '/elements/overview'}]
                .concat(Object.keys(Elems).map(key => {
                    const elem = Elems[key]
                    return {
                        title: elem.title,
                        href: `/elements/${elem.slug}`
                    }
                })),
        },
        {
            icon: 'compoundsIcon',
            title: 'Compounds',
            children: [
                {title: 'Overview', href: '/compounds'},
                {title: 'Header', href: '/compounds/header'},
                {title: 'Footer', href: '/compounds/footer'},
                {title: 'International Prices', href: '/compounds/international-prices'},
            ]
        },
        {
            icon: 'componentsIcon',
            title: 'Components',
            children: [
                {title: 'Overview', href: '/components'},
                {title: 'For react stacks', href: '/components/for-react-stacks'},
                {title: 'For classic stacks', href: '/components/for-classic-stacks'},
            ]
        },
        {
            icon: 'otherIcon',
            title: 'Blog',
            children: [{title: 'Overview', href: '/blog'}]
                .concat(Object.keys(cats).map(key => {
                    const cat = cats[key]
                    return {
                        title: cat.categorydisplayvalue,
                        href: `/blog/categories/${cat.categoryslug}`
                    }
                })),
        },
        {
            icon: 'assetsIcon',
            title: 'Assets',
            children: [
                {title: 'Overview', href: '/assets'},
                {title: 'Sketch', href: '/assets/sketch'},
            ]
        },
        {
            icon: 'otherIcon',
            title: 'Other',
            children: [
                {title: 'Scratchpad', href: '/scratchpad'},
            ]
        },
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
            sections: []
        }
    }

    async componentDidMount() {
        window.addEventListener('Header:enableSticky', () => {
            this.setState({isStickyMode: true})
        })

        window.addEventListener('Header:disableSticky', () => {
            this.setState({isStickyMode: false})
        })

        const cats = await fetchDistinctCategories();
        this.setState({sections: createSections({cats})});
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
