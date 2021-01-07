import React from 'react'

import Link from 'next/link'

import Highlight from 'react-highlight'

import Card from 'components/Card'

import styles from 'components/ElementHeader/ElementBody.module.scss'


const RenderElement = () => {
    return 'OOPS. SOMETHING WENT WRONG'
}

export default class ElementBody extends React.Component {

    constructor(props) {
        super(props)

        this.emitStickyEvent = this.emitStickyEvent.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.emitStickyEvent)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.emitStickyEvent)
    }

    emitStickyEvent() {
        const y = window.scrollY || window.pageYOffset

        if (y > 150) {
            const enableSticky = new Event('Header:enableSticky')
            window.dispatchEvent(enableSticky)
        } else {
            const disableSticky = new Event('Header:disableSticky')
            window.dispatchEvent(disableSticky)
        }
    }

    render() {
        if (!this.props.element) return null

        const element = this.props.element
        const sections = element.body.sections

        const style = {
            display: 'block',
            position: 'relative',
            top: '-7rem',
            visibility: 'hidden',
        }

        return (
            <div className={styles.ElementBody}>
              {sections.map((section, idx) => (
                  <Card key={idx}>
                    <section>
                      <a name={section.title} style={style}/>
                      <h2>{section.title}</h2>
                      {/* <RenderElement /> */}
                      {/* <div dangerouslySetInnerHTML={{ __html: section.content }} /> */}
                    </section>
                  </Card>
              ))}
            </div>
        )
    }
}
