import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './Sidebar.module.scss'

import chevronIcon from './ico_chevron_right.svg'
import foundationsIcon from './ico_foundations.svg'
import elementsIcon from './ico_elements.svg'
import componentsIcon from './ico_components.svg'
import assetsIcon from './ico_assets.svg'
import otherIcon from './ico_datasheet_outline.svg'

import * as Elems from '../../data/__generated__elements__'


const sections = [
  {
    icon: foundationsIcon,
    title: 'Foundations',
    children: [
      { title: 'Overview', href: '/foundations'},
      { title: 'Colors', href: '/foundations/colors' },
      { title: 'Typography', href: '/foundations/typography' },
      // { title: 'Layout', href: '/foundations/layout' },
    ]
  },
  {
    icon: elementsIcon,
    title: 'Elements',
    children: Object.keys(Elems).map(key => {
      const elem = Elems[key]
      return {
        title: elem.title,
        href: `/elements/${elem.slug}`
      }
    }),

    // old static
    // [
    //     { title: 'Overview', href: '/elements' },
    //     { title: 'Button', href: '/elements/button' },
    //     { title: 'Form Input', href: '/elements/form-input' },
    // ]
  },
  {
    icon: componentsIcon,
    title: 'Components',
    children: [
      { title: 'Overview', href: '/components' },
      { title: 'Header', href: '/components/header' },
      { title: 'Footer', href: '/components/footer' },
      { title: 'International Prices', href: '/components/international-prices' },
    ]
  },
  {
    icon: assetsIcon,
    title: 'Assets',
    children: [
      { title: 'Overview', href: '/assets' },
      { title: 'Sketch', href: '/assets/sketch' },
    ]
  },
  {
    icon: otherIcon,
    title: 'Other',
    children: [
      { title: 'Scratchpad', href: '/scratchpad' },
    ]
  },
]


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
          {this.props.section.icon &&
           <img className={styles.VerticalNav__TopLevelIcon} src={this.props.section.icon} />}
          {this.props.isSidebarOpen && (
            <>
              <span className={styles.VerticalNav__TopLevelTitle}>
                {this.props.section.title}
              </span>
              <img style={{transform}} className={styles.VerticalNav__TopLevelAngle} src={chevronIcon}/>
            </>
          )}
        </div>
        <ul style={{ height }}>
          {this.props.section.children && this.props.section.children.map((item, idx) => (
            <Link href='/elements/[element]' shallow={true} as={item.href} key={idx}>
              <li style={{ visibility }}>
                <a>{item.title}</a>
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
