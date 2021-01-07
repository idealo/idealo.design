import React from 'react'
import cn from 'classnames'
import { Link } from "react-router-dom";

import styles from './Sidebar.module.scss'

import ChevronIcon from './ico_chevron_right.svg'
import FoundationsIcon from './ico_foundations.svg'
import ElementsIcon from './ico_elements.svg'
import CompoundsIcon from './ico_components.svg'
import AssetsIcon from './ico_assets.svg'
import OtherIcon from './ico_datasheet_outline.svg'

import * as Elems from 'Data/__generated__elements__'


const sections = [
  {
    icon: 'foundationsIcon',
    title: 'Foundations',
    children: [
      { title: 'Overview', href: '/foundations'},
      { title: 'Colors', href: '/foundations/colors' },
      { title: 'Typography', href: '/foundations/typography' },
    ]
  },
  {
    icon: 'elementsIcon',
    title: 'Elements',
    children: [{ title: 'Overview', href: '/elements/overview' }]
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
      { title: 'Overview', href: '/compounds' },
      { title: 'Header', href: '/compounds/header' },
      { title: 'Footer', href: '/compounds/footer' },
      { title: 'International Prices', href: '/compounds/international-prices' },
    ]
  },
  {
    icon: 'assetsIcon',
    title: 'Assets',
    children: [
      { title: 'Overview', href: '/assets' },
      { title: 'Sketch', href: '/assets/sketch' },
    ]
  },
  {
    icon: 'otherIcon',
    title: 'Other',
    children: [
      { title: 'Scratchpad', href: '/scratchpad' },
    ]
  },
]

function RenderIcon({ name }) {
  switch (name) {
  case 'otherIcon':
    return <OtherIcon className={styles.VerticalNav__TopLevelIcon}/>
  case 'assetsIcon':
    return <AssetsIcon className={styles.VerticalNav__TopLevelIcon}/>
  case 'compoundsIcon':
    return <CompoundsIcon className={styles.VerticalNav__TopLevelIcon}/>
  case 'elementsIcon':
    return <ElementsIcon className={styles.VerticalNav__TopLevelIcon}/>
  case 'foundationsIcon':
    return <FoundationsIcon className={styles.VerticalNav__TopLevelIcon}/>
  default:
    return <span />
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
        <div className={styles.VerticalNav__TopLevel} onClick={() => {
          if (!this.props.isSidebarOpen) {
            const toggleSidebarEvent = new Event('click:toggleSidebar')
            window.document.dispatchEvent(toggleSidebarEvent)
          }

          this.toggleState()
        }}>
        <span>
        {this.props.section.icon &&
         <RenderIcon name={this.props.section.icon} />}
      </span>

      {this.props.isSidebarOpen && (
          <>
          <span className={styles.VerticalNav__TopLevelTitle}>
          {this.props.section.title}
        </span>
          <ChevronIcon style={{transform}} className={styles.VerticalNav__TopLevelAngle} />
          </>)}

      </div>
        <ul style={{ height }}>
        {this.props.section.children && this.props.section.children.map((item, idx) => (
            <Link to={`${item.href}`} key={idx} as={item.href}>
            <li style={{ visibility }}>
            {item.title}
          </li>
            </Link>
        ))}
      </ul>
      </>
    )
  }
}

export class Sidebar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isStickyModel: false,
    }
  }

  componentDidMount() {
    window.addEventListener('Header:enableSticky', () => {
      this.setState({ isStickyMode: true })
    })

    window.addEventListener('Header:disableSticky', () => {
      this.setState({ isStickyMode: false })
    })


  }

  render() {
    const style = {
      width: this.props.isOpen ? '20rem' : '5.5rem',
      top: this.state.isStickyMode ? '3rem' : '',
    }

    return (
        <aside>
        <nav style={style} className={styles.Sidebar}>
        {sections.map((section, idx) => (
            <NavSection isSidebarOpen={this.props.isOpen} key={idx} section={section} />
        ))}
      </nav>
        </aside>
    )
  }
}
