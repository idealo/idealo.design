import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'


import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {twilight} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Card from 'Components/Card'

import s from './ElementBody.module.scss'

// import {Preview as RenderPreview} from './Preview'


function H1(section) {
    return (
        <>
            <h1>{section.content}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: section.content }} /> */}
        </>
    );
}

function H2(section) {
    return (
        <a name={section.content}>
            <h2>
                {section.content}
            </h2>
        </a>
    );
}

function P(section) {
    return <p dangerouslySetInnerHTML={{__html: section.content}}/>;
}

function Code(section) {
    let lang = 'basic'

    if (section.lang === 'js') lang = 'javascript'
    if (section.lang === 'bash') lang = 'bash'
    if (section.lang === 'css') lang = 'scss'
    if (section.lang === 'html') lang = 'html'

    const customStyle = {
        border: 0,
        borderRadius: 0,
    }

    return (
        <>
            <SyntaxHighlighter language={lang} customStyle={customStyle} style={twilight} showLineNumbers>
                {section.content}
            </SyntaxHighlighter>
        </>
    );

}

class ElementBody extends React.Component {

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
        const sections = element.sections

        console.log('ElementBody element', element)

        const style = {
            display: 'block',
            position: 'relative',
            top: '-7rem',
            visibility: 'hidden',
        }

        return (
            <div className={s.ElementBody}>
                <Card>
                    {/* <RenderPreview /> */}

                    <section>
                        {sections.map((section, idx) => (
                            <div key={idx}>
                                {section.type === 'h1' && H1(section)}
                                {section.type === 'h2' && H2(section)}
                                {section.type === 'p' && P(section)}
                                {section.type === 'code' && Code(section)}
                            </div>
                        ))}
                    </section>
                </Card>
            </div>
        )
    }
}

export default withStyles(s)(ElementBody)
