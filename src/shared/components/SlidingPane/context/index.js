/* eslint-disable react/sort-comp, react/no-unused-state */
import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const SlidingPanelContext = createContext({
  props: {},
  component: null,
  isSliderOpen: false,
  openSlider: () => {},
  closeSlider: () => {},
})

class SlidingPanelProvider extends React.Component {
  openSlider = (component, props = {}) => {
    this.setState({ component, props, isSliderOpen: true })
  }

  closeSlider = () => {
    this.setState({ isSliderOpen: false, props: {} })
  }

  state = {
    isSliderOpen: false,
    component: null,
    props: {},
    openSlider: this.openSlider,
    closeSlider: this.closeSlider,
  }

  render() {
    const { children } = this.props
    return (
      <SlidingPanelContext.Provider value={this.state}>{children}</SlidingPanelContext.Provider>
    )
  }
}

SlidingPanelProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const SlidingPanelConsumer = SlidingPanelContext.Consumer
export { SlidingPanelConsumer, SlidingPanelProvider }
