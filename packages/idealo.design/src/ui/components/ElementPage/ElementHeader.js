import React from 'react'

import { Link } from 'react-router-dom'

import styles from './ElementHeader.module.scss'


export default class ElementHeader extends React.Component {

  render() {
    if (!this.props.element) return null

    const element = this.props.element

    console.log('ElementHeader element', element)

    const sections = element.sections

    return (
      <div className={styles.ElementHeader}>
        <div className={styles.ElementHeader__Nav}>
          <h1>{element.title}</h1>

          <div className={styles.ElementHeader__NavLinks}>
            {sections
             .filter(section => section.type === 'h2')
             .map((item, idx) => (
               <Link key={idx} href={`#${item.content}`}>
                 <a>{item.content}</a>
               </Link>))}
          </div>
        </div>
      </div>
    )
  }
}
