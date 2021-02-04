import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'

import s from './PageLayout.module.scss'
import MainContent from '../MainContent'

import Header from '../Header'
import Sidebar from '../Sidebar'


function determineViewport() {
  const width = document.documentElement.clientWidth

  if (width < 880) {
    return 'm'
  }

  return 'l'
}

class PageLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isSidebarOpen: true }

    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  componentDidMount() {
    let isSidebarOpen;

    const viewport = determineViewport()

    switch (viewport) {
    case 's':
    case 'm':
      isSidebarOpen = false;
      break;
    default:
      isSidebarOpen = true;
    }

    this.setState({ isSidebarOpen })

    window.document.addEventListener('click:toggleSidebar', this.toggleSidebar)
  }

  componentWillUnmount() {
    window.document.removeEventListener('click:toggleSidebar', this.toggleSidebar)
  }

  toggleSidebar() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    return (
      <div className={s.PageLayout}>
        <Header isSidebarOpen={this.state.isSidebarOpen}/>

        <Sidebar isOpen={this.state.isSidebarOpen}/>
        <MainContent isSidebarOpen={this.state.isSidebarOpen}>
          {this.props.children}
        </MainContent>
      </div>
    )
  }
}

export default withStyles(s)(PageLayout)
