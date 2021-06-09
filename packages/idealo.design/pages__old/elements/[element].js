import React from 'react'

import ElementPage from 'components/ElementPage'
import Router, { withRouter, useRouter } from 'next/router'

import {getElementBySlug} from 'data/elements'

// const element = getElementBySlug('button')

export async function getStaticProps({ params }) {
    console.log('getStaticProps', params)

    return {
        props: {
            id: 12345,
        }
    }
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    console.log('getStaticPaths called')
}


// class ElementPageView extends React.Component {

//     constructor(props) {
//         super(props)

//         console.log('ElementPageView constructor props', props)

//         this.state = {
//             element: null
//         }

//         this.handleRouteChange = this.handleRouteChange.bind(this)
//     }

//     componentDidMount() {
//         const { elementName } = this.props.router.query

//         console.debug('elementPageView:componentDidMount this.props.router', this.props.router)

//         this.setState({
//             element: getElementBySlug(elementName)
//         })

//         Router.events.on('routeChangeStart', this.handleRouteChange)
//     }

//     componentWillUnmount() {
//         Router.events.off('routeChangeStart', this.handleRouteChange)
//     }

//     handleRouteChange() {
//         const { elementName } = this.props.router.query

//         console.debug('elementPageView:handleRouteChange elementName', this.props.router)

//         this.setState({
//             element: getElementBySlug(elementName)
//         })
//     }

//     async getStaticProps({ params }) {
//         console.log('Class: getStaticProps', params)

//         return {
//             props: {
//                 id: 12345,
//             }
//         }
//     }

//     async getStaticPaths() {
//         // Return a list of possible value for id
//         console.log('Class: getStaticPaths called')
//     }


//     render() {
//         return (
//             <ElementPage element={this.state.element} />
//         )
//     }
// }

function ElementPageView({ element }) {
    if (!element) {
        const router = useRouter();
        const { element: slug } = router.query;
        element = getElementBySlug(slug)
    }

    return <ElementPage element={element} />
}

ElementPageView.getInitialProps = async ({ req }) => {

    const elementSlug = req && req.params ? req.params.element : ''

    console.log('ElementPageView.getInitialProps elementSlug', elementSlug)
    const element = getElementBySlug(elementSlug)

    return { element };
}


export default withRouter(ElementPageView)
