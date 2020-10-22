import React from 'react'
import Link from 'next/link'

import styles from './Header.module.scss'
import btnIco from './ico_hamburger.svg'
import magnifierIco from './ico_search.svg'
import closeIco from './ico_cross_circle_outline.svg'

import {getElementBySlug} from '../../data/elements'


class Search extends React.Component {

    constructor(props) {
        super(props)

        this.handleOnKeyUp = this.handleOnKeyUp.bind(this)
    }

    componentDidMount() {
        window.document.addEventListener('keyup', this.handleOnKeyUp)
    }

    componentWillUnmount() {
        window.document.removeEventListener('keyup', this.handleOnKeyUp)
    }

    handleOnKeyUp(event) {
        if (event.ctrlKey && event.which == 70) {
            this.props.onClick()
        }
    }

    render() {
        const searchInputStyle = {
            visibility: this.props.isOpen ? 'visible' : 'hidden',
            width: this.props.isOpen ? '40vw' : 0,
            padding: this.props.isOpen ? '.5rem' : 0,
            margin: this.props.isOpen ? 'auto 2rem auto auto' : 0,
        }

        return (
            <>
              <input
                style={searchInputStyle}
                className={styles.SearchInput}
                onTransitionEnd={event => {
                    event.persist()
                    event.target.focus()
                    event.target.value = ''
                }}
                autoFocus />

              <img
                className={styles.SearchToggle}
                onClick={this.props.onClick}
                src={this.props.isOpen ? closeIco : magnifierIco}/>
            </>
        )
    }
}

class StickyMenu extends React.Component {

    render() {
        const element = getElementBySlug('button')

        const style = {
            marginLeft: this.props.isSidebarOpen ? '17rem' : '2.5rem'
        }

        return (
            <div style={style} className={styles.StickyMenu}>
              {this.props.active && (
                  <>
                    {element.sections && element.sections
                     .filter(section => section.type === 'h2')
                     .map((section, idx) => (
                         <a key={idx} href={`#${section.content}`}>{section.content}</a>
                    ))}
                  </>
              )}
            </div>
        )
    }
}


export class Header extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isSearchInputOpen: false,
            isStickyMode: false,
            isSidebarOpen: true,
        }

        this.toggleNavbarState = this.toggleNavbarState.bind(this)
        this.openSearchInput = this.openSearchInput.bind(this)
        this.closeSearchInput = this.closeSearchInput.bind(this)
        this.toggleSearchInput = this.toggleSearchInput.bind(this)
        this.enableSticky = this.enableSticky.bind(this)
        this.disableSticky = this.disableSticky.bind(this)
        this.toggleSidebar = this.toggleSidebar.bind(this)
    }

    componentDidMount() {
        window.addEventListener('Header:enableSticky', this.enableSticky)
        window.addEventListener('Header:disableSticky', this.disableSticky)
        window.document.addEventListener('click:toggleSidebar', this.toggleSidebar)

        document.onkeydown = evt => {
            evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key === "Escape" || evt.key === "Esc");
            } else {
                isEscape = (evt.keyCode === 27);
            }
            if (isEscape) {
                this.closeSearchInput()
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('Header:enableSticky', this.enableSticky)
        window.removeEventListener('Header:disableSticky', this.disableSticky)
        window.document.removeEventListener('click:toggleSidebar', this.toggleSidebar)
    }

    toggleSidebar() {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
    }

    enableSticky() {
        this.setState({ isStickyMode: true })
    }

    disableSticky() {
        this.setState({ isStickyMode: false })
    }

    closeSearchInput() {
        this.setState({ isSearchInputOpen: false })
    }

    openSearchInput() {
        this.setState({ isSearchInputOpen: true })
    }

    toggleSearchInput() {
        this.setState({ isSearchInputOpen: !this.state.isSearchInputOpen })
    }

    toggleNavbarState() {
        const toggleEvent = new Event('click:toggleSidebar')
        window.document.dispatchEvent(toggleEvent)
    }

    render() {
        const stickyStyle = {
            backgroundColor: '#0A3761',
            color: '#0A3761',
            padding: '.5rem 0',
        }

        const logoStickyStyle = {
            color: '#0A3761'
        }

        return (
            <header style={this.state.isStickyMode ? stickyStyle : null} className={styles.Header}>
              <img className={styles.SideNavToggle} src={btnIco} onClick={this.toggleNavbarState} />
              <h1 style={this.state.isStickyMode ? { display: 'none' } : null}>
                <Link href="/">
                  <a style={this.state.isStickyMode ? logoStickyStyle : null}>
                    idealo design system
                  </a>
                </Link>
              </h1>

              <StickyMenu isSidebarOpen={this.state.isSidebarOpen} active={this.state.isStickyMode} />

              <Search
                onClick={this.toggleSearchInput}
                closeSearchInput={this.closeSearchInput}
                isOpen={this.state.isSearchInputOpen} />
            </header>
        )
    }
}
