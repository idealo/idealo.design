import React from 'react'
import content from './content.json'

function RenderElement(props) {
    const elem = props.elem

    switch (elem.type) {
        case 'p':
            return <p dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h1':
            return <h1 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h3':
            return <h3 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h4':
            return <h4 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'h5':
            return <h5 dangerouslySetInnerHTML={{__html: elem.content}}/>
        case 'img':
            return <img src={elem.src}/>
    }
}

export default function WelcomePage() {

    const {elements} = content

    return (
        <>
            {elements.map((elem, idx) => <RenderElement key={idx} elem={elem}/>)}
        </>
    )
}
