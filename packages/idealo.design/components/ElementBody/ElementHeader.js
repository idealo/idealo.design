import React from 'react'

import Link from 'next/link'

import styles from 'components/ElementHeader/ElementHeader.module.scss'


export default class ElementHeader extends React.Component {

    render() {
        if (!this.props.element) return null

        const element = this.props.element

        return (
            <div className={styles.ElementHeader}>
              <div className={styles.ElementHeader__Nav}>
                <h1>{element.title}</h1>

                <div className={styles.ElementHeader__NavLinks}>
                  {element.body.sections.map((item, idx) => (
                      <Link key={idx} href={`#${item.title}`}><a>{item.title}</a></Link>))}
                </div>
              </div>
            </div>
        )
    }
}
