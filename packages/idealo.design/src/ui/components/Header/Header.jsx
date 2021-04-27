import React, {useReducer} from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Link } from "react-router-dom";

import s from './Header.module.scss'

import BtnIco from './ico_hamburger.svg'
import MagnifierIco from './ico_search.svg'
import CloseIco from './ico_cross_circle_outline.svg'
import GithubLogo from './github.svg'

import {getElementBySlug} from 'Data/elements'

import { fetchUserInfo } from "../../pages/BlogPage/data";



class Search extends React.Component {

  constructor(props) {
    super(props)

    this.handleOnKeyUp = this.handleOnKeyUp.bind(this)

    this.state = {
      isLoggedIn: false,
      userInfo: {},
      displayName: '',
      surname: '',
      initialString: ''
    }

  }


  async componentDidMount() {
    window.document.addEventListener('keyup', this.handleOnKeyUp)

    const userInfo = await fetchUserInfo()
    this.setState({userInfo})
    let icon = []
    this.state.displayName = userInfo.user['displayName'].charAt(0).toUpperCase();
    this.state.surname = userInfo.user['surname'].charAt(0).toUpperCase();
    icon[0] = this.state.displayName;
    icon[1] = this.state.surname;
    const initialString = this.state.displayName + this.state.surname;
    this.setState({initialString})


  }

  componentWillUnmount() {
    window.document.removeEventListener('keyup', this.handleOnKeyUp)
  }

  handleOnKeyUp(event) {
    if (event.ctrlKey && event.which == 70) {
      this.props.onClick()
    }
  }

 /* async drawIcon() {
    if (data.message === 'LOGGED_IN') {
      this.setState({isLoggedIn: true && 'LOGGED_IN'})

    }
    else return data;
  }
*/

  render() {
    const searchInputStyle = {
      visibility: this.props.isOpen ? 'visible' : 'hidden',
      width: this.props.isOpen ? '40vw' : 0,
      padding: this.props.isOpen ? '.5rem' : 0,
      margin: this.props.isOpen ? 'auto 2rem auto auto' : 0,
    }


    const isLoggedIn = this.state.userInfo.status
    if (isLoggedIn === 'LOGGED_IN') {
      this.state.isLoggedIn = true;
    }
    else {
      this.state.isLoggedIn = false;
    }

    const initialsStyle = {

      visibility: isLoggedIn === "LOGGED_IN" ? 'visible' : 'hidden',
      width: isLoggedIn === "LOGGED_IN" ? '50px' : 0,
      height: isLoggedIn === "LOGGED_IN" ? '50px' : 0,
      padding: isLoggedIn === "LOGGED_IN" ? '.5rem' : 0,
      margin:  isLoggedIn === "LOGGED_IN" ? 'auto 2rem auto auto' : 0,
      borderRadius: isLoggedIn === "LOGGED_IN" ? '25px' : 0,
      backgroundColor: isLoggedIn === "LOGGED_IN" ? 'gray' : 'transparent',
      color: isLoggedIn === 'LOGGED_IN' ? 'white' : 'transparent',}
      console.log('loggendIn', this.state.isLoggedIn);
      console.log('initialString', (this.state.initialString))

    return (
        <>
          <input
              style={searchInputStyle}
              className={s.SearchInput}
              onTransitionEnd={event => {
                event.persist()
                event.target.focus()
                event.target.value = ''
              }}
              autoFocus/>

          {this.props.isOpen ?
              <CloseIco className={s.SearchToggle} onClick={this.props.onClick}/> :
              <MagnifierIco className={s.SearchToggle} onClick={this.props.onClick}/>}
          {/*<a href="https://github.com/idealo/nwp">
          <GithubLogo  className={s.githubLogo}/>
</a>
    */}


          {this.state.isLoggedIn ?
              <button style={initialsStyle}>{this.state.initialString}</button> :
              <a href="/auth/provider">Log In</a>


          }

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
      <header style={this.state.isStickyMode ? stickyStyle : null} className={s.Header}>
        <BtnIco className={s.SideNavToggle} onClick={this.toggleNavbarState}/>

        <h1 style={this.state.isStickyMode ? { display: 'none' } : null}>
          <Link style={this.state.isStickyMode ? logoStickyStyle : null} to="/">
            <span style={{borderBottom: '1px solid orange'}}>idealo</span> <b>Design System</b>
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

export default withStyles(s)(Header)
