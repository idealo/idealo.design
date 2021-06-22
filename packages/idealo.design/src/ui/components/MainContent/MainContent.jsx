import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'

import s from './MainContent.module.scss'

class MainContent extends React.Component {

    render() {
        const marginLeft = this.props.isSidebarOpen ? '21rem' : '6.5rem';

        return (
            <main style={{marginLeft}} className={s.MainContent}>
                {this.props.children}
            </main>
        )
    }
}

export default withStyles(s)(MainContent)
