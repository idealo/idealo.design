import React from 'react'

import styles from './Card.module.scss'

export class Card extends React.Component {

    render() {
        return (
            <div className={styles.Card}>
              {this.props.children}
            </div>
        )
    }
}
