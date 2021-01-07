import React from 'react'

import PageLayout from 'Components/PageLayout'
import ElementHeader from './ElementHeader'
import ElementBody from './ElementBody'
// import Router from 'next/router'
import { withRouter } from 'react-router'

import {getElementBySlug} from 'Data/elements'

// const element = getElementBySlug('button')


class ElementDetails extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      element: null
    }

    this.handleRouteChange = this.handleRouteChange.bind(this)
  }

  componentDidMount() {
    const { elementName } = this.props.router.query
    // console.debug('this.props.router.query', this.props.router.query)

    this.setState({
      element: getElementBySlug(elementName)
    })

    // Router.events.on('routeChangeStart', this.handleRouteChange)
  }

  componentWillUnmount() {
    // Router.events.off('routeChangeStart', this.handleRouteChange)
  }

  handleRouteChange() {
    const { elementName } = this.props.router.query

    console.debug('elementName', elementName)

    this.setState({
      // element: getElementBySlug(elementName)
      element: getElementBySlug('button')
    })
  }

  render() {
    return (
      <PageLayout>
        <ElementHeader element={this.props.element} />
        <ElementBody element={this.props.element} />
      </PageLayout>
    )
  }
}

export default withRouter(ElementDetails)
