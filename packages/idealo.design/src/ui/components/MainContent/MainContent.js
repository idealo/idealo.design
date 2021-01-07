import React from 'react'
import cn from 'classnames'

// import {GridContainer, GridItem} from '@motif/grid';

import styles from './MainContent.module.scss'

export class MainContent extends React.Component {

  render() {
    const marginLeft = this.props.isSidebarOpen ? '21rem' : '6.5rem';

    return (
      <main style={{marginLeft}} className={styles.MainContent}>
        {this.props.children}
      </main>
    )
  }
}
