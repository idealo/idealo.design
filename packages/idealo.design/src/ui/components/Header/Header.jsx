import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import {Link} from "react-router-dom"

import s from './Header.module.scss'

import BtnIco from './ico_hamburger.svg'

import {getElementBySlug} from '../../../../data/elements'
import {default as Search} from '../Header/Search'

class StickyMenu extends React.Component {

    render() {
        const element = getElementBySlug('button')

        const style = {
            marginLeft: this.props.isSidebarOpen ? '17rem' : '2.5rem'
        }

        return (
            <div style={style} className={s.StickyMenu}>
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


class Header extends React.Component {

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
            let isEscape = false;
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
        this.setState({isSidebarOpen: !this.state.isSidebarOpen})
    }

    enableSticky() {
        this.setState({isStickyMode: true})
    }

    disableSticky() {
        this.setState({isStickyMode: false})
    }

    closeSearchInput() {
        this.setState({isSearchInputOpen: false})
    }

    openSearchInput() {
        this.setState({isSearchInputOpen: true})
    }

    toggleSearchInput() {
        this.setState({isSearchInputOpen: !this.state.isSearchInputOpen})
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
            <header style={this.state.isStickyMode ? stickyStyle : null} className={s.Header}>
                <BtnIco className={s.SideNavToggle} onClick={this.toggleNavbarState}/>

                <h1 style={this.state.isStickyMode ? {display: 'none'} : null}>
                    <Link style={this.state.isStickyMode ? logoStickyStyle : null} to="/">
                        <span style={{borderBottom: '1px solid orange'}}>idealo</span> <b>Design System</b>
                    </Link>
                </h1>

                <StickyMenu isSidebarOpen={this.state.isSidebarOpen} active={this.state.isStickyMode}/>

                <Search
                    onClick={this.toggleSearchInput}
                    closeSearchInput={this.closeSearchInput}
                    isOpen={this.state.isSearchInputOpen}/>
            </header>
        )
    }
}

export default withStyles(s)(Header)
