import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import s from './Card.module.scss'

class Card extends React.Component {

    render() {
        return (
            <div className={s.Card}>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(s)(Card)
