import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'

import { Link } from 'react-router-dom'

import s from './ElementHeader.module.scss'


class ElementHeader extends React.Component {

  render() {
    if (!this.props.element) return null

    const element = this.props.element

    return (
      <div className={s.ElementHeader}>
        <div className={s.ElementHeader__Nav}>
          <h1>{element.title}</h1>

          <div className={s.ElementHeader__NavLinks}>
            {element.body.sections.map((item, idx) => (
              <Link key={idx} href={`#${item.title}`}><a>{item.title}</a></Link>))}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(ElementHeader)
